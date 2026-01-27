
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  { 
    title: 'Nebula Dashboard', 
    category: 'FinTech / UI Design', 
    img: 'https://picsum.photos/1000/1200?random=1',
    color: '#0dccf2'
  },
  { 
    title: 'Oasis Wellness', 
    category: 'E-Commerce / Brand', 
    img: 'https://picsum.photos/1000/1200?random=2',
    color: '#b026ff'
  },
  { 
    title: 'Aero Systems', 
    category: 'SAAS / Development', 
    img: 'https://picsum.photos/1000/1200?random=3',
    color: '#00ff41'
  },
  { 
    title: 'Vanguard Media', 
    category: 'Streaming / UX', 
    img: 'https://picsum.photos/1000/1200?random=4',
    color: '#ff4b2b'
  }
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = triggerRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const scrollWidth = container.scrollWidth - window.innerWidth;

    const pin = gsap.to(container, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div id="work" ref={triggerRef} className="overflow-hidden bg-dark">
      <div 
        ref={containerRef} 
        className="h-screen flex items-center px-[10vw] gap-[5vw] w-max relative"
      >
        <div className="w-[40vw] flex flex-col justify-center gap-10">
          <h2 className="text-primary text-xs tracking-[0.3em] uppercase font-bold">03 / Case Studies</h2>
          <h3 className="font-serif text-6xl md:text-8xl leading-none">
            Selected <br /><span className="italic text-white/30">Works.</span>
          </h3>
          <p className="text-white/40 max-w-sm text-lg font-light">
            A deep dive into high-fidelity products built for impact and scale.
          </p>
        </div>

        {projects.map((project, i) => (
          <article 
            key={i} 
            className="w-[80vw] md:w-[45vw] h-[65vh] relative group cursor-pointer"
          >
            <div className="w-full h-full overflow-hidden rounded-2xl border border-white/5 bg-white/5">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-expo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
              <span className="text-[10px] tracking-widest uppercase text-white/40 font-bold">
                {project.category}
              </span>
              <h4 className="text-3xl md:text-5xl font-serif tracking-tight text-white group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <div className="w-12 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>

            <div className="absolute top-10 right-10 text-white/5 text-8xl md:text-9xl font-bold font-display select-none">
              0{i + 1}
            </div>
          </article>
        ))}

        <div className="w-[30vw] flex flex-col justify-center items-center text-center px-10">
          <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer hover:border-primary transition-colors">
             <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-45 transition-transform duration-500">add</span>
          </div>
          <p className="mt-8 text-xs tracking-widest uppercase text-white/40">View All Archive</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
