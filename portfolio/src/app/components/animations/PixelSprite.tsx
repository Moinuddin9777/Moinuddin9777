"use client";
import { motion } from 'framer-motion';

export default function PixelSprite() {
  return (
    <motion.div
      initial={{ x: '-10vw', y: 0 }}
      animate={{ 
        x: '110vw',
        y: [0, -15, 0, -15, 0] // Bouncing effect while running
      }}
      transition={{ 
        x: { duration: 12, repeat: Infinity, ease: "linear" },
        y: { duration: 1, repeat: Infinity, ease: "easeOut" }
      }}
      style={{
        position: 'fixed',
        bottom: '80px', // Just above the floating dock
        left: 0,
        zIndex: 90,
        fontSize: '32px',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 5px 10px rgba(0, 229, 255, 0.5))'
      }}
    >
      👾
    </motion.div>
  );
}
