import React from 'react';

const ValueProp = () => {
    return (
        <section className="bg-bg-primary py-24 md:py-32 relative overflow-hidden" id="about">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-[0.03] select-none">
                <span className="text-[25vw] font-bold text-black rotate-12 inline-block">Empire</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left Side: Editorial Images */}
                    <div className="relative anim-section-reveal h-[600px] md:h-[700px] group">
                        {/* Background Main Image */}
                        <div className="absolute top-0 right-0 w-[85%] aspect-[3/4] overflow-hidden border border-black/5 shadow-2xl">
                            <img 
                                src="/images/pexels-macnalodao-20270579.jpg" 
                                alt="Empire Sheffield" 
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                            />
                        </div>
                        
                        {/* Foreground Floating Image */}
                        <div className="absolute bottom-10 left-0 w-[50%] aspect-[3/4] overflow-hidden border-8 border-ivory shadow-2xl z-20 translate-x-4">
                            <img 
                                src="/images/pexels-vika-glitter-392079-8780224.jpg" 
                                alt="Real Girls" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                            />
                        </div>

                        {/* Verified Badge */}
                        <div className="absolute top-[20%] left-0 w-32 h-32 bg-gold/10 backdrop-blur-xl border border-gold/20 flex flex-col items-center justify-center p-4 z-30 group-hover:bg-gold group-hover:text-black transition-all duration-700">
                            <span className="text-3xl font-bold italic">100%</span>
                            <span className="text-[0.6rem] font-bold tracking-widest uppercase">Real</span>
                        </div>
                    </div>

                    {/* Right Side: Simple Typography */}
                    <div className="space-y-12 anim-section-reveal">
                        <div className="space-y-6">
                            <span className="text-gold font-bold text-base block tracking-widest uppercase">The Empire Standard</span>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Elite <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>Companionship</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-8">
                            <p className="text-black/80 text-xl md:text-2xl font-bold leading-relaxed italic border-l-4 border-gold pl-10">
                                South Yorkshire’s premier agency for discerning clients seeking sophisticated companionship and absolute discretion.
                            </p>
                            <p className="text-black/60 text-lg font-medium leading-relaxed max-w-xl">
                                At Empire, we redefine the standard of outcall service. Our curated portfolio features elite companions who are as intelligent and charismatic as they are beautiful. With a focus on authenticity and professionalism, we ensure every engagement is seamless, private, and unforgettable.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-10 border-t border-black/10">
                            <div className="space-y-3">
                                <h4 className="text-black font-bold text-lg">South Yorkshire Hub</h4>
                                <p className="text-black/40 text-sm font-medium">Strategically based in Sheffield to serve the entire Northern region with speed and elegance.</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-black font-bold text-lg">Book With Confidence</h4>
                                <p className="text-black/40 text-sm font-medium">All profiles are 100% verified. We prioritize your privacy and peace of mind above all else.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a href="#profiles" className="inline-block py-6 px-12 bg-black text-white text-base font-bold hover:bg-gold hover:text-black transition-all duration-500 shadow-2xl no-underline">
                                Available Companions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
