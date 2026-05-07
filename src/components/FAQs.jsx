import React, { useState } from 'react';

const FAQs = () => {
    const [openIdx, setOpenIdx] = useState(0);

    const faqs = [
        { 
            q: 'What are your operational hours?', 
            a: 'Empire Escort Agency operates 24 hours a day, 7 days a week, providing elite companionship across South Yorkshire and the Northern hubs whenever discretion and excellence are required.' 
        },
        { 
            q: 'Do you provide outcall services to hotels?', 
            a: 'Yes, we specialize in discreet outcall visitation to all major luxury hotels and private residences across our covered territories. Our companions arrive with absolute punctuality and professionalism.' 
        },
        { 
            q: 'How are the companion identities verified?', 
            a: 'Every companion in our Featured Archive undergoes a rigorous identity verification process, including digital ID checks and face-to-face screenings to ensure absolute authenticity and safety.' 
        },
        { 
            q: 'What is the agency booking protocol?', 
            a: 'Once you have selected your preferred companion, a brief verification call is required to confirm availability and preferred arrangements. Full protocol details are provided upon initial inquiry.' 
        },
        { 
            q: 'Is my data secure with the agency?', 
            a: 'We utilize Tier-1 data encryption and strict internal privacy mandates. No client data is ever stored longer than necessary for the engagement, ensuring total anonymity.' 
        }
    ];

    return (
        <section className="bg-bg-primary py-12 md:py-24 relative overflow-hidden" id="faq">
            {/* Background Decorative Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none z-0">
                <span className="text-[25vw] font-bold uppercase text-black leading-none tracking-tighter">Inquiry</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 anim-section-reveal">
                    <span className="text-gold uppercase tracking-[0.5em] font-bold text-[0.55rem] block">Intelligence Hub</span>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] text-black">
                        Common <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--ivory-30)' }}>Inquiries</span>
                    </h2>
                    <p className="text-black/30 text-[0.65rem] font-bold uppercase tracking-widest max-w-xl mx-auto italic">
                        Essential protocols and agency mandates for our distinguished clientele.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-2">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="group border border-black/5 bg-black/5 hover:bg-black/[0.02] transition-all duration-700 anim-section-reveal">
                            <button 
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 md:p-8 text-left group"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-gold/20 text-[0.5rem] font-bold italic group-hover:text-gold transition-colors">0{idx + 1}</span>
                                    <span className={`text-base md:text-lg font-bold uppercase tracking-tight transition-colors duration-500 ${openIdx === idx ? 'text-gold' : 'text-black/60 group-hover:text-black'}`}>
                                        {faq.q}
                                    </span>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${openIdx === idx ? 'bg-gold border-gold text-white rotate-45' : 'group-hover:border-gold/40'}`}>
                                    <span className="text-xl font-light text-inherit">+</span>
                                </div>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIdx === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 md:px-14 pb-8">
                                    <div className="w-full h-px bg-black/5 mb-6"></div>
                                    <p className="text-black/60 text-sm md:text-base italic leading-relaxed font-light tracking-wide max-w-2xl">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secure Inquiry CTA */}
                <div className="mt-16 text-center anim-section-reveal">
                    <p className="text-[0.45rem] uppercase tracking-[0.5em] text-black/20 font-bold mb-6">Still Have Questions?</p>
                    <a href="#contact" className="px-12 py-5 border border-gold/40 text-gold text-[0.6rem] font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-white transition-all duration-500 no-underline">
                        Secure Inquiry Line
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
