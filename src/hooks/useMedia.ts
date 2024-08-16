"use client"
import { useState, useEffect } from 'react';
export enum sizes {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small"
}
const useMedia = () => {
    const [screenSize, setScreenSize] = useState<sizes>(sizes.LARGE);

    useEffect(() => {
        const updateScreenSize = () => {
            if (window.matchMedia('(max-width: 640px)').matches) {
                setScreenSize(sizes.SMALL);
            } else if (window.matchMedia('(min-width:640px) and (max-width: 1440px)').matches) {
                setScreenSize(sizes.MEDIUM);
            } else {
                setScreenSize(sizes.LARGE);
            }
        };
        updateScreenSize();

        window.addEventListener('resize', updateScreenSize);

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);
    return screenSize;
};

export default useMedia;