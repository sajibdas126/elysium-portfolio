
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  { name: 'Creative Direction', percent: 95 },
  { name: 'GSAP / WebGL / Three.js', percent: 90 },
  { name: 'UI/UX Engineering', percent: 98 },
  { name: 'TypeScript / React', percent: 92 },
  { name: 'Product Management', percent: 85 },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bars = containerRef.current?.querySelectorAll('.skill-bar');
    
    if (bars) {
      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-percent');
        gsap.to(bar, {
          width: `${targetWidth}%`,
          duration: 2,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
          }
        });
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-40 px-6 md:px-12 bg-dark border-y border-white/5"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-primary text-xs tracking-[0.3em] uppercase font-bold mb-6">02 / Technical Arsenal</h2>
            <h3 className="font-serif text-5xl md:text-7xl">Curated Skills.</h3>
          </div>
          <p className="text-white/40 max-w-sm text-sm md:text-base font-light italic">
            "Tools are the extension of the mind."
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((skill, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex justify-between items-end mb-4">
                <h4 className="text-xl md:text-3xl font-display font-medium tracking-tight group-hover:text-primary transition-colors duration-500">
                  {skill.name}
                </h4>
                <span className="text-xs font-mono text-white/30">{skill.percent}%</span>
              </div>
              <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                <div 
                  className="skill-bar absolute top-0 left-0 h-full w-0 bg-primary shadow-[0_0_10px_rgba(13,204,242,0.8)]" 
                  data-percent={skill.percent}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
