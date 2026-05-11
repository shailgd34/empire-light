import React, { useState } from 'react';

const Locations = () => {
    const [activeLoc, setActiveLoc] = useState(0);

    const locations = [
        { 
            city: 'Sheffield', 
            area: 'South Yorkshire (Our Base)', 
            desc: 'Our main office is in Sheffield. We provide fast outcall service for the city and surrounding areas.',
            img: '/images/pexels-noirgenesis-5953288.jpg',
            stats: ['24/7 Service', 'Fast Arrival', 'Trusted Agency']
        },
        { 
            city: 'Leeds', 
            area: 'West Yorkshire', 
            desc: 'We offer elite outcall services in Leeds. We visit all major hotels and private homes with full discretion.',
            img: '/images/pexels-yulianaphoto-10110684.jpg',
            stats: ['Hotel Visits', 'Discreet Service', 'Leeds Hub']
        },
        { 
            city: 'Nottingham', 
            area: 'East Midlands', 
            desc: 'We provide beautiful companions across Nottingham. We cover the city center and all nearby areas.',
            img: '/images/pexels-vika-glitter-392079-11363751.jpg',
            stats: ['East Midlands', 'Safe Travel', 'Always On Time']
        },
        { 
            city: 'Manchester', 
            area: 'Greater Manchester', 
            desc: 'A premium service in Manchester city center. Our girls provide elite visits across the Manchester region.',
            img: '/images/pexels-vika-glitter-392079-8780221.jpg',
            stats: ['City Center', 'VIP Service', 'Luxury Travel']
        },
        { 
            city: 'Doncaster', 
            area: 'South Yorkshire', 
            desc: 'Serving Doncaster and surrounding districts with elite companionship. Fast response for all local inquiries.',
            img: '/images/pexels-macnalodao-20270579.jpg',
            stats: ['Fast Response', 'Discreet Hub', 'Local Service']
        },
        { 
            city: 'Barnsley', 
            area: 'South Yorkshire', 
            desc: 'Elite outcall services provided throughout Barnsley. Our girls are available for social and personal dates.',
            img: '/images/pexels-vika-glitter-392079-13066145.jpg',
            stats: ['South Yorkshire', 'Social Dates', 'Verified Profiles']
        }
    ];

    const surroundings = [
        'Chesterfield', 'Rotherham', 'Worksop', 'Wakefield', 'Bradford', 'Huddersfield'
    ];

    return (
        <section className="bg-bg-primary py-16 md:py-24 relative overflow-hidden" id="locations">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
                <div className="absolute top-0 right-0 w-1/2 h-full border-l border-black/10"></div>
                <span className="text-[30vw] font-bold text-black absolute -bottom-10 -left-10 leading-none">Map</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left: City List */}
                    <div className="lg:col-span-6 space-y-10 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Where We Cover</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Major <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>Hubs</span>
                            </h2>
                        </div>

                        <div className="flex flex-col">
                            {locations.map((loc, idx) => (
                                <button 
                                    key={idx}
                                    onMouseEnter={() => setActiveLoc(idx)}
                                    className="group flex items-center justify-between py-6 border-b border-black/5 text-left transition-all duration-500"
                                >
                                    <div className="flex items-baseline gap-6">
                                        <span className={`text-xs font-bold transition-colors duration-500 ${activeLoc === idx ? 'text-gold' : 'text-black/20'}`}>0{idx + 1}</span>
                                        <span className={`text-2xl md:text-5xl font-bold transition-all duration-700 ${activeLoc === idx ? 'text-black translate-x-4 italic' : 'text-black/30 group-hover:text-black/60'}`}>
                                            {loc.city}
                                        </span>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center transition-all duration-700 ${activeLoc === idx ? 'bg-gold border-gold text-white rotate-45 scale-110' : 'opacity-0'}`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: City Details */}
                    <div className="lg:col-span-6 anim-section-reveal">
                        <div className="relative aspect-[4/5] bg-bg-secondary border border-black/5 overflow-hidden shadow-2xl">
                            {/* Background Image */}
                            {locations.map((loc, idx) => (
                                <img 
                                    key={idx} 
                                    src={loc.img} 
                                    alt="" 
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${activeLoc === idx ? 'opacity-20 scale-100' : 'opacity-0 scale-110'}`} 
                                />
                            ))}
                            
                            <div className="relative h-full p-12 md:p-16 flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <span className="text-gold font-bold text-sm block tracking-widest uppercase">{locations[activeLoc].area}</span>
                                            <h3 className="text-3xl font-bold text-black italic">Area Details</h3>
                                        </div>
                                        <div className="w-16 h-1 bg-gold"></div>
                                    </div>
                                    
                                    <p className="text-black/70 text-lg md:text-xl font-medium leading-relaxed">
                                        {locations[activeLoc].desc}
                                    </p>
                                </div>

                                <div className="space-y-10">
                                    <div className="grid grid-cols-1 gap-4">
                                        {locations[activeLoc].stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-6 h-px bg-gold"></div>
                                                <span className="text-black font-bold text-sm tracking-widest uppercase">{stat}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="pt-8 border-t border-black/10 flex justify-between items-center">
                                        <a href="#contact" className="px-10 py-5 bg-black text-white text-sm font-bold hover:bg-gold hover:text-black transition-all duration-500 no-underline shadow-xl">
                                            Book in {locations[activeLoc].city}
                                        </a>
                                        <span className="text-black/10 text-6xl font-bold italic">Hub</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Areas */}
                <div className="mt-32 pt-20 border-t border-black/10 anim-section-reveal">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4 space-y-4">
                            <h4 className="text-2xl font-bold text-black italic">Nearby Areas</h4>
                            <p className="text-black/40 text-sm font-medium">We also cover all surrounding towns in South & West Yorkshire.</p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="flex flex-wrap gap-x-12 gap-y-6">
                                {surroundings.map((area, idx) => (
                                    <div key={idx} className="group cursor-default">
                                        <span className="text-black/20 text-xs font-bold block mb-1">Area</span>
                                        <span className="text-black/70 text-lg font-bold group-hover:text-gold transition-colors">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
