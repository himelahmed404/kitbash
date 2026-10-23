import * as React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturedSection } from '@/components/landing/FeaturedSection';
import { CategoriesSection } from '@/components/landing/CategoriesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
export default function HomePage() {
  return (
    <div className="relative flex flex-col w-full">
      {/* Flagship Landing Page Content Layers */}
      <div className="relative flex flex-col w-full">
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <HowItWorksSection />
        <SocialProofSection />
      </div>
    </div>
  );
}
