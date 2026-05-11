import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const reviews = [
        {
            name: "James T.",
            location: "Sheffield Central",
            initial: "JT",
            text: "Absolutely outstanding service from start to finish. The girl was exactly as described in her profile and very professional. Highly recommended for anyone in South Yorkshire."
        },
        {
            name: "Mark R.",
            location: "Leeds City Hub",
            initial: "MR",
            text: "Very impressed with the discretion and punctuality. The booking process was simple and the companion was delightful company. Will definitely be booking again."
        },
        {
            name: "Simon P.",
            location: "Nottingham Base",
            initial: "SP",
            text: "A truly premium experience. Everything was handled with the utmost privacy and the girl was stunning. The best agency I've used in the Midlands."
        }
    ];

    return (
        <section className="bg-bg-primary py-16 md:py-24 relative overflow-hidden" id="feedback">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-secondary -skew-x-12 translate-x-1/4 pointer-events-none opacity-30"></div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left: Authority & Stats */}
                    <div className="lg:col-span-5 space-y-8 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Client Feedback</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Outstanding <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Reputation</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="#C5A059"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                ))}
                                <span className="ml-4 text-black font-bold text-lg">4.9 / 5.0</span>
                            </div>
                            <p className="text-black/60 text-base md:text-lg font-medium leading-relaxed max-w-sm">
                                We pride ourselves on the positive feedback we receive from our distinguished clients across the North.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-black/10 flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-4 border-bg-primary bg-bg-secondary flex items-center justify-center">
                                        <span className="text-gold text-[0.6rem] font-bold">RE</span>
                                    </div>
                                ))}
                            </div>
                            <span className="text-black/40 text-xs font-bold uppercase tracking-widest">500+ Verified Reviews</span>
                        </div>
                    </div>

                    {/* Right: Testimonial Slider */}
                    <div className="lg:col-span-7 anim-section-reveal">
                        <div className="bg-white p-10 md:p-14 shadow-2xl border border-black/5 relative overflow-hidden group">
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01693 21L3.01693 18C3.01693 16.8954 3.91236 16 5.01693 16H8.01693C8.56921 16 9.01693 15.5523 9.01693 15V9C9.01693 8.44772 8.56921 8 8.01693 8H4.01693C3.46465 8 3.01693 8.44772 3.01693 9V12C3.01693 12.5523 2.56921 13 2.01693 13H0.01693C-0.535355 13 -1.01693 12.5523 -1.01693 12V9C-1.01693 7.34315 0.326217 6 1.98307 6H8.01693C9.67378 6 11.0169 7.34315 11.0169 9V15C11.0169 18.3137 8.33065 21 5.01693 21H3.01693Z"/></svg>
                            </div>

                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={40}
                                slidesPerView={1}
                                autoplay={{ delay: 5000 }}
                                pagination={{ 
                                    clickable: true,
                                    el: '.testimonial-pagination'
                                }}
                            >
                                {reviews.map((review, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-xl">
                                                    <span className="text-gold text-lg font-bold">{review.initial}</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-lg font-bold text-black">{review.name}</h4>
                                                    <span className="text-gold text-[0.6rem] font-bold uppercase tracking-widest">{review.location}</span>
                                                </div>
                                            </div>
                                            <p className="text-black/70 text-lg md:text-xl font-medium leading-relaxed italic">
                                                "{review.text}"
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            <div className="testimonial-pagination flex justify-start gap-4 mt-8"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                .testimonial-pagination .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 0;
                    opacity: 1;
                    transition: all 0.5s ease;
                }
                .testimonial-pagination .swiper-pagination-bullet-active {
                    background: #8E6E36;
                    width: 32px;
                }
                `}
            </style>
        </section>
    );
};

export default Testimonials;
