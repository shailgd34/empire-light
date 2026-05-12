import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Selection = () => {
    const girls = [
        { 
            name: 'Sasha', 
            location: 'Sheffield', 
            img: '/images/profile1.png', 
            tag: 'Top Rated',
            age: 22,
            height: "5'7\"",
            status: 'Available Now',
            verified: true
        },
        { 
            name: 'Elena', 
            location: 'Leeds', 
            img: '/images/profile2.png', 
            tag: 'Elite',
            age: 24,
            height: "5'8\"",
            status: 'Available Now',
            verified: true
        },
        { 
            name: 'Jade', 
            location: 'Nottingham', 
            img: '/images/pexels-babydov-7788013.jpg', 
            tag: 'New',
            age: 21,
            height: "5'6\"",
            status: 'In 2 Hours',
            verified: true
        },
        { 
            name: 'Sophia', 
            location: 'Doncaster', 
            img: '/images/pexels-faizialiphotography-13036116.jpg', 
            tag: 'Exclusive',
            age: 23,
            height: "5'9\"",
            status: 'Available Now',
            verified: true
        },
        { 
            name: 'Amelia', 
            location: 'Rotherham', 
            img: '/images/pexels-heyy-kazz-705792-17041606.jpg', 
            tag: 'Featured',
            age: 25,
            height: "5'7\"",
            status: 'Available Now',
            verified: true
        },
        { 
            name: 'Isabella', 
            location: 'Barnsley', 
            img: '/images/pexels-innamykytas-7001343.jpg', 
            tag: 'Top Rated',
            age: 22,
            height: "5'5\"",
            status: 'Available Now',
            verified: true
        }
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
                        <span className="text-gold font-bold text-base block tracking-widest uppercase">Available Companions</span>
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
                            1024: { slidesPerView: 3 },
                            1400: { slidesPerView: 4 }
                        }}
                        className="!overflow-visible"
                    >
                        {girls.map((girl, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="group relative aspect-[4/5] overflow-hidden bg-bg-secondary border border-black/5">
                                    <img src={girl.img} alt={girl.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-90 group-hover:brightness-100" />
                                    
                                    {/* Availability Badge */}
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-2 py-1 rounded-full">
                                        <div className={`w-1.5 h-1.5 rounded-full ${girl.status === 'Available Now' ? 'bg-[#25D366]' : 'bg-gold'} animate-pulse`}></div>
                                        <span className="text-white text-[0.5rem] font-bold uppercase tracking-widest">{girl.status}</span>
                                    </div>

                                    {/* Featured / Top Rated Badge */}
                                    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                                        {girl.verified && (
                                            <div className="bg-gold text-black px-2 py-1 rounded-sm shadow-lg flex items-center gap-1">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.1 14.55l-3.45-3.45 1.06-1.06 2.39 2.39 5.74-5.74 1.06 1.06-6.8 6.8z"/></svg>
                                                <span className="text-[0.5rem] font-black uppercase tracking-widest">Verified</span>
                                            </div>
                                        )}
                                        <div className="bg-black text-gold border border-gold/50 px-2 py-1 rounded-sm shadow-lg">
                                            <span className="text-[0.5rem] font-black uppercase tracking-[0.2em]">{girl.tag}</span>
                                        </div>
                                    </div>

                                    {/* Details Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>
                                    
                                    <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:italic transition-all duration-500">{girl.name}</h3>
                                                <span className="text-gold text-sm font-bold italic">{girl.age}</span>
                                            </div>
                                            <span className="text-white/40 text-[0.6rem] font-bold uppercase tracking-widest">{girl.height}</span>
                                        </div>

                                        <p className="text-white/60 text-[0.6rem] font-bold tracking-widest uppercase mb-4">{girl.location}</p>
                                        
                                        <div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-4">
                                            <a href="tel:+447368428158" className="bg-gold text-black p-2 rounded-full hover:bg-white transition-all duration-500">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                                            </a>
                                            <a href="https://wa.me/447368428158" className="bg-[#25D366] text-white p-2 rounded-full hover:bg-white hover:text-[#25D366] transition-all duration-500">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2c-5.506 0-9.969 4.462-9.969 9.969 0 1.761.462 3.473 1.336 4.988l-1.42 5.19 5.304-1.392c1.458.797 3.1 1.214 4.75 1.214h.005c5.503 0 9.968-4.463 9.968-9.97 0-2.665-1.037-5.168-2.923-7.054-1.886-1.886-4.389-2.924-7.051-2.924zm5.827 14.122c-.255.717-1.474 1.309-2.022 1.39-.49.073-.962.251-3.132-.647-2.775-1.149-4.568-3.974-4.707-4.159-.139-.186-1.134-1.507-1.134-2.876 0-1.369.719-2.042.974-2.321.255-.279.556-.349.742-.349h.534c.172 0 .406-.065.632.488.227.554.777 1.895.844 2.033.068.139.113.301.02.488-.093.186-.139.301-.278.464-.139.163-.293.364-.418.488-.139.139-.286.291-.123.57.163.279.724 1.192 1.555 1.927.831.735 1.536.963 1.838 1.103.302.139.477.116.653-.081.177-.197.756-.88 1.042-1.183.287-.302.573-.255.962-.116.39.139 2.474 1.168 2.898 1.378.423.21.704.31.808.488.104.178.104.595-.151 1.312z"/></svg>
                                            </a>
                                            <a href="#" className="text-white text-[0.5rem] font-bold hover:text-gold transition-colors no-underline flex items-center gap-2 uppercase tracking-widest ml-auto">
                                                Profile <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
                    background: #C5A059;
                    width: 60px;
                    height: 2px;
                }
                `}
            </style>
        </section>
    );
};

export default Selection;
