
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.to('.hero-char', {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1.2,
      ease: 'expo.out'
    })
    .fromTo(sublineRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.6'
    );
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="hero-char inline-block translate-y-[110%] opacity-0">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="text-center max-w-5xl z-10">
        <h2 className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-8 opacity-60">
          Digital Architect  Based in Tokyo
        </h2>

        <h1 
          ref={headlineRef}
          className="font-serif text-5xl md:text-8xl lg:text-9xl font-normal leading-[1.05] tracking-tight mb-10"
        >
          <div className="overflow-hidden">
            {splitText("CREATIVE")}
          </div>
          <div className="overflow-hidden italic text-white/40">
            {splitText("DEVELOPER")}
          </div>
          <div className="overflow-hidden">
            {splitText("& DESIGNER")}
          </div>
        </h1>

        <p 
          ref={sublineRef}
          className="max-w-xl mx-auto text-white/50 font-display text-base md:text-xl font-light leading-relaxed mb-12"
        >
          I build immersive digital experiences where motion meets precision engineering. Pushing the boundaries of what's possible on the web.
        </p>

        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group relative h-16 px-12 rounded-full overflow-hidden border border-white/20 bg-transparent transition-all hover:border-primary/50">
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-primary transition-colors">
              Explore Portfolio
            </span>
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
          </button>
          
          <a href="#contact" className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all">
            Start a project
            <span className="w-8 h-[1px] bg-white/20" />
          </a>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
