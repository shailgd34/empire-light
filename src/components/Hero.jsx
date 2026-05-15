import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: '/images/pexels-valeriya-597203.jpg',
            title: 'TOP ESCORT AGENCY',
            subtitle: 'IN SHEFFIELD',
            desc: 'We provide beautiful and professional girls in Sheffield. Our service is 100% private and real for all clients.'
        },
        {
            image: '/images/pexels-vika-glitter-392079-30219290.jpg',
            title: 'BEAUTIFUL GIRLS',
            subtitle: 'REAL & VERIFIED',
            desc: 'All our girl photos are 100% real. We have the best collection of girls in South Yorkshire.'
        },
        {
            image: '/images/pexels-vika-glitter-392079-11363751.jpg',
            title: '24/7 PRIVATE',
            subtitle: 'SERVICE FOR YOU',
            desc: 'Booking is very easy and fast. Call or WhatsApp us anytime to book your favorite girl.'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section id="home" className="hero-section" style={{
            height: '100vh',
            position: 'relative',
            background: '#000',
            overflow: 'hidden'
        }}>
            {/* Background Slider */}
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="hero-overlay"></div>
                    </div>
                ))}
            </div>

            {/* Static Content with Dynamic Text */}
            <div className="container hero-container">
                <div className="hero-content-wrapper">
                    <div className="hero-badge anim-reveal">
                        <span className="badge-line"></span>
                        <span className="badge-txt">SINCE 2012</span>
                        <span className="badge-line"></span>
                    </div>

                    <div className="hero-text-area">
                        <h1 className="hero-title anim-reveal">
                            {slides[currentSlide].title} <br />
                            <span className="accent-text">{slides[currentSlide].subtitle}</span>
                        </h1>

                        <p className="hero-desc anim-reveal">
                            {slides[currentSlide].desc}
                        </p>

                        <div className="hero-actions anim-reveal">
                            <a href="#our-girls" className="btn btn-primary rounded-full">EXPLORE COLLECTION</a>
                            <a href="tel:07368428158" className="btn btn-outline rounded-full">BOOK DISCREETLY</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous Slide" style={{ zIndex: 100 }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="nav-arrow next" onClick={nextSlide} aria-label="Next Slide" style={{ zIndex: 100 }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            {/* Pagination Dots & Thumbnails */}
            <div className="hero-controls">
                <div className="thumb-nav">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`thumb-item ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        >
                            <img src={slide.image} alt="Slide Preview" />
                            <div className="thumb-progress"></div>
                        </div>
                    ))}
                </div>

                <div className="dot-nav">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hero-slider {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }
                .hero-slide {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                    transform: scale(1.1);
                }
                .hero-slide.active {
                    opacity: 1;
                    transform: scale(1);
                    transition: opacity 1s ease-in-out, transform 10s ease-out;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%);
                }
                .hero-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                }
                .hero-content-wrapper {
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                }
                .hero-badge {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 2rem;
                }
                .badge-line {
                    width: 40px;
                    height: 1px;
                    background: var(--accent);
                    opacity: 0.5;
                }
                .badge-txt {
                    color: var(--accent);
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                }
                .hero-title {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 2.5rem;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                .accent-text {
                    color: var(--accent);
                }
                .hero-desc {
                    color: rgba(255,255,255,0.9);
                    font-size: clamp(14px, 2vw, 17px);
                    line-height: 1.8;
                    margin: 0 auto 4rem;
                    font-weight: 500;
                    max-width: 680px;
                    text-shadow: 0 5px 15px rgba(0,0,0,0.5);
                }
                .hero-actions {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                .hero-actions .btn {
                    padding: 18px 45px;
                }
                .hero-actions .btn-outline {
                    border-color: #fff;
                    color: #fff;
                }
                .hero-actions .btn-outline:hover {
                    background: #fff;
                    color: #000;
                    border-color: #fff;
                }
                .nav-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0,0,0,0.3);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 999;
                    transition: 0.3s;
                    backdrop-filter: blur(10px);
                    border-radius: 50%;
                }
                .nav-arrow:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                    transform: translateY(-50%) scale(1.1);
                }
                .nav-arrow.prev { left: 40px; }
                .nav-arrow.next { right: 40px; }
                .nav-arrow svg {
                    stroke: #fff !important;
                    display: block;
                }

                /* Controls */
                .hero-controls {
                    position: absolute;
                    bottom: 60px;
                    left: 0;
                    width: 100%;
                    z-index: 20;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                }
                .thumb-nav {
                    display: flex;
                    gap: 15px;
                }
                .thumb-item {
                    width: 80px;
                    height: 50px;
                    overflow: hidden;
                    border: 2px solid rgba(255,255,255,0.2);
                    cursor: pointer;
                    position: relative;
                    transition: 0.3s;
                }
                .thumb-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.5;
                    transition: 0.3s;
                }
                .thumb-item.active {
                    border-color: var(--accent);
                    transform: translateY(-5px);
                }
                .thumb-item.active img {
                    opacity: 1;
                    transform: scale(1.1);
                }
                .thumb-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: var(--accent);
                    width: 0;
                }
                .thumb-item.active .thumb-progress {
                    width: 100%;
                    transition: width 8s linear;
                }
                
                .dot-nav {
                    display: flex;
                    gap: 12px;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    border: none;
                    cursor: pointer;
                    transition: 0.3s;
                    padding: 0;
                }
                .dot.active {
                    background: var(--accent);
                    transform: scale(1.5);
                }

                @media (max-width: 1024px) {
                    .nav-arrow { display: none; }
                    .thumb-nav { display: none; }
                    .hero-actions { flex-direction: column; gap: 15px; }
                    .hero-actions .btn { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
