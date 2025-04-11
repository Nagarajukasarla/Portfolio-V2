/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                glow: "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                },
                glow: {
                    "0%": {
                        "box-shadow":
                            "0 0 3px rgba(59, 130, 246, 0.4), 0 0 6px rgba(236, 72, 153, 0.4)",
                        filter: "brightness(1)",
                    },
                    "50%": {
                        "box-shadow":
                            "0 0 8px rgba(59, 130, 246, 0.6), 0 0 15px rgba(236, 72, 153, 0.6)",
                        filter: "brightness(1.2)",
                    },
                    "100%": {
                        "box-shadow":
                            "0 0 3px rgba(59, 130, 246, 0.4), 0 0 6px rgba(236, 72, 153, 0.4)",
                        filter: "brightness(1)",
                    },
                },
            },
        },
    },
    plugins: [],
}
