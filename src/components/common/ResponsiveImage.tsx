import React, { useState } from "react";

interface ImageSources {
    small: string;
    medium: string;
    large: string;
    default: string;
}

interface ResponsiveImageProps {
    sources: ImageSources;
    alt: string;
    className?: string;
    usePicture?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
    sources,
    alt,
    className = "",
    usePicture = false
}) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
        console.error(`Failed to load image: ${sources.default}`);
    };

    // Fallback image when loading fails
    if (imageError) {
        return (
            <div className={`${className} bg-gray-800 flex items-center justify-center`}>
                <span className="text-gray-400 text-sm">Image unavailable</span>
            </div>
        );
    }

    if (usePicture) {
        return (
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={sources.large}
                />
                <source
                    media="(min-width: 640px)"
                    srcSet={sources.medium}
                />
                <source
                    srcSet={sources.small}
                />
                <img
                    src={sources.default}
                    alt={alt}
                    className={className}
                    loading="lazy"
                    onError={handleImageError}
                />
            </picture>
        );
    }

    return (
        <img
            srcSet={`
                ${sources.small} 300w,
                ${sources.medium} 600w,
                ${sources.large} 900w
            `}
            sizes="(min-width: 1024px) 900px,
                   (min-width: 640px) 600px,
                   300px"
            src={sources.default}
            alt={alt}
            className={className}
            loading="lazy"
            onError={handleImageError}
        />
    );
};

export default ResponsiveImage;
