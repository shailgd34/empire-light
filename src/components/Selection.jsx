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
        { name: 'Ava', location: 'Leeds', img: '/images/pexels-krivitskiy-8467519.jpg', tag: 'New' }
    ];

    return (
        <section className="bg-bg-primary py-24 md:py-32 relative overflow-hidden" id="profiles">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none translate-x-1/4">
                <span className="text-[25vw] font-bold text-black leading-none">Empire</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="flex md:flex-row justify-between items-start md:items-end mb-20 gap-8 anim-section-reveal">
                    <div className="space-y-4">
                        <span className="text-gold font-bold text-base block tracking-widest uppercase">Available Girls</span>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                            Our Elite <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Selection</span>
                        </h2>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button className="selection-prev w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 group">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <button className="selection-next w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 group">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

                <div className="anim-section-reveal">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.selection-prev',
                            nextEl: '.selection-next',
                        }}
                        pagination={{ 
                            clickable: true,
                            el: '.selection-pagination',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                        className="!overflow-visible"
                    >
                        {girls.map((girl, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="group relative aspect-[3/4] overflow-hidden bg-bg-secondary border border-black/5">
                                    <img src={girl.img} alt={girl.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-90 group-hover:brightness-100" />
                                    
                                    {/* Glass Overlay Details */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    
                                    <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                                            <span className="text-gold text-xs font-bold uppercase tracking-widest">{girl.tag}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:italic transition-all duration-500">{girl.name}</h3>
                                        <p className="text-white/60 text-sm font-bold tracking-widest">{girl.location}</p>
                                        
                                        <div className="mt-8 pt-8 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                            <a href="#" className="text-white text-sm font-bold hover:text-gold transition-colors no-underline flex items-center gap-3">
                                                View Profile <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination (Dots) */}
                    <div className="selection-pagination flex justify-center gap-4 mt-20"></div>
                </div>
            </div>

            <style>
                {`
                .selection-pagination .swiper-pagination-bullet {
                    width: 30px;
                    height: 1px;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 0;
                    opacity: 1;
                    transition: all 0.5s ease;
                }
                .selection-pagination .swiper-pagination-bullet-active {
                    background: #8E6E36;
                    width: 60px;
                    height: 2px;
                }
                `}
            </style>
        </section>
    );
};

export default Selection;
