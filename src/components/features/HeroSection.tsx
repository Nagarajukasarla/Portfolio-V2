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
                        {/* Professional summary */}
                        <p className="text-gray-300 text-sm sm:text-base">
                            I'm a passionate{" "}
                            <span className="text-white/90 font-semibold">
                                Full Stack Developer
                            </span>{" "}
                            who loves building polished, high-performance
                            applications that solve real-world problems. My
                            expertise spans modern frontend technologies like{" "}
                            <span className="text-white/90 font-semibold">
                                React
                            </span>{" "}
                            <span className="text-white/90 font-semibold">
                                TypeScript{" "}
                            </span>
                            with{" "}
                            <span className="text-white/90 font-semibold">
                                TailwindCSS
                            </span>{" "}
                            and robust backend systems powered by{" "}
                            <span className="text-white/90 font-semibold">
                                Java, Spring Boot,{" "}
                            </span>
                            and{" "}
                            <span className="text-white/90 font-semibold">
                                Spring Security.{" "}
                            </span>
                            I'm also capable of building cross-platform{" "}
                            <span className="text-white/90 font-semibold">
                                Android
                            </span>{" "}
                            and{" "}
                            <span className="text-white/90 font-semibold">
                                iOS apps
                            </span>{" "}
                            <i>because sometimes the web just isn't enough! </i>
                        </p>

                        {/* Experience highlight */}
                        <p className="text-gray-300 text-sm sm:text-base">
                            Over the past year, I've contributed to a variety of
                            impactful projects from designing{" "}
                            <span className="text-white/90 font-semibold">
                                scalable admin platforms
                            </span>{" "}
                            to implementing{" "}
                            <span className="text-white/90 font-semibold">
                                highly secure authentication systems
                            </span>{" "}
                            that keep user data locked up tighter than your
                            favorite snack in the office fridge.
                        </p>

                        {/* Personal approach */}
                        <p className="text-gray-300 text-sm sm:text-base">
                            I thrive where clean design meets smart engineering,
                            and I find{" "}
                            <span className="text-white/90 font-semibold">
                                real joy
                            </span>{" "}
                            in{" "}
                            <span className="text-white/90 font-semibold">
                                turning business requirements{" "}
                            </span>
                            into{" "}
                            <span className="text-white/90 font-semibold">
                                beautiful, functional software
                            </span>
                            . Whether it's a{" "}
                            <span className="text-white/90 font-semibold">
                                blazing-fast dashboard
                            </span>{" "}
                            or a{" "}
                            <span className="text-white/90 font-semibold">
                                mobile app
                            </span>{" "}
                            that just works, I aim to{" "}
                            <span className="text-white/90 font-semibold">
                                deliver work that feels smooth, looks great{" "}
                            </span>
                            and is built to last.
                        </p>

                        {/* Call to action */}
                        <p className="text-white font-semibold text-sm sm:text-base">
                            I'm currently open to new opportunities and would
                            love to help build your next product designed
                            thoughtfully, developed professionally, and
                            delivered with care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
