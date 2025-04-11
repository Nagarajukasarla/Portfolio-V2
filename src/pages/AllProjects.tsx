import React from "react";
import ProjectCard2 from "@/components/common/ProjectCard2";
import { useNavigation } from "@/context/NavigationContext";
import { PROJECTS } from "@/constants";
import { useIsSticky } from "@/hooks/useIsSticky";

const AllProjects: React.FC = () => {
    const { navigateTo } = useNavigation();
    const { isSticky, headerRef } = useIsSticky();
    const sortedProjects = [...PROJECTS];

    return (
        <div className="relative min-h-screen bg-[#0f1624]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                {/* Back Link */}
                <button
                    onClick={() => navigateTo("home")}
                    className="group inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-200 mb-8"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="text-gray-400">Nagaraju Kasarla</span>
                </button>

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-white mb-12">
                    All Projects
                </h1>

                {/* Projects List Header */}
                <div
                    ref={headerRef}
                    className={`sticky top-0 z-30 transition-all duration-300 ${
                        isSticky 
                            ? "bg-[#0f1624]/80 backdrop-blur-sm pt-6 pb-4" 
                            : "pb-4"
                    }`}
                >
                    <div className="border-b border-white/10">
                        {/* Mobile Header (< 640px) */}
                        <div className={`sm:hidden flex gap-6 ${isSticky ? "pb-3" : ""}`}>
                            <span className="text-gray-400 text-sm w-16 ">Year</span>
                            <span className="text-gray-400 text-sm">Project</span>
                        </div>

                        {/* Tablet Header (640px - 1023px) */}
                        <div className={`hidden sm:grid lg:hidden grid-cols-[100px_1fr_150px] ${isSticky ? "pb-3" : ""}`}>
                            <span className="text-gray-400 text-sm">Year</span>
                            <span className="text-gray-400 text-sm">Project</span>
                            <span className="text-gray-400 text-sm">Link</span>
                        </div>

                        {/* Desktop Header (≥ 1024px) */}
                        <div className={`hidden lg:grid grid-cols-[100px_300px_1fr_320px] gap-4 ${isSticky ? "pb-3" : ""}`}>
                            <span className="text-gray-400 text-sm">Year</span>
                            <span className="text-gray-400 text-sm">Project</span>
                            <span className="text-gray-400 text-sm pl-2">Built with</span>
                            <span className="text-gray-400 text-sm">Link</span>
                        </div>
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-0">
                    {sortedProjects.sort((a, b) => b.year - a.year).map((project, index) => (
                        <ProjectCard2
                            key={index}
                            year={project.year}
                            title={project.title}
                            tags={project.tags}
                            link={project.link!}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
