'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const MusicianSilhouette = () => (
  <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    {/* Head */}
    <ellipse cx="100" cy="48" rx="28" ry="32" fill="#1a1a1a" />
    {/* Headphones */}
    <path d="M72 42 Q72 10 100 10 Q128 10 128 42" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <rect x="64" y="38" width="14" height="22" rx="7" fill="#1a1a1a"/>
    <rect x="122" y="38" width="14" height="22" rx="7" fill="#1a1a1a"/>
    {/* Body */}
    <path d="M60 120 Q60 88 100 86 Q140 88 140 120 L148 220 L52 220 Z" fill="#1a1a1a"/>
    {/* Left arm */}
    <path d="M62 110 Q30 140 22 180 Q18 195 28 200 Q38 205 44 188 Q52 160 68 138 Z" fill="#1a1a1a"/>
    {/* Right arm with mic */}
    <path d="M138 110 Q170 140 178 180 Q182 195 172 200 Q162 205 156 188 Q148 160 132 138 Z" fill="#1a1a1a"/>
    {/* Mic */}
    <rect x="168" y="170" width="10" height="26" rx="5" fill="#333"/>
    <ellipse cx="173" cy="168" rx="9" ry="11" fill="#444"/>
    {/* Legs */}
    <path d="M52 220 L46 310 L72 310 L82 248 L100 248 L118 248 L128 310 L154 310 L148 220 Z" fill="#1a1a1a"/>
    {/* Shoes */}
    <ellipse cx="59" cy="312" rx="22" ry="10" fill="#111"/>
    <ellipse cx="141" cy="312" rx="22" ry="10" fill="#111"/>
  </svg>
);

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
          style={{ fontFamily: 'var(--font-schoolbell)' }}
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <a
            href="#features"
            className="hidden md:inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get Started
          </a>
          <button
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="block h-0.5 w-5 bg-foreground"></span>
          </button>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a
            href={readMoreLink}
            className="mt-4 inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get Started
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          ></motion.div>
          <motion.div
            className="relative z-10 w-48 md:w-56 lg:w-64"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            {!imgError && imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-auto w-full object-cover scale-150"
                onError={() => setImgError(true)}
              />
            ) : (
              <MusicianSilhouette />
            )}
          </motion.div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1
            className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl"
            style={{ fontFamily: 'var(--font-pirata-one)' }}
          >
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
