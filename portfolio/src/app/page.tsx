"use client";

import data from '../../data.json';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Briefcase, GraduationCap, Trophy, Terminal, Code2, MonitorPlay } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Sparkles from './components/animations/Sparkles';
import FlyingLogos from './components/animations/FlyingLogos';
import PixelSprite from './components/animations/PixelSprite';
import BezierPath from './components/animations/BezierPath';
import MouseGlow from './components/animations/MouseGlow';

// Beast Mode Animations
const springUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="layout-container" style={{ position: 'relative' }}>
      <PixelSprite />
      <MouseGlow />

      {/* HERO SECTION */}
      <motion.section
        id="hero"
        initial="hidden" animate="visible" variants={staggerContainer}
        style={{ minHeight: '85vh', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '40px', position: 'relative' }}
      >
        <FlyingLogos />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <motion.div variants={springUp}>
            <span className="label-caps" style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '10px 20px', borderRadius: '50px' }}>
              👋 Hello, my name is {data.hero.shortName}
            </span>
          </motion.div>
          <motion.h1 variants={springUp} className="display-text">
            {data.hero.title}
          </motion.h1>
          <motion.p variants={springUp} style={{ fontSize: '22px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {data.hero.tagline}
          </motion.p>
          <motion.div variants={springUp} style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
            <a href={`mailto:${data.contact.email}`} className="btn-primary">Reach out <Mail size={18} /></a>
            <a href={data.hero.resumeUrl} className="btn-secondary">Resume <ExternalLink size={18} /></a>
          </motion.div>
        </div>

        {/* Animated Hero Abstract Illustration */}
        <motion.div variants={popIn} style={{ position: 'relative', width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="blob-illustration" style={{ width: '400px', height: '400px', background: 'var(--primary)', opacity: 0.5, top: '10%', right: '10%' }}></div>
          <div className="blob-illustration" style={{ width: '300px', height: '300px', background: 'var(--secondary)', opacity: 0.6, bottom: '10%', left: '10%', animationDelay: '-5s' }}></div>

          {/* Floating Glass Cards */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card" style={{ position: 'absolute', top: '10%', right: '40%', width: '220px', height: '300px', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 3 }}
          >
            <img src="/images/1.jpg" alt="Portfolio Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15], rotate: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card" style={{ position: 'absolute', bottom: '5%', right: '20%', width: '180px', height: '240px', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 2 }}
          >
            <img src="/images/2.jpg" alt="Portfolio Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>

          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card" style={{ position: 'absolute', top: '35%', right: '0%', width: '200px', height: '280px', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 1 }}
          >
            <img src="/images/3.jpg" alt="Portfolio Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ABOUT & SKILLS SECTION */}
      <motion.section
        id="about"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
        style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
      >
        <motion.div variants={springUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="label-caps" style={{ marginBottom: '16px' }}>01. Background</h2>
          <h3 className="display-text" style={{ fontSize: '56px' }}>{data.skills.title}</h3>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Abstract Skills Illustration */}
          <motion.div variants={popIn} style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="blob-illustration" style={{ width: '350px', height: '350px', background: 'var(--tertiary)', opacity: 0.4, top: '20%', left: '20%' }}></div>
            <motion.div
              animate={{ y: [15, -15, 15], rotate: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card" style={{ width: '250px', height: '250px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}
            >
              <Code2 size={100} color="var(--tertiary)" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 20px rgba(255, 235, 59, 0.6))' }} />
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <motion.p variants={springUp} style={{ fontSize: '24px', color: 'var(--primary)', fontWeight: 700 }}>
              {data.skills.description}
            </motion.p>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {data.skills.details.map((detail, idx) => (
                <motion.li variants={springUp} key={idx} style={{ color: 'var(--text-secondary)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Terminal size={20} color="var(--secondary)" /> {detail}
                </motion.li>
              ))}
            </ul>
            <motion.div variants={springUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
              {data.skills.techStack.map((skill, idx) => (
                <div key={idx} className="pill">
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: idx % 2 === 0 ? 'var(--secondary)' : 'var(--accent)' }}></span>
                  {skill}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* PROFICIENCY BARS */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
      >
        <motion.div variants={springUp} className="glass-card" style={{ padding: '64px', borderTop: '5px solid var(--primary)' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '40px', fontSize: '32px', textAlign: 'center' }}>Skill Proficiency</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {data.proficiency.map((prof, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  <span>{prof.skill}</span>
                  <span style={{ color: 'var(--secondary)' }}>{prof.value}%</span>
                </div>
                <div style={{ width: '100%', height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', overflow: 'hidden', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)' }}>
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${prof.value}%` }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '50px', boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        style={{ display: 'flex', flexDirection: 'column', gap: '64px', position: 'relative' }}
      >
        <BezierPath />
        <motion.div variants={springUp} style={{ textAlign: 'center' }}>
          <h2 className="label-caps" style={{ marginBottom: '16px' }}>02. Journey</h2>
          <h3 className="display-text" style={{ fontSize: '56px' }}>Work Experience</h3>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {data.experience.map((exp, idx) => (
            <motion.div key={idx} variants={springUp} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Briefcase size={28} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700 }}>{exp.role}</h4>
                    <p style={{ color: 'var(--secondary)', fontFamily: 'var(--font-code)', fontSize: '16px', marginTop: '4px' }}>{exp.company}</p>
                  </div>
                </div>
              </div>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--tertiary)', border: 'none', marginBottom: '24px', fontSize: '12px' }}>{exp.date}</span>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '16px', lineHeight: 1.8 }}>{exp.desc}</p>
              <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exp.descBullets.map((bullet, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '15px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary)' }}>✦</span> {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={popIn}
        className="glass-card"
        style={{ textAlign: 'center', padding: '120px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', marginBottom: '120px', background: 'linear-gradient(to bottom right, rgba(33, 41, 54, 0.9), rgba(108, 99, 255, 0.1))', position: 'relative' }}
      >
        <Sparkles />
        <h2 className="label-caps">03. What's Next?</h2>
        <h3 className="display-text" style={{ fontSize: '64px' }}>{data.contact.title}</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '20px', lineHeight: 1.8 }}>
          {data.contact.subtitle}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--secondary)', fontFamily: 'var(--font-code)', fontSize: '18px', background: 'rgba(0, 229, 255, 0.1)', padding: '12px 24px', borderRadius: '50px' }}>
          <MapPin size={20} /> {data.contact.location}
        </div>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`mailto:${data.contact.email}`} className="btn-primary" style={{ marginTop: '24px', padding: '20px 60px', fontSize: '20px' }}>
          Say Hello 👋
        </motion.a>

        <div style={{ display: 'flex', gap: '32px', marginTop: '64px' }}>
          {data.hero.social.map((link, idx) => {
            const Icon = link.icon === 'github' ? Github : link.icon === 'twitter' ? Twitter : link.icon === 'linkedin' ? Linkedin : Mail;
            return (
              <motion.a
                key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-primary)', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                whileHover={{ background: 'var(--primary)', scale: 1.15, y: -10, boxShadow: '0 10px 20px rgba(108, 99, 255, 0.5)' }}
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </div>
      </motion.section>

    </div>
  );
}
