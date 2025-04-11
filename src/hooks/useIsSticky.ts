import { useState, useEffect, useRef } from 'react';

export const useIsSticky = () => {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const observer = new IntersectionObserver(
            ([e]) => {
                setIsSticky(e.intersectionRatio < 1);
            },
            {
                threshold: [1],
                rootMargin: '-1px 0px 0px 0px'  // Triggers immediately when element starts sticking
            }
        );

        observer.observe(header);

        return () => {
            observer.unobserve(header);
        };
    }, []);

    return { isSticky, headerRef };
};