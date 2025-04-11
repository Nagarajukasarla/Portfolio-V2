import React from "react";

interface ProjectCard2Props {
    year: number;
    title: string;
    tags: string[];
    link?: string;
}

const ProjectCard2: React.FC<ProjectCard2Props> = ({ year, title, tags, link }) => {
    const getDomain = (url: string) => {
        try {
            return new URL(url).hostname;
        } catch {
            return url;
        }
    };

    const isGithubLink = (url: string) => {
        try {
            return getDomain(url).includes('github.com');
        } catch {
            return false;
        }
    };

    const renderLink = (url: string) => {
        if (isGithubLink(url)) {
            return (
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200 inline-flex items-start gap-1"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4 fill-current mt-[2px]"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                    </svg>
                    <span>GitHub</span>
                </a>
            );
        }
        return (
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200 inline-flex items-start gap-1"
            >
                <span>{getDomain(url)}</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">↗</span>
            </a>
        );
    };

    const renderMobileTitle = (url?: string) => {
        if (url) {
            return (
                <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 transition-colors duration-200"
                >
                    <span className="mr-2">{title}</span>
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>
            );
        }
        return <span className="text-white">{title}</span>;
    };

    return (
        <div className="group py-4 border-b border-white/10">
            {/* Mobile Layout (< 640px) */}
            <div className="sm:hidden">
                <div className="flex gap-6 mb-2">
                    <span className="text-gray-400 w-16">{year}</span>
                    <div className="flex-1">
                        <div className="flex flex-col items-start">
                            {renderMobileTitle(link)}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="title-and-tag-text tag-style font-semibold text-xs px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (640px - 1023px) */}
            <div className="hidden sm:grid lg:hidden grid-cols-[100px_1fr_150px] items-start">
                <span className="text-gray-400">{year}</span>
                <span className="text-white">{title}</span>
                {link && renderLink(link)}
            </div>

            {/* Desktop Layout (≥ 1024px) */}
            <div className="hidden lg:grid grid-cols-[100px_300px_1fr_320px] items-start gap-4">
                <span className="text-gray-400">{year}</span>
                <span className="text-white">{title}</span>
                <div className="flex flex-wrap gap-2 pl-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="title-and-tag-text tag-style font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>
                {link && renderLink(link)}
            </div>
        </div>
    );
};

export default ProjectCard2;
