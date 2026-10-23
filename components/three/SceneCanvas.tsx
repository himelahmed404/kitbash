'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScenePoster } from './ScenePoster';

const Scene = dynamic(() => import('./SceneRoot'), {
  ssr: false,
  loading: () => <ScenePoster />,
});

export function SceneCanvas() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Mount after first paint / idle to prioritize main HTML thread LCP
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => setMounted(true));
    } else {
      setTimeout(() => setMounted(true), 100);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {!mounted || reduced ? <ScenePoster /> : <Scene />}
    </div>
  );
}
