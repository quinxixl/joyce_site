import React, {useEffect, useRef, useState} from "react";

const RevealText = ({ children, delay = 0, direction = 'up' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`reveal-text ${isVisible ? 'visible' : ''} ${direction}`}>
            {children}
        </div>
    );
};

export default RevealText;