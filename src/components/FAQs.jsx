import React, { useState } from 'react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "How do I make a booking?",
            a: "Making a booking is simple. Browse our gallery of verified girls, choose your favorite, and then call, text, or WhatsApp our concierge team. We will confirm availability and travel time immediately."
        },
        {
            q: "What areas do you cover?",
            a: "We are based in Sheffield and provide elite outcall services across the entire Northern Hub, including Leeds, Nottingham, Manchester, Doncaster, Barnsley, and all surrounding districts."
        },
        {
            q: "How long does it take for a girl to arrive?",
            a: "For local Sheffield appointments, we aim to have your chosen companion with you in under an hour. For other cities, arrival times usually range from 45 to 90 minutes depending on traffic and location."
        },
        {
            q: "Is my privacy guaranteed?",
            a: "Absolute discretion is our priority. We never share your personal details, and all communications are handled through secure, encrypted channels. Your secret is safe with Empire Escorts."
        },
        {
            q: "Are the photos on the site real?",
            a: "Yes, 100%. All our profiles feature authentic, verified photography. We personally interview every girl to ensure they represent a true likeness of their online profile."
        }
    ];

    return (
        <section className="bg-bg-secondary py-24 md:py-32 relative overflow-hidden" id="faq">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <span className="text-[30vw] font-bold text-black absolute -top-20 -left-20 leading-none">FAQ</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                    {/* Left: Heading */}
                    <div className="lg:col-span-5 space-y-12 anim-section-reveal">
                        <div className="space-y-6">
                            <span className="text-gold font-bold text-base block tracking-widest uppercase">Common Inquiries</span>
                            <h2 className="text-5xl md:text-8xl font-bold leading-[0.85] text-black">
                                Help & <br /> <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.1)' }}>Support</span>
                            </h2>
                        </div>
                        <p className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                            We believe in full transparency. If you have a question that isn't answered here, please contact our 24/7 concierge.
                        </p>
                        <div className="pt-8">
                            <a href="#contact" className="inline-flex items-center gap-4 text-black font-bold hover:text-gold transition-colors group no-underline">
                                <span>Contact Support</span>
                                <div className="w-12 h-px bg-gold group-hover:w-full transition-all"></div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-7 space-y-4 anim-section-reveal">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`group border-b border-black/5 transition-all duration-700 ${openIndex === idx ? 'pb-12' : 'pb-8'}`}>
                                <button 
                                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    className="w-full flex items-center justify-between text-left py-4 outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className={`text-xs font-bold transition-colors duration-500 ${openIndex === idx ? 'text-gold' : 'text-black/20'}`}>0{idx + 1}</span>
                                        <h3 className={`text-xl md:text-2xl font-bold transition-all duration-500 ${openIndex === idx ? 'text-black italic translate-x-2' : 'text-black/70 group-hover:text-black'}`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full border border-black/5 flex items-center justify-center transition-all duration-700 ${openIndex === idx ? 'bg-black text-white rotate-180' : 'group-hover:border-gold'}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                                    </div>
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-black/50 text-lg leading-relaxed pl-14 max-w-2xl font-medium">
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
