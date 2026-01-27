
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experiences = [
  {
    role: 'Senior Product Designer',
    company: 'TechFlow Systems',
    period: '2021 — Present',
    desc: 'Orchestrating the transition to a motion-first design system. Lead designer for core product suite.'
  },
  {
    role: 'UI/UX Lead',
    company: 'Creative Pulse Agency',
    period: '2019 — 2021',
    desc: 'Managed a team of 5 designers for global fintech clients. Delivered high-fidelity prototypes.'
  },
  {
    role: 'Frontend Developer',
    company: 'Nebula Startups',
    period: '2017 — 2019',
    desc: 'Built immersive landing pages and React dashboards. Optimized rendering pipelines for low-end devices.'
  }
];

const Experience: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 0.5,
      }
    });
  }, []);

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-12 bg-dark relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20">
        <div className="flex flex-col gap-8 md:sticky md:top-40 md:h-fit">
          <h2 className="text-primary text-xs tracking-[0.3em] uppercase font-bold">04 / Trajectory</h2>
          <h3 className="font-serif text-5xl md:text-7xl">Experience.</h3>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
            A roadmap of professional evolution and technical breakthroughs.
          </p>
        </div>

        <div className="relative pl-12 md:pl-24">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10" />
          <div 
            ref={lineRef}
            className="absolute left-0 top-0 w-[2px] h-full bg-primary origin-top scale-y-0"
          />

          <div className="flex flex-col gap-24 md:gap-32">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative">
                {/* Dot */}
                <div className="absolute -left-[53px] md:-left-[101px] top-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-dark border-2 border-primary group-hover:scale-125 transition-transform duration-500 z-10" />
                
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono text-white/30 tracking-widest uppercase">{exp.period}</span>
                  <h4 className="text-2xl md:text-4xl font-display font-medium group-hover:text-primary transition-colors">{exp.role}</h4>
                  <h5 className="text-primary/60 text-lg md:text-xl font-serif italic mb-2">{exp.company}</h5>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-xl">
                    {exp.desc}
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

export default Experience;
