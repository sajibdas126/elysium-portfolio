
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    tl.to(textRef.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'expo.out',
    })
    .to(barRef.current, {
      duration: 1,
      width: '100%',
      ease: 'power2.inOut',
    }, '-=0.5')
    .to(containerRef.current, {
      duration: 1.2,
      yPercent: -100,
      ease: 'expo.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
    >
      <div className="overflow-hidden">
        <div 
          ref={textRef}
          className="translate-y-full opacity-0 flex flex-col items-center gap-4"
        >
          <h1 className="text-2xl md:text-4xl font-serif italic tracking-tight">
            ALEX.DESIGN
          </h1>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              ref={barRef}
              className="absolute top-0 left-0 h-full w-0 bg-primary"
            />
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Loading Excellence</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
