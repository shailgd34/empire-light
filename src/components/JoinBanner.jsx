import React, { useEffect } from 'react';
import gsap from 'gsap';

const JoinBanner = () => {
    useEffect(() => {
        gsap.to(".join-glow", {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <section className="bg-bg-primary py-20 md:py-32" id="join">
            <div className="container-wide">
                <div className="bg-black relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                    
                    {/* Background Visual (JPG) */}
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-1000 scale-105 group-hover:scale-100 transition-transform duration-[3000ms]">
                        <img src="/images/pexels-vika-glitter-392079-30219287.jpg" alt="Become an Escort" className="w-full h-full object-cover grayscale" />
                    </div>
                    
                    {/* Glowing Accents */}
                    <div className="join-glow absolute -top-1/2 -left-1/4 w-[100%] h-[200%] bg-gold/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
                    <div className="join-glow absolute -bottom-1/2 -right-1/4 w-[100%] h-[200%] bg-gold/5 blur-[120px] rounded-full pointer-events-none opacity-30 delay-1000"></div>

                    <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center space-y-12">
                        <div className="space-y-4 max-w-3xl">
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="w-12 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Recruitment</span>
                                <div className="w-12 h-px bg-gold/30"></div>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                                Become An <span className="italic text-gold">Empire</span> Girl
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
                                We are always looking for beautiful, charming, and reliable girls to join our agency. We offer the best rates, flexible hours, and a professional environment.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center pt-8">
                            <a href="tel:+447368428158" className="px-12 py-6 bg-gold text-black text-sm font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(197,160,89,0.3)] no-underline">
                                Apply To Join
                            </a>
                            <div className="flex items-center gap-4 text-white/40">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
                                <span className="text-xs font-bold uppercase tracking-widest">Discreet Application Process</span>
                            </div>
                        </div>

                        {/* Large Background Watermark */}
                        <div className="absolute -bottom-10 -left-10 opacity-[0.03] select-none pointer-events-none">
                            <span className="text-[25vw] font-black uppercase text-white leading-none">Empire</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinBanner;
