import MouseGlow from "./components/features/MouseGlow";
import Root from "./pages/Root";
import AllProjects from "./pages/AllProjects";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { useEffect } from 'react';

const AppContent = () => {
    const { currentRoute } = useNavigation();

    return (
        <main className="min-h-screen bg-[#0f1624]">
            <MouseGlow />
            {currentRoute === 'home' ? <Root /> : <AllProjects />}
        </main>
    );
};

function App() {
    useEffect(() => {
        // Ensure content is visible and loader is removed
        document.body.classList.add('content-loaded');
        const loader = document.querySelector('.loading-spinner');
        if (loader) {
            loader.style.display = 'none';
        }
    }, []);

    return (
        <NavigationProvider>
            <AppContent />
        </NavigationProvider>
    );
}

export default App;
