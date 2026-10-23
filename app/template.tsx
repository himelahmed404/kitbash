import * as React from 'react';
import { PageWipe } from '@/components/motion/PageWipe';

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageWipe>{children}</PageWipe>;
}
