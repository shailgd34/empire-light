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
                        <div className="absolute top-[20%] left-0 w-32 h-32 bg-accent/10 backdrop-blur-xl border border-accent/20 flex flex-col items-center justify-center p-4 z-30 group-hover:bg-accent group-hover:text-black transition-all duration-700">
                            <span className="text-3xl font-bold italic">100%</span>
                            <span className="text-[0.6rem] font-bold tracking-widest uppercase">Real</span>
                        </div>
                    </div>

                    {/* Right Side: Simple Typography */}
                    <div className="space-y-12 anim-section-reveal">
                        <div className="space-y-6">
                            <span className="text-accent font-bold text-base block tracking-widest uppercase">The Empire Standard</span>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Elite <span className="italic text-transparent" style={{ WebkitTextStroke: '1.5px rgba(197, 160, 89, 0.25)' }}>Girls</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-black/80 text-xl md:text-2xl font-bold leading-relaxed italic border-l-4 border-accent pl-10">
                                South Yorkshire’s premier agency for clients seeking beautiful girls and absolute discretion.
                            </p>
                            <p className="text-black/60 text-lg font-medium leading-relaxed max-w-xl">
                                At Empire, we provide the best girls in Sheffield. Our girls are friendly, beautiful, and very professional. We make sure everything is private and you have a great time.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-10 border-t border-black/10">
                            <div className="space-y-3">
                                <h4 className="text-black font-bold text-lg">South Yorkshire Hub</h4>
                                <p className="text-black/40 text-sm font-medium">We are in Sheffield and we cover all nearby areas very fast.</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-black font-bold text-lg">Book With Confidence</h4>
                                <p className="text-black/40 text-sm font-medium">All our girl photos are 100% real. We keep your booking secret.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a href="#our-girls" className="inline-block py-6 px-12 bg-accent text-black text-base font-bold hover:bg-black hover:text-white transition-all duration-500 shadow-2xl no-underline" style={{ borderRadius: '100px' }}>
                                SEE OUR GIRLS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
