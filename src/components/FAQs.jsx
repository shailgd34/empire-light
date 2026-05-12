import React, { useState } from 'react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "How do I make a booking?",
            a: "Making a booking is seamless. Browse our gallery of verified companions, choose your favorite, and then contact our private support via Call or WhatsApp. We will confirm availability and travel times immediately."
        },
        {
            q: "What areas do you cover?",
            a: "We are based in Sheffield and provide elite outcall services across the entire Northern Hub, including Leeds, Nottingham, Manchester, Doncaster, Barnsley, and all surrounding districts."
        },
        {
            q: "How long does it take for a companion to arrive?",
            a: "For local Sheffield appointments, we aim to have your chosen companion with you in under an hour. For other cities, arrival times usually range from 45 to 90 minutes depending on your specific location."
        },
        {
            q: "Is my privacy guaranteed?",
            a: "Absolute discretion is our priority. We never share your personal details, and all communications are handled through secure, encrypted channels. Your secret is safe with Empire Escorts."
        },
        {
            q: "Are the photos on the site real?",
            a: "Yes, 100%. All our profiles feature authentic, verified photography. We personally interview every companion to ensure they represent a true likeness of their digital profile."
        }
    ];

    return (
        <section className="bg-bg-secondary py-16 md:py-24 relative overflow-hidden" id="faq">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20vw] font-bold text-black absolute -top-10 -left-10 leading-none">FAQ</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                    
                    {/* Left: Heading */}
                    <div className="lg:col-span-5 space-y-8 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Common Inquiries</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Help & <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Support</span>
                            </h2>
                        </div>
                        <p className="text-black/60 text-base md:text-lg font-medium leading-relaxed max-w-sm">
                            We believe in full transparency. If you have a question that isn't answered here, please contact our 24/7 concierge.
                        </p>
                        <div className="pt-4">
                            <a href="#contact" className="inline-flex items-center gap-4 text-black font-bold hover:text-gold transition-colors group no-underline text-sm">
                                <span>Contact Support</span>
                                <div className="w-8 h-px bg-gold group-hover:w-full transition-all"></div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-7 space-y-2 anim-section-reveal">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`group border-b border-black/5 transition-all duration-700 ${openIndex === idx ? 'pb-8' : 'pb-6'}`}>
                                <button 
                                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    className="w-full flex items-center justify-between text-left py-3 outline-none"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className={`text-[0.6rem] font-bold transition-colors duration-500 ${openIndex === idx ? 'text-gold' : 'text-black/20'}`}>0{idx + 1}</span>
                                        <h3 className={`text-lg md:text-xl font-bold transition-all duration-500 ${openIndex === idx ? 'text-black italic translate-x-2' : 'text-black/70 group-hover:text-black'}`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-all duration-700 ${openIndex === idx ? 'bg-black text-white rotate-180' : 'group-hover:border-gold'}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                                    </div>
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-black/50 text-base leading-relaxed pl-12 max-w-2xl font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
