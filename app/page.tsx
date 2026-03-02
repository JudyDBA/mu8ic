'use client';

import { MinimalistHero } from '@/components/hero';

export default function Home() {
  return (
    <MinimalistHero
      logoText="mu8ic"
      navLinks={[
        { label: 'FEATURES', href: '#features' },
        { label: 'PRICING', href: '#pricing' },
        { label: 'CONTACT', href: '#contact' },
      ]}
      mainText="Generate royalty-free music for your YouTube videos in seconds. Powered by AI, crafted for creators."
      readMoreLink="#features"
      imageSrc="/hero-image.png"
      imageAlt="AI Music Creator"
      overlayText={{
        part1: 'Create Your',
        part2: 'Sound',
      }}
      socialLinks={[]}
      locationText=""
    />
  );
}
