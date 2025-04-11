import Contact from "@/components/features/Contact";
import HeroSection from "@/components/features/HeroSection";
import MyServices from "@/components/features/MyServices";
import Projects from "@/components/features/Projects";

const Root = () => {
    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            {/* Single gradient background for entire page */}
            <div className="fixed inset-0 gradient-bg z-0" />
            
            {/* Scrollable container */}
            <div className="relative z-10 h-screen overflow-y-auto scroll-smooth">
                {/* Hero section */}
                <HeroSection />
                
                {/* Services */}
                <MyServices />

                {/* Projects */}
                <Projects />

                {/* Contact section */}
                <Contact />
            </div>
        </main>
    );
};

export default Root;
