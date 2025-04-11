import React, { createContext, useContext, useState, useEffect } from 'react';

type Route = 'home' | 'all-projects';

interface NavigationContextType {
    currentRoute: Route;
    navigateTo: (route: Route) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize state based on current URL
    const getInitialRoute = (): Route => {
        return window.location.pathname === '/all-projects' ? 'all-projects' : 'home';
    };

    const [currentRoute, setCurrentRoute] = useState<Route>(getInitialRoute());

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = () => {
            setCurrentRoute(window.location.pathname === '/all-projects' ? 'all-projects' : 'home');
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigateTo = (route: Route) => {
        setCurrentRoute(route);
        // Update URL without page reload
        const path = route === 'home' ? '/' : '/all-projects';
        window.history.pushState({}, '', path);
    };

    return (
        <NavigationContext.Provider value={{ currentRoute, navigateTo }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};
