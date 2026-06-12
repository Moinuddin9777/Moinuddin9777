"use client";
import { motion } from 'framer-motion';

export default function BezierPath() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', opacity: 0.3, zIndex: -1 }}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          d="M-100,500 C300,200 600,800 1100,500"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="15 20"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,800 C400,1100 700,-100 1100,200"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 15"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 6, ease: "easeInOut", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--tertiary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
