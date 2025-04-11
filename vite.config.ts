import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        imagemin({
            mozjpeg: {
                quality: 90, // Higher quality for JPEG
                progressive: true,
            },
            pngquant: {
                quality: [0.9, 0.95], // Higher quality range for PNG
                speed: 2, // Slower but better optimization
                strip: true,
            },
            // Skips other image types for optimization
            filter: (file) => /\.(jpe?g|png)$/i.test(file),
            /* Keeping these commented for future reference
            optipng: {
                optimizationLevel: 5 // Balanced optimization
            },
            gifsicle: {
                optimizationLevel: 3, // Balanced optimization
                interlaced: false
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: false // Preserve viewBox for better scaling
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false
                    },
                    {
                        name: 'removeTitle',
                        active: false // Keep title for accessibility
                    }
                ]
            }
            */
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        cssCodeSplit: false, // Bundle all CSS into one file
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    // Add other large dependencies here
                },
                // Customize asset file names
                assetFileNames: (assetInfo) => {
                    let extType = "";
                    assetInfo.names.forEach((name) => {
                        const info = (name || "").split(".");
                        let extType = info[info.length - 1];
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = "img";
                        } else if (/woff|woff2|ttf|otf/i.test(extType)) {
                            extType = "fonts";
                        } else if (/css/i.test(extType)) {
                            extType = "css";
                        }
                    });
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
            },
        },
        // Generate a manifest file
        manifest: true,
        sourcemap: true,
        assetsInlineLimit: 4096,
        emptyOutDir: true,
        target: "esnext",
    },
    // Optimize dev server
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        allowedHosts: ['.ngrok-free.app']
    },
});
