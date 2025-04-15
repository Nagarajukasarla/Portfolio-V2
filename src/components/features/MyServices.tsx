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
                    className={`mobile-header ${isSticky ? "is-sticky" : ""}`}
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

                {/* View Full Resume Button */}
                <div className="flex justify-start mt-8 ml-2">
                    <a
                        href="https://drive.google.com/file/d/1mShEUF8lCIRbvqkCMO-mZMFKsCZpZaAU/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center text-white-100 font-bold text-lg hover:text-teal-300 transition-colors duration-200 border-b border-transparent hover:border-teal-300"
                    >
                        View Full Resume
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyServices;
