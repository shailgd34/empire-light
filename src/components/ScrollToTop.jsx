import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button 
                className={`scroll-top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>

            <style jsx>{`
                .scroll-top {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    background: #fff;
                    color: var(--accent);
                    border: 1px solid #eee;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 999;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.4s var(--ease-expo);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .scroll-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .scroll-top:hover {
                    background: var(--accent);
                    color: #fff;
                    border-color: var(--accent);
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(135, 86, 0, 0.3);
                }
                @media (max-width: 768px) {
                    .scroll-top {
                        bottom: 100px; /* Above the sticky mobile CTA if any */
                        right: 20px;
                        width: 45px;
                        height: 45px;
                    }
                }
            `}</style>
        </>
    );
};

export default ScrollToTop;
