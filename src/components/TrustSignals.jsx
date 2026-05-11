import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustSignals = () => {
    const signals = [
        { label: 'Real Girls', value: '100%', sub: 'All Photos are Authentic' },
        { label: 'Available', value: '24/7', sub: 'Call or WhatsApp Anytime' },
        { label: 'ID Checked', value: 'Verified', sub: 'Every Girl is Checked' },
        { label: 'Locations', value: 'Local', sub: 'Sheffield, Leeds & More' }
    ];

    useEffect(() => {
        // Counter Animation for 100%
        gsap.fromTo(".trust-value", 
            { innerHTML: 0 },
            { 
                innerHTML: 100, 
                duration: 2, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#trust",
                    start: "top 80%",
                },
                onUpdate: function() {
                    const el = document.querySelector(".trust-value-100");
                    if (el && this.targets() && this.targets()[0]) {
                        el.innerHTML = Math.ceil(this.targets()[0].innerHTML) + '%';
                    }
                }
            }
        );

        // Staggered reveal
        gsap.fromTo(".trust-card", 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 1.5, 
                ease: "expo.out",
                scrollTrigger: {
                    trigger: "#trust",
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section className="bg-black py-16 md:py-24 relative overflow-hidden" id="trust">
            {/* Background Texture & Branding */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
                <span className="text-[20vw] font-black uppercase text-white leading-none tracking-tighter">Certified</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                    {signals.map((signal, idx) => (
                        <div key={idx} className="trust-card group relative p-10 md:p-14 text-center lg:text-left bg-black hover:bg-gold/[0.03] transition-all duration-1000">
                            
                            {/* Verification Ring Decoration */}
                            <div className="absolute top-6 right-6 w-10 h-10 border border-gold/10 rounded-full flex items-center justify-center group-hover:border-gold transition-all duration-700">
                                <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-[2] transition-all duration-700"></div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <span className={`text-gold text-3xl md:text-4xl font-bold block leading-tight transition-all duration-700 group-hover:scale-105 ${idx === 0 ? 'trust-value-100' : ''}`}>
                                        {signal.value}
                                    </span>
                                    <span className="text-white text-[0.6rem] md:text-xs font-bold block tracking-[0.3em] uppercase">
                                        {signal.label}
                                    </span>
                                </div>
                                
                                <div className="relative h-px w-8 bg-gold/30 group-hover:w-full transition-all duration-1000 overflow-hidden">
                                    <div className="absolute inset-0 bg-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000"></div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8E6E36" strokeWidth="3" className="mt-1 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"><path d="M20 6L9 17l-5-5"/></svg>
                                    <p className="text-white/40 text-[0.65rem] md:text-[0.7rem] font-bold leading-relaxed tracking-wider group-hover:text-white/80 transition-colors">
                                        {signal.sub}
                                    </p>
                                </div>
                            </div>

                            {/* Floating Index */}
                            <div className="absolute bottom-6 right-6 opacity-[0.01] group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
                                <span className="text-4xl md:text-5xl font-bold italic text-white">0{idx + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Verified Trust Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 anim-section-reveal">
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <span className="text-[0.6rem] font-bold text-white/40 tracking-widest uppercase group-hover:text-gold transition-colors">ID Verified Agency</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <span className="text-[0.6rem] font-bold text-white/40 tracking-widest uppercase group-hover:text-gold transition-colors">Real Photos Guarantee</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </div>
                        <span className="text-[0.6rem] font-bold text-white/40 tracking-widest uppercase group-hover:text-gold transition-colors">Discreet Protocol</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
