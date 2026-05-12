import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurEthos = () => {
    useEffect(() => {
        gsap.fromTo(".ethos-reveal", 
            { y: 60, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 1.5, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#ethos",
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden" id="ethos">
            {/* Architectural Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <span className="text-[40vw] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none uppercase select-none tracking-tighter">Empire</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left Side: Statement */}
                    <div className="space-y-12">
                        <div className="space-y-6 ethos-reveal">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-gold"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.4em] uppercase">Management Philosophy</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-bold leading-[1.1] text-white">
                                The Empire <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Commitment</span>
                            </h2>
                        </div>

                        <div className="space-y-8 ethos-reveal">
                            <p className="text-white/80 text-xl md:text-3xl font-bold leading-relaxed italic border-l-4 border-gold pl-10">
                                "We represent more than just beauty; we represent a standard of excellence that is unparalleled in South Yorkshire."
                            </p>
                            <p className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                At Empire, our reputation is built on the caliber of companions we represent and the absolute discretion we provide to our discerning clientele. Every individual in our portfolio is meticulously selected for their intelligence, charisma, and aesthetic elegance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10 ethos-reveal">
                            <div className="space-y-4">
                                <h4 className="text-gold text-sm font-bold uppercase tracking-widest">Elite Portfolio</h4>
                                <p className="text-white/40 text-sm leading-relaxed">From sophisticated intellects to stunning aesthetic beauty, our companions cater to every distinguished preference.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-gold text-sm font-bold uppercase tracking-widest">Discreet Assurance</h4>
                                <p className="text-white/40 text-sm leading-relaxed">We operate with the highest level of professional integrity, ensuring your privacy is protected at all times.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Cinematic Visual */}
                    <div className="relative anim-section-reveal group">
                        <div className="aspect-[4/5] overflow-hidden border border-white/10 relative shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                            <img 
                                src="/images/pexels-noirgenesis-5953288.jpg" 
                                alt="Empire Standard" 
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                            />
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            
                            {/* Signature */}
                            <div className="absolute bottom-12 right-12 text-right">
                                <span className="text-white/20 text-[0.6rem] font-bold uppercase tracking-[0.5em] block mb-2">Authenticated By</span>
                                <span className="text-gold text-2xl font-light italic tracking-widest" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Empire Management</span>
                            </div>
                        </div>

                        {/* Floating Credential */}
                        <div className="absolute -bottom-12 -left-12 bg-gold p-10 hidden md:block shadow-2xl z-20 group-hover:translate-x-4 transition-transform duration-700">
                            <div className="text-black space-y-2">
                                <span className="text-4xl font-black block leading-none italic">100%</span>
                                <span className="text-[0.6rem] font-bold uppercase tracking-widest block">Verified Agency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurEthos;
