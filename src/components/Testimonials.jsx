import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const reviews = [
    {
        name: 'David R.',
        rating: 5,
        text: 'Very good service. Booking was very easy and the girl was very beautiful. Highly recommended.',
        image: '/images/escorts (5).jpg'
    },
    {
        name: 'James T.',
        rating: 5,
        text: 'Discreet and professional. Driver was on time and girl was 100% real. Best agency in Sheffield.',
        image: '/images/escorts (6).jpg'
    },
    {
        name: 'Mark L.',
        rating: 5,
        text: 'Great experience. Friendly staff and very beautiful girls. I will book again for sure.',
        image: '/images/escorts (7).jpg'
    },
    {
        name: 'Chris B.',
        rating: 5,
        text: 'Absolute gold standard. The service is 100% private and the companion was stunning.',
        image: '/images/escorts (8).jpg'
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const sectionRef = useRef(null);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % (reviews.length - 2));
    const prevSlide = () => setCurrent((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2));

    return (
        <section ref={sectionRef} className="section testimonials-section" style={{ background: '#f9f9f9', padding: '60px 0' }}>
            <div className="container">
                <div className="section-header anim-reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Client Reviews</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        What They <span style={{ color: 'var(--accent)' }}>Say</span>
                    </h2>
                </div>

                <div className="carousel-wrapper anim-reveal">
                    <div className="carousel-track" style={{ transform: `translateX(-${current * (100 / 3)}%)` }}>
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card-modern">
                                <div className="card-inner">
                                    <div className="review-top">
                                        <div className="thumb-img">
                                            <img src={review.image} alt={review.name} />
                                        </div>
                                        <div className="author-meta">
                                            <span className="name">{review.name}</span>
                                            <div className="stars">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-body">
                                        <p className="text">"{review.text}"</p>
                                        <span className="tag">Verified Booking</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-controls">
                        <button className="nav-btn prev" onClick={prevSlide} disabled={current === 0}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className="nav-btn next" onClick={nextSlide} disabled={current >= reviews.length - 3}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .carousel-wrapper {
                    position: relative;
                    overflow: hidden;
                    padding: 20px 0 40px;
                }
                .carousel-track {
                    display: flex;
                    transition: 0.8s var(--ease-expo);
                    gap: 30px;
                }
                .review-card-modern {
                    width: calc((100% - 60px) / 3);
                    flex-shrink: 0;
                }
                .card-inner {
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 20px;
                    padding: 40px;
                    height: 100%;
                    transition: 0.4s;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                }
                .card-inner:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent);
                    box-shadow: 0 20px 50px rgba(135, 86, 0, 0.08);
                }
                .review-top {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 25px;
                }
                .thumb-img {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid var(--accent);
                    flex-shrink: 0;
                }
                .thumb-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .author-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .name {
                    font-size: 18px;
                    font-weight: 800;
                    color: #111;
                }
                .stars {
                    display: flex;
                    gap: 3px;
                }
                .review-body {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .text {
                    font-size: 15px;
                    line-height: 1.8;
                    color: #555;
                    font-style: italic;
                    font-weight: 500;
                }
                .tag {
                    font-size: 10px;
                    font-weight: 900;
                    color: var(--accent);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .carousel-controls {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 40px;
                }
                .nav-btn {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: 0.3s;
                    color: #111;
                    z-index: 10;
                }
                .nav-btn:hover:not(:disabled) {
                    background: var(--accent);
                    border-color: var(--accent);
                    color: #fff !important;
                }
                .nav-btn:disabled {
                    opacity: 0.2;
                    cursor: not-allowed;
                }
                .nav-btn svg {
                    stroke: currentColor !important;
                    display: block;
                }

                @media (max-width: 1024px) {
                    .review-card-modern { min-width: calc(50% - 15px); }
                }
                @media (max-width: 768px) {
                    .review-card-modern { min-width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
