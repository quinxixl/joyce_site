import React, { useState, useEffect } from 'react';

const ImageFadeSwitcher = ({
                               images,
                               interval = 3000,
                               fadeDuration = 1000,
                               className = 'section__title-picture',
                           }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setIsMounted(true);

        const switchImage = async () => {
            if (!isMounted) return;

            try {
                setIsVisible(false);

                await new Promise(resolve =>
                    setTimeout(resolve, fadeDuration / 2)
                );

                if (!isMounted) return;

                setCurrentIndex(prevIndex =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );

                setIsVisible(true);

            } catch (error) {
                console.error('Error switching image:', error);
            }
        };

        const timer = setInterval(switchImage, interval);

        return () => {
            setIsMounted(false);
            clearInterval(timer);
        };
    }, [images.length, interval, fadeDuration, isMounted]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className={`image-fade-switcher ${className}`}>
            <img
                src={images[currentIndex]}
                className="fade-switch-image section__title-picture"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity ${fadeDuration}ms ease-in-out`,
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />
        </div>
    );
};

export default ImageFadeSwitcher;