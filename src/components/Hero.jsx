import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import gsap from 'gsap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
    const swiperRef = useRef(null);

    const slides = [
        {
            video: '/video/14973850-hd_1920_1080_24fps.mp4',
            sub: 'Sheffield Based / Under New Management',
            title: 'Real Girls',
            title2: 'Real Profiles',
            desc: 'The premier Sheffield agency for distinguished outcall companionship. Now under new management with a fresh commitment to transparency and excellence.'
        },
        {
            video: '/video/grok-video-8c7d4c4b-ab3a-418c-a7a5-09b3da8847b5-1-1.mp4',
            sub: 'South Yorkshire & Beyond',
            title: 'Elite',
            title2: 'Outcall',
            desc: 'Serving Sheffield, Leeds, Nottingham and major Northern hubs. Our companions are vetted for sophistication, charisma, and authenticity.'
        }
    ];

    const animateSlide = (index) => {
        const currentSlide = document.querySelectorAll('.hero-slide-item')[index];
        if (!currentSlide) return;

        // Reset
        gsap.set(currentSlide.querySelectorAll('.char'), { y: 100, opacity: 0 });
        gsap.set(currentSlide.querySelector('.hero-line'), { scaleX: 0 });

        // Animate
        gsap.to(currentSlide.querySelectorAll('.char'), {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.03,
            ease: "expo.out",
            delay: 0.5
        });

        gsap.to(currentSlide.querySelector('.hero-line'), {
            scaleX: 1,
            duration: 1.5,
            ease: "expo.inOut",
            delay: 0.2
        });

        gsap.fromTo(currentSlide.querySelector('.hero-video-bg'), 
            { scale: 1.1, filter: 'blur(10px)' },
            { scale: 1, filter: 'blur(0px)', duration: 2.5, ease: "expo.out" }
        );
    };

    useEffect(() => {
        animateSlide(0);
    }, []);

    return (
        <section className="h-screen relative overflow-hidden bg-[#080808] font-body" id="hero">
            <style>
                {`
                .hero-heading-main {
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    line-height: 0.8;
                    letter-spacing: -0.05em;
                }
                .hero-vertical-progress {
                    height: 200px;
                    width: 2px;
                    background: rgba(255,255,255,0.05);
                }
                .hero-progress-fill {
                    width: 100%;
                    height: 0%;
                    background: #C5A059;
                    transition: height 6s linear;
                }
                .swiper-slide-active .hero-progress-fill {
                    height: 100%;
                }
                `}
            </style>

            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => animateSlide(swiper.realIndex)}
                className="h-full w-full"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx} className="hero-slide-item relative">
                        {/* Creative Video Mask */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <video 
                                autoPlay muted loop playsinline 
                                className="hero-video-bg w-full h-full object-cover brightness-[0.8] saturate-[0.8]"
                            >
                                <source src={slide.video} type="video/mp4" />
                            </video>
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-ivory/60 via-transparent to-ivory/80"></div>
                        </div>

                        {/* Asymmetrical Content Layout */}
                        <div className="absolute inset-0 flex items-center z-10">
                            <div className="container-wide w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
                                <div className="lg:col-span-8 space-y-12">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="hero-line h-px w-24 bg-gold origin-left"></div>
                                            <span className="text-gold text-base font-bold">
                                                {slide.sub}
                                            </span>
                                        </div>
                                        
                                        <h1 className="hero-heading-main flex flex-col">
                                            <span className="text-[10vw] md:text-[8.5vw] text-[#fff] overflow-hidden">
                                                {slide.title.split('').map((char, i) => (
                                                    <span key={i} className="char inline-block">{char}</span>
                                                ))}
                                            </span>
                                            <span className="text-[10vw] md:text-[8.5vw] text-transparent ml-[10vw]" style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.6)', filter: 'none' }}>
                                                {slide.title2.split('').map((char, i) => (
                                                    <span key={i} className="char inline-block">{char}</span>
                                                ))}
                                            </span>
                                        </h1>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                                        <p className="text-white/60 text-base md:text-lg max-w-sm italic font-light leading-relaxed">
                                            {slide.desc}
                                        </p>
                                        <div className="flex gap-4">
                                            <a href="#profiles" className="group relative overflow-hidden px-10 py-5 bg-gold text-white text-base font-bold no-underline">
                                                <span className="relative z-10">View All Profiles</span>
                                                <div className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Large Background Watermark per slide */}
                        <div className="absolute bottom-10 right-10 pointer-events-none opacity-[0.02] select-none text-right">
                            <span className="text-[15vw] font-black uppercase text-black leading-none tracking-tighter">
                                Vol. 24
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modern Custom UI Overlays */}
            <div className="absolute bottom-12 left-12 md:left-24 z-30 flex items-center gap-12">
                {/* Index Indicator */}
                <div className="flex items-baseline gap-2 overflow-hidden">
                    <span className="text-gold text-4xl font-black italic">01</span>
                    <span className="text-black/20 text-sm font-bold">/ 02</span>
                </div>
                
                {/* Vertical Progress Bar */}
                <div className="hero-vertical-progress overflow-hidden relative hidden md:block">
                    <div className="hero-progress-fill absolute bottom-0 left-0"></div>
                </div>
            </div>

            {/* Custom Navigation Arrows (Architectural Style) */}
            <div className="absolute bottom-12 right-12 z-30 flex gap-4">
                <button 
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-16 h-16 border border-black/10 flex items-center justify-center text-black/40 hover:text-gold hover:border-gold transition-all duration-500 group"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
                <button 
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-16 h-16 border border-black/10 flex items-center justify-center text-black/40 hover:text-gold hover:border-gold transition-all duration-500 group"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>

            {/* Cinematic Noise & Vignette */}
            <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_200px_rgba(255,255,255,0.5)]"></div>
        </section>
    );
};

export default Hero;
