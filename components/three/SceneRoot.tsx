'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, PerformanceMonitor } from '@react-three/drei';
import { KitScene } from './KitScene';

export default function SceneRoot() {
  const [dpr, setDpr] = React.useState(1.5);

  return (
    <Canvas
      dpr={dpr}
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        alpha: true,
      }}
      camera={{
        fov: 30,
        position: [0, 0, 12],
      }}
      style={{ pointerEvents: 'none' }}
      className="w-full h-full pointer-events-none"
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <AdaptiveDpr pixelated />
      <KitScene />
    </Canvas>
  );
}
