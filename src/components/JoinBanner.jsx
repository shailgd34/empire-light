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
        <section className="bg-bg-primary py-12 md:py-16" id="join">
            <div className="container-wide">
                <div className="bg-black relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
                    
                    {/* Background Visual (JPG) */}
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-1000 scale-105 group-hover:scale-100 transition-transform duration-[3000ms]">
                        <img src="/images/pexels-vika-glitter-392079-30219287.jpg" alt="Become an Escort" className="w-full h-full object-cover grayscale" />
                    </div>
                    
                    {/* Glowing Accents */}
                    <div className="join-glow absolute -top-1/2 -left-1/4 w-[100%] h-[200%] bg-gold/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
                    <div className="join-glow absolute -bottom-1/2 -right-1/4 w-[100%] h-[200%] bg-gold/5 blur-[120px] rounded-full pointer-events-none opacity-30 delay-1000"></div>

                    <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col items-center text-center space-y-10">
                        <div className="space-y-4 max-w-3xl">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Recruitment</span>
                                <div className="w-8 h-px bg-gold/30"></div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Become An <span className="italic text-gold">Empire</span> Girl
                            </h2>
                            <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed">
                                We are always looking for beautiful, charming, and reliable girls to join our agency. We offer the best rates, flexible hours, and a professional environment.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-center pt-4">
                            <a href="tel:+447368428158" className="px-10 py-5 bg-gold text-black text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(197,160,89,0.3)] no-underline">
                                Apply To Join
                            </a>
                            <div className="flex items-center gap-4 text-white/40">
                                <div className="w-1 h-1 rounded-full bg-gold animate-pulse"></div>
                                <span className="text-[0.6rem] font-bold uppercase tracking-widest">Discreet Application Process</span>
                            </div>
                        </div>

                        {/* Large Background Watermark */}
                        <div className="absolute -bottom-6 -left-6 opacity-[0.02] select-none pointer-events-none">
                            <span className="text-[15vw] font-black uppercase text-white leading-none">Empire</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinBanner;
