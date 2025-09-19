import React, {useEffect} from "react";
import Lenis from "lenis";

const SmoothScroll = ({children}) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 5,
            easing: (t) => Math.min(1,1.001- Math.pow(2, -10*t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }

    }, []);
    return <div>{children}</div>;
};

export default SmoothScroll;

