import * as React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturedSection } from '@/components/landing/FeaturedSection';
import { CategoriesSection } from '@/components/landing/CategoriesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { SceneCanvas } from '@/components/three/SceneCanvas';

export default function HomePage() {
  return (
    <div className="relative flex flex-col w-full">
      {/* Fixed 3D Kit Assembly Scene with SVG Poster Fallback */}
      <SceneCanvas />

      {/* Flagship Landing Page Content Layers */}
      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <HowItWorksSection />
        <SocialProofSection />
      </div>
    </div>
  );
}
