
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const magneticRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Magnetic Button Simulation
    const btn = magneticRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.4;
      const y = (clientY - (top + height / 2)) * 0.4;

      gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      id="contact"
      ref={containerRef}
      className="py-24 md:py-40 px-6 md:px-12 bg-dark relative"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-primary text-xs tracking-[0.3em] uppercase font-bold mb-10 animate-pulse">
          Ready to elevate?
        </h2>
        
        <h3 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-16">
          LET'S <span className="italic text-white/30">BUILD.</span>
        </h3>

        <form className="w-full max-w-3xl flex flex-col gap-16 md:gap-24 mb-20" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="What's your name?"
                className="w-full bg-transparent border-b border-white/10 py-6 text-xl md:text-2xl placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors peer"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 peer-focus:w-full" />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-transparent border-b border-white/10 py-6 text-xl md:text-2xl placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors peer"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 peer-focus:w-full" />
            </div>
          </div>
          
          <div className="relative group">
            <textarea 
              placeholder="Tell me about your vision..."
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-6 text-xl md:text-2xl placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors peer resize-none"
            />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 peer-focus:w-full" />
          </div>

          <div className="flex justify-center pt-10">
            <button 
              ref={magneticRef}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary text-dark flex items-center justify-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <span className="relative z-10 font-bold text-xs tracking-[0.3em] uppercase text-center group-hover:text-dark transition-colors duration-300">
                Send <br /> Message
              </span>
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-xs font-bold tracking-[0.2em] uppercase text-white/40">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
