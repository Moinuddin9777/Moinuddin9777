"use client";
import { motion } from 'framer-motion';

export default function Sparkles() {
  // Generate a steady array of elements to animate
  const sparkles = Array.from({ length: 8 });
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 2 + 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '8px',
            height: '8px',
            background: i % 2 === 0 ? 'var(--tertiary)' : 'var(--secondary)',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--tertiary)' : 'var(--secondary)'}`
          }}
        />
      ))}
    </div>
  );
}
