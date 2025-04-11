import React from "react";
import ServiceCard from "../common/ServiceCard";
import { SERVICES } from "@/constants";
import { useIsSticky } from "@/hooks/useIsSticky";

const MyServices: React.FC = () => {
    const { isSticky, headerRef } = useIsSticky();

    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div 
                    ref={headerRef}
                    className={`mobile-header ${isSticky ? 'is-sticky' : ''}`}
                >
                    <h2 className="mobile-header-text uppercase text-xl sm:text-4xl font-bold lg:mb-8 md:mb-8 leading-[1.15] sm:leading-[1.2] lg:leading-[1.15]">
                    Development Areas
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            tags={service.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyServices;
