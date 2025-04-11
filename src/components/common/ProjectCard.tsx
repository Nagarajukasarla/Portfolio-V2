import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface ProjectCardProps {
    image: {
        small: string;
        medium: string;
        large: string;
        default: string;
    };
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    title,
    description,
    tags,
    link
}) => {
    const CardContent = () => (
        <>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-200 flex items-center gap-2">
                {title}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline-block transform transition-transform duration-200 group-hover:translate-x-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                    />
                </svg>
            </h3>
            <p className="text-white/70 text-sm mb-4">{description}</p>
            <div className="md:hidden mb-4">
                <ResponsiveImage
                    sources={image}
                    alt={title}
                    className="w-full h-auto rounded-lg"
                    usePicture={true}
                />
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="title-and-tag-text tag-style font-semibold text-xs px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </>
    );

    const CardWrapper = ({ children }: { children: React.ReactNode }) => {
        if (link) {
            return (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    {children}
                </a>
            );
        }
        return <>{children}</>;
    };

    return (
        <>
            {/* Mobile View (Simple Layout) */}
            <CardWrapper>
                <div className="md:hidden">
                    <div className="py-6">
                        <CardContent />
                    </div>
                    <div className="border-b border-white/10"></div>
                </div>
            </CardWrapper>

            {/* Desktop View (Card Layout) */}
            <CardWrapper>
                <div className="hidden md:block">
                    <div className="service-card rounded-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex gap-6 p-6">
                            <div className="w-1/3">
                                <ResponsiveImage
                                    sources={image}
                                    alt={title}
                                    className="w-full h-auto rounded-lg"
                                    usePicture={true}
                                />
                            </div>
                            <div className="w-2/3">
                                <CardContent />
                            </div>
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </>
    );
};

export default ProjectCard;
