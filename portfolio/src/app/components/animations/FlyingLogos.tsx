"use client";
import { motion } from 'framer-motion';
import { Smartphone, Database, Globe, Cpu } from 'lucide-react';

export default function FlyingLogos() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: -1 }}>
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '15%', left: '5%', opacity: 0.15 }}
      >
        <Smartphone size={80} color="var(--primary)" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', top: '60%', right: '10%', opacity: 0.15 }}
      >
        <Database size={100} color="var(--secondary)" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', bottom: '20%', left: '10%', opacity: 0.1 }}
      >
        <Globe size={120} color="var(--tertiary)" />
      </motion.div>
      <motion.div
        animate={{ y: [-30, 30, -30], x: [30, -30, 30], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '25%', right: '15%', opacity: 0.15 }}
      >
        <Cpu size={90} color="var(--accent)" />
      </motion.div>
    </div>
  );
}
