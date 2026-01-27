
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(imageRef.current, 
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.5, ease: 'expo.inOut' }
    )
    .fromTo(textRef.current?.children || [],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-12 bg-dark relative"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
        <div 
          ref={imageRef}
          className="relative aspect-[4/5] md:aspect-square bg-white/5 overflow-hidden rounded-2xl group"
        >
          <img 
            src="https://picsum.photos/1200/1500" 
            alt="Profile" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
        </div>

        <div ref={textRef} className="flex flex-col gap-8">
          <h2 className="text-primary text-xs tracking-[0.3em] uppercase font-bold">
            01 / Who am I?
          </h2>
          <h3 className="font-serif text-4xl md:text-6xl italic leading-tight">
            Design isn't just how it looks, it's how it <span className="not-italic text-white/50">moves</span>.
          </h3>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            With over 6 years of experience in the creative tech space, I've worked with global brands to translate their visions into high-fidelity digital products. I specialize in merging technical proficiency with creative intuition.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-bold">Strategy</h4>
              <p className="text-sm text-white/80">Defining the path to impact and growth.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-bold">Development</h4>
              <p className="text-sm text-white/80">Crafting robust, scalable codebases.</p>
            </div>
          </div>
          <div className="pt-8">
            <button className="flex items-center gap-4 group">
              <span className="text-xs font-bold tracking-widest uppercase border-b border-primary/40 pb-1 group-hover:border-primary transition-all">
                Read My Story
              </span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
