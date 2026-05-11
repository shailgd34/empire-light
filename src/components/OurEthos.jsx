import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurEthos = () => {
    const ethosPoints = [
        { 
            title: 'ID Checked Girls', 
            desc: 'Enjoy a safe and unforgettable experience with our verified girls. Have confidence in the genuine nature of our profiles.' 
        },
        { 
            title: 'Professional Service', 
            desc: 'Our skilled girls are committed to providing a revitalizing and delightful experience customized to your preferences.' 
        }
    ];

    useEffect(() => {
        gsap.fromTo(".ethos-image-reveal", 
            { scale: 1.2, filter: 'blur(10px)' },
            { 
                scale: 1, 
                filter: 'blur(0px)', 
                duration: 2, 
                ease: "expo.out",
                scrollTrigger: {
                    trigger: "#ethos",
                    start: "top 80%",
                }
            }
        );

        gsap.fromTo(".ethos-card", 
            { x: 100, opacity: 0 },
            { 
                x: 0, 
                opacity: 1, 
                stagger: 0.3, 
                duration: 1.5, 
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".ethos-cards-container",
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section className="bg-bg-primary py-16 md:py-24 relative overflow-hidden" id="ethos">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-secondary -skew-x-6 translate-x-1/4 pointer-events-none opacity-50"></div>
            
            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: Visual & Statement */}
                    <div className="lg:col-span-5 space-y-8 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Expert Selection</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Our Agency <span className="text-transparent font-light italic" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>Standards</span>
                            </h2>
                        </div>
                        
                        <div className="relative aspect-[3/4] group overflow-hidden border border-black/5 shadow-2xl">
                            <img src="/images/pexels-noirgenesis-5953288.jpg" alt="Empire Standards" className="ethos-image-reveal w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>

                            {/* Content on Image */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6">
                                <p className="text-white text-2xl font-bold leading-tight italic max-w-xs">
                                    "We provide exceptional services that go beyond expectations."
                                </p>
                                <div className="pt-6 border-t border-white/10">
                                    <span className="text-gold text-lg font-light italic tracking-widest block text-right">Empire Management</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Detailed Points */}
                    <div className="lg:col-span-7 space-y-12 anim-section-reveal">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-black/80 text-xl md:text-3xl font-bold leading-relaxed italic border-l-8 border-gold pl-12">
                                    Empire Escorts is South Yorkshire’s premier agency. We take our job seriously, selecting our girls based on beauty and personality.
                                </p>
                                <p className="text-black/50 text-lg font-medium max-w-2xl pl-12">
                                    Our reputation is built on trust and the quality of the girls we represent. We ensure every encounter is managed with the utmost professionalism.
                                </p>
                            </div>
                        </div>

                        <div className="ethos-cards-container grid grid-cols-1 md:grid-cols-2 gap-8">
                            {ethosPoints.map((point, idx) => (
                                <div key={idx} className="ethos-card group p-8 bg-bg-secondary hover:bg-black transition-all duration-1000 shadow-xl border border-black/5 relative overflow-hidden">
                                    {/* Decorative number */}
                                    <span className="text-black/[0.03] text-[8rem] font-black absolute -top-8 -right-4 group-hover:text-gold/10 transition-colors duration-1000 pointer-events-none">0{idx + 1}</span>
                                    
                                    <div className="relative z-10 space-y-6">
                                        <div className="w-10 h-1 bg-gold group-hover:w-full transition-all duration-1000"></div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black group-hover:text-gold transition-colors duration-700">{point.title}</h3>
                                            <p className="text-black/60 text-base leading-relaxed group-hover:text-white/60 transition-colors duration-700">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Highlight Box */}
                        <div className="p-12 bg-black text-white relative overflow-hidden group shadow-2xl border border-white/5">
                            {/* Scanning Glow */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gold/50 shadow-[0_0_20px_#C5A059] translate-y-[-100%] group-hover:translate-y-[10000%] transition-transform duration-[4000ms] ease-linear"></div>
                            
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-8 space-y-4 text-center md:text-left">
                                    <h4 className="text-gold text-2xl font-bold tracking-tight">A Girl for Every Taste</h4>
                                    <p className="text-white/60 text-base leading-relaxed">
                                        We have a wide range of girls at Empire, aged 18 to mid 40’s. Whether you prefer a slender blonde or a busty brunette, we have someone for you.
                                    </p>
                                </div>
                                <div className="md:col-span-4 flex justify-center md:justify-end">
                                    <a href="#profiles" className="group/btn relative inline-flex items-center justify-center px-10 py-5 border border-gold text-gold text-sm font-bold no-underline hover:bg-gold hover:text-black transition-all duration-500 overflow-hidden">
                                        <span className="relative z-10">See Our Girls</span>
                                        <div className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurEthos;
