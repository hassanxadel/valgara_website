import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useMotionValue, useSpring } from 'framer-motion';

interface UltraSmoothFadeProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

const UltraSmoothFade: React.FC<UltraSmoothFadeProps> = ({
  children,
  className = '',
  offset = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Ultra-precise scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 30%"]
  });

  // Motion values for maximum performance
  const opacity = useMotionValue(0);
  const y = useMotionValue(100);
  const scale = useMotionValue(0.9);

  // Ultra-fast spring configuration
  const smoothOpacity = useSpring(opacity, {
    stiffness: 200,
    damping: 50,
    mass: 0.2
  });

  const smoothY = useSpring(y, {
    stiffness: 250,
    damping: 55,
    mass: 0.15
  });

  const smoothScale = useSpring(scale, {
    stiffness: 300,
    damping: 60,
    mass: 0.1
  });

  // Smooth scroll listener with RAF optimization
  useEffect(() => {
    let rafId: number;
    
    const updateValues = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
             // Calculate progress more quickly
       const startTrigger = windowHeight * 0.9;
       const endTrigger = windowHeight * 0.1;
      
      let progress = 0;
      
             if (elementTop <= startTrigger && elementTop >= endTrigger - elementHeight) {
         if (!hasAnimated) {
           progress = 1 - ((elementTop - endTrigger) / (startTrigger - endTrigger));
           progress = Math.max(0, Math.min(1, progress));
           
           // Apply offset delay
           if (offset > 0) {
             progress = Math.max(0, progress - offset);
             progress = progress / (1 - offset);
           }
           
           // Ultra-fast easing function
           const eased = 1 - Math.pow(1 - progress, 1.5);
           
           opacity.set(eased);
           y.set(60 * (1 - eased));
           scale.set(0.94 + (0.06 * eased));
           
           setIsInView(true);
           
           // Mark as animated when fully visible
           if (eased >= 0.95) {
             setHasAnimated(true);
           }
         }
       } else if (elementTop > startTrigger && !hasAnimated) {
         opacity.set(0);
         y.set(60);
         scale.set(0.94);
         setIsInView(false);
       }
    };

    const handleScroll = () => {
      rafId = requestAnimationFrame(updateValues);
    };

    // Initial check
    updateValues();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateValues, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateValues);
      if (rafId) cancelAnimationFrame(rafId);
    };
     }, [opacity, y, scale, offset, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity: smoothOpacity,
        y: smoothY,
        scale: smoothScale,
        willChange: isInView ? 'transform, opacity' : 'auto',
        contain: 'layout style paint',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      {children}
    </motion.div>
  );
};

export default UltraSmoothFade; 