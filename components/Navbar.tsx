
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.5 }
    );
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:rotate-90 transition-transform duration-500">
          <span className="font-bold text-lg leading-none">A</span>
        </div>
        <span className="font-bold text-xl tracking-tighter">ALEX.DEV</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {['Work', 'About', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <button className="px-6 py-2 rounded-full border border-white/20 hover:border-primary/50 text-xs font-bold tracking-widest uppercase transition-all hover:bg-primary/5">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
