import GradientButton from "../common/GradientButton";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Main content container */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Flex container for main content and description */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
                    {/* Left side - Main heading and CTA */}
                    <div className="w-full lg:w-1/2 max-w-2xl">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.15] sm:leading-[1.2] lg:leading-[1.15]">
                            <span className="gradient-text inline-block">
                                Nagaraju
                            </span>
                            {/* Line break only visible on mobile and large screens */}
                            <br className="sm:hidden lg:block" />
                            {/* Add spacing for medium screens */}
                            <span className="hidden sm:inline-block lg:hidden">
                                &nbsp;
                            </span>
                            <span className="gradient-text inline-block leading-[1.15] sm:leading-[1.2] lg:leading-[1.15]">
                                Kasarla
                            </span>
                        </h1>
                        <p className="text-white text-base sm:text-lg mb-8">
                            <span className="text-blue-400">
                                Full Stack Developer
                            </span>{" "}
                            <br />
                            Bringing digital visions to life through performance driven,
                            <br className="hidden sm:block" />
                            beautifully designed solutions
                        </p>
                        <GradientButton
                            variant="primary"
                            size="md"
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.getElementById('contact');
                                contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-[180px]"
                        >
                            GET IN TOUCH
                        </GradientButton>
                    </div>

                    {/* Right side - Description */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Short, direct highlights */}
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <p className="text-white/90 font-semibold text-lg">
                                            Full Stack Developer | Building fast, beautiful web & mobile apps

                                </p>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    Crafting high-performance applications with React, TypeScript, Node.js and Spring Boot.
                                    I specialize in building scalable platforms and secure authentication systems
                                    that deliver exceptional user experiences.
                                </p>
                                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                                    <span className="bg-white/10 px-3 py-1.5 rounded text-blue-300 font-medium">React</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded text-blue-300 font-medium">TypeScript</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded text-green-300 font-medium">Node.js</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded text-green-300 font-medium">Spring Boot</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded text-green-300 font-medium">Java</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-5 text-gray-300 text-sm sm:text-base space-y-1">
                                <li>Specialized in dashboards, authentication, and scalable platforms</li>
                                <li>Delivering smooth, secure, and modern digital products</li>
                                <li>Open to new opportunities & collaborations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
