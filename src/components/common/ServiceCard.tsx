import React from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, tags }) => {
    return (
        <div className="service-card rounded-lg p-6 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-bold title-and-tag-text mb-3">{title}</h3>
            <p className="service-description text-sm mb-4">{description}</p>
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
        </div>
    );
};

export default ServiceCard;
