"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ children }: any) => {
    const containerRef = React.useRef<any>(null);
    const [isHovered, setIsHovered] = React.useState(false);

    // Calculate the width of the content
    React.useEffect(() => {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;

        if (contentWidth > containerWidth) {
            const animationDuration = (contentWidth / 50); // Adjust speed here
            containerRef.current.style.setProperty('--animation-duration', `${animationDuration}s`);
        }
    }, []);

    return (
        <div
            className="marquee-container"
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={`marquee-content ${isHovered ? 'paused' : ''}`}
                animate={{
                    x: '-100%',
                    transition: {
                        duration: 'var(--animation-duration)',
                        ease: 'linear',
                        repeat: Infinity,
                        delay: 0.5 // Adjust delay here
                    }
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

const Velocity = () => {
    return (
        <div>
            <Marquee>
                <p>Your scrolling content goes here</p>
            </Marquee>
        </div>
    );
}

export default Velocity;
