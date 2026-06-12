import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Moinuddin - Developer Portfolio',
  description: 'Trying to figure out stuff through lines of code.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Floating Glass Dock */}
        <nav className="floating-dock">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </body>
    </html>
  );
}
