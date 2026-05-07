import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Selection = () => {
    const girls = [
        { name: 'Sasha', location: 'Sheffield', img: '/images/profile1.png', tag: 'Featured' },
        { name: 'Elena', location: 'Leeds', img: '/images/profile2.png', tag: 'Elite' },
        { name: 'Jade', location: 'Nottingham', img: '/images/pexels-babydov-7788013.jpg', tag: 'New' },
        { name: 'Sophia', location: 'Doncaster', img: '/images/pexels-faizialiphotography-13036116.jpg', tag: 'Top Rated' },
        { name: 'Amelia', location: 'Rotherham', img: '/images/pexels-heyy-kazz-705792-17041606.jpg', tag: 'Exclusive' },
        { name: 'Isabella', location: 'Barnsley', img: '/images/pexels-innamykytas-7001343.jpg', tag: 'New Arrival' },
        { name: 'Mia', location: 'Chesterfield', img: '/images/pexels-instasky-19061154.jpg', tag: 'Featured' },
        { name: 'Charlotte', location: 'Sheffield', img: '/images/pexels-jennyg1rl-11655145.jpg', tag: 'Elite' },
        { name: 'Ava', location: 'Leeds', img: '/images/pexels-krivitskiy-8467519.jpg', tag: 'New' },
        { name: 'Harper', location: 'Nottingham', img: '/images/pexels-macnalodao-20270579.jpg', tag: 'Top Rated' },
        { name: 'Evelyn', location: 'Doncaster', img: '/images/pexels-noirgenesis-5953288.jpg', tag: 'Exclusive' },
        { name: 'Abigail', location: 'Rotherham', img: '/images/pexels-toni-5591007.jpg', tag: 'New Arrival' },
        { name: 'Emily', location: 'Barnsley', img: '/images/pexels-vika-glitter-392079-10909189.jpg', tag: 'Featured' },
        { name: 'Elizabeth', location: 'Chesterfield', img: '/images/pexels-vika-glitter-392079-11363751.jpg', tag: 'Elite' },
        { name: 'Mila', location: 'Sheffield', img: '/images/pexels-vika-glitter-392079-13066145.jpg', tag: 'New' }
    ];

    return (
        <section className="bg-black py-16 md:py-24 relative overflow-hidden" id="profiles">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none translate-x-1/4">
                <span className="text-[20vw] font-black uppercase text-white leading-none">Featured</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="flex justify-between items-end mb-16 anim-section-reveal">
                    <div className="space-y-3">
                        <span className="text-gold uppercase tracking-[0.5em] font-bold text-[0.55rem] block">The Registry</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Featured Archive</h2>
                    </div>
                    
                    {/* Custom Arrows Container */}
                    <div className="flex gap-4 mb-2">
                        <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-500 group">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-500 group">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

                <div className="anim-section-reveal">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
                        }}
                        pagination={{ 
                            clickable: true,
                            el: '.swiper-custom-pagination',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 }
                        }}
                        className="pb-16"
                    >
                        {girls.map((girl, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal border border-white/5">
                                    <img src={girl.img} alt={girl.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-75 group-hover:brightness-100" />
                                    
                                    {/* Glass Overlay Details */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
                                    
                                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                                            <span className="text-gold text-[0.55rem] font-black uppercase tracking-widest">{girl.tag}</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">{girl.name}</h3>
                                        <p className="text-white/40 text-[0.6rem] uppercase tracking-[0.3em] font-bold">{girl.location}</p>
                                        
                                        <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <a href="#" className="text-white text-[0.5rem] font-black uppercase tracking-[0.5em] hover:text-gold transition-colors no-underline flex items-center gap-2">
                                                View Profile <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <span className="text-white/10 text-4xl font-black italic">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination (Dots) */}
                    <div className="swiper-custom-pagination flex justify-center gap-3 mt-4"></div>
                </div>
            </div>

            <style>
                {`
                .swiper-custom-pagination .swiper-pagination-bullet {
                    width: 40px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 0;
                    opacity: 1;
                    transition: all 0.5s ease;
                }
                .swiper-custom-pagination .swiper-pagination-bullet-active {
                    background: #C5A059;
                    width: 60px;
                }
                `}
            </style>
        </section>
    );
};

export default Selection;
