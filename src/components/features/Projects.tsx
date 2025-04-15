import React from "react";
import ProjectCard from "../common/ProjectCard";
import { PROJECTS } from "@/constants";
import { useIsSticky } from "@/hooks/useIsSticky";
import { useNavigation } from "@/context/NavigationContext";

const Projects: React.FC = () => {
    const { isSticky, headerRef } = useIsSticky();
    const { navigateTo } = useNavigation();

    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                {/* Section Title */}
                <div
                    ref={headerRef}
                    className={`mobile-header ${isSticky ? "is-sticky" : ""}`}
                >
                    <h2 className="mobile-header-text uppercase text-xl sm:text-4xl font-bold leading-[1.15] lg:mb-8 md:mb-8 sm:leading-[1.2] lg:leading-[1.15]">
                        Projects
                    </h2>
                </div>

                {/* Projects List */}
                <div className="space-y-0 md:space-y-6">
                    {PROJECTS.slice(0, 4).map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                        />
                    ))}
                </div>

                <div className="mt-10 flex justify-start ml-2">
                    <button
                        onClick={() => navigateTo('all-projects')}
                        className="group inline-flex items-center text-white-100 font-bold text-lg hover:text-teal-300 transition-colors duration-200 border-b border-transparent hover:border-teal-300"
                    >
                        View All Projects
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
