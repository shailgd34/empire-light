import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-bg-secondary py-16 md:py-24 relative border-t border-black/5">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-gold uppercase tracking-[1em] font-bold text-[0.65rem] block">Secure Engagement</span>
                            <h2 className="text-5xl md:text-[8rem] font-bold uppercase leading-[0.85] tracking-tighter text-black">
                                Start Your <br /> <span className="text-transparent italic" style={{ WebkitTextStroke: '1px var(--ivory-30)' }}>Journey.</span>
                            </h2>
                        </div>
                        <p className="text-black/60 text-xl md:text-2xl leading-relaxed italic font-light tracking-wide max-w-xl">
                            Our concierge is available 24/7 to facilitate your inquiry with absolute discretion.
                        </p>
                        
                        <div className="space-y-8 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-gold uppercase tracking-widest text-[0.6rem] font-bold">Secure Line</span>
                                <a href="tel:+447368428158" className="text-3xl md:text-5xl text-black font-bold hover:text-gold transition-colors no-underline">07368 428 158</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-gold uppercase tracking-widest text-[0.6rem] font-bold">Email Domain</span>
                                <a href="mailto:admin@empireescort.co.uk" className="text-xl md:text-2xl text-black/40 font-light italic hover:text-gold transition-colors no-underline">admin@empireescort.co.uk</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-12 md:p-16 space-y-10 border border-black/5 shadow-2xl">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-black">Direct Message</h3>
                            <p className="text-black/30 text-sm italic">Encrypted inquiry for professional companionship.</p>
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest font-bold text-black/20">Identity / Name</label>
                                <input type="text" className="w-full bg-black/5 border border-black/10 p-5 text-black text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Preferred Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest font-bold text-black/20">Contact Channel</label>
                                <input type="email" className="w-full bg-black/5 border border-black/10 p-5 text-black text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Email or Phone Number" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest font-bold text-black/20">The Inquiry</label>
                                <textarea className="w-full bg-black/5 border border-black/10 p-5 text-black text-sm focus:outline-none focus:border-gold h-32 transition-colors" placeholder="Message Details..."></textarea>
                            </div>
                            <button className="w-full py-6 bg-gold text-black text-[0.7rem] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 shadow-2xl">Transmit Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
