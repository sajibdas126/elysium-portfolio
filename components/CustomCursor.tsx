
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/40 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
