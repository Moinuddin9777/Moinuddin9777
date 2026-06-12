"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig1 = { stiffness: 400, damping: 25 };
  const springConfig2 = { stiffness: 200, damping: 30 };
  const springConfig3 = { stiffness: 100, damping: 40 };

  const smoothX1 = useSpring(mouseX, springConfig1);
  const smoothY1 = useSpring(mouseY, springConfig1);

  const smoothX2 = useSpring(mouseX, springConfig2);
  const smoothY2 = useSpring(mouseY, springConfig2);

  const smoothX3 = useSpring(mouseX, springConfig3);
  const smoothY3 = useSpring(mouseY, springConfig3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: smoothX1, y: smoothY1,
          translateX: "-50%", translateY: "-50%",
          position: 'fixed', top: 0, left: 0, width: '120px', height: '120px',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.5) 0%, rgba(108, 99, 255, 0.2) 40%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 50, filter: 'blur(10px)', mixBlendMode: 'screen'
        }}
      />
      <motion.div
        style={{
          x: smoothX2, y: smoothY2,
          translateX: "-50%", translateY: "-50%",
          position: 'fixed', top: 0, left: 0, width: '90px', height: '90px',
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.7) 0%, rgba(0, 229, 255, 0.3) 40%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 49, filter: 'blur(8px)', mixBlendMode: 'screen'
        }}
      />
      <motion.div
        style={{
          x: smoothX3, y: smoothY3,
          translateX: "-50%", translateY: "-50%",
          position: 'fixed', top: 0, left: 0, width: '60px', height: '60px',
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.6) 0%, rgba(108, 99, 255, 0.2) 50%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 48, filter: 'blur(5px)', mixBlendMode: 'screen'
        }}
      />
    </>
  );
}
