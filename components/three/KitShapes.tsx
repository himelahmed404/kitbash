'use client';

import * as React from 'react';
import * as THREE from 'three';
import { RoundedBox, Outlines, Sphere, Torus, Capsule, Text } from '@react-three/drei';

interface ShapeProps {
  innerRef?: (el: THREE.Group | null) => void;
  showShadow?: boolean;
}

// 1. Box Base: Rounded Cube in Brand Sun (#FFD600)
export function CubeShape({ innerRef, showShadow = true }: ShapeProps) {
  return (
    <group ref={innerRef}>
      <RoundedBox args={[1.4, 1.4, 1.4]} radius={0.05} smoothness={4}>
        <meshToonMaterial color="#FFD600" />
        <Outlines thickness={0.035} color="#111111" />
      </RoundedBox>
      {showShadow && (
        <RoundedBox
          args={[1.4, 1.4, 1.4]}
          radius={0.05}
          smoothness={4}
          position={[0.12, -0.12, -0.2]}
        >
          <meshBasicMaterial color="#111111" />
        </RoundedBox>
      )}
    </group>
  );
}

// 2. Bubblegum Ball: Sphere (#FF5FA2)
export function BallShape({ innerRef, showShadow = true }: ShapeProps) {
  return (
    <group ref={innerRef}>
      <Sphere args={[0.7, 32, 16]}>
        <meshToonMaterial color="#FF5FA2" />
        <Outlines thickness={0.035} color="#111111" />
      </Sphere>
      {showShadow && (
        <Sphere args={[0.7, 16, 8]} position={[0.12, -0.12, -0.2]}>
          <meshBasicMaterial color="#111111" />
        </Sphere>
      )}
    </group>
  );
}

// 3. Mint Ring: Torus (#5EEAD4)
export function RingShape({ innerRef, showShadow = true }: ShapeProps) {
  return (
    <group ref={innerRef}>
      <Torus args={[0.65, 0.22, 16, 32]}>
        <meshToonMaterial color="#5EEAD4" />
        <Outlines thickness={0.035} color="#111111" />
      </Torus>
      {showShadow && (
        <Torus args={[0.65, 0.22, 12, 24]} position={[0.12, -0.12, -0.2]}>
          <meshBasicMaterial color="#111111" />
        </Torus>
      )}
    </group>
  );
}

// 4. Paper Pill: Capsule (#FFFFFF)
export function PillShape({ innerRef, showShadow = true }: ShapeProps) {
  return (
    <group ref={innerRef}>
      <Capsule args={[0.35, 0.8, 16, 24]}>
        <meshToonMaterial color="#FFFFFF" />
        <Outlines thickness={0.035} color="#111111" />
      </Capsule>
      {showShadow && (
        <Capsule args={[0.35, 0.8, 12, 16]} position={[0.12, -0.12, -0.2]}>
          <meshBasicMaterial color="#111111" />
        </Capsule>
      )}
    </group>
  );
}

// 5. Ink Lid Slab: Thin Box (#111111)
export function SlabShape({ innerRef, showShadow = true }: ShapeProps) {
  return (
    <group ref={innerRef}>
      <RoundedBox args={[1.65, 0.16, 1.65]} radius={0.02} smoothness={2}>
        <meshToonMaterial color="#111111" />
        <Outlines thickness={0.035} color="#FFD600" />
      </RoundedBox>
      {showShadow && (
        <RoundedBox
          args={[1.65, 0.16, 1.65]}
          radius={0.02}
          smoothness={2}
          position={[0.1, -0.1, -0.15]}
        >
          <meshBasicMaterial color="#000000" />
        </RoundedBox>
      )}
    </group>
  );
}

// 6. Glyph: "Aa" Brand Typography Stamp on Lid
export function GlyphShape({ innerRef }: ShapeProps) {
  return (
    <group ref={innerRef}>
      <Text
        fontSize={0.65}
        color="#FFD600"
        font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T5rPnM.woff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.025}
        outlineColor="#111111"
      >
        Aa
      </Text>
    </group>
  );
}

// 7. Confetti Bits: Instanced small particles around the box
export function ConfettiBits() {
  const count = 32;
  const meshRef = React.useRef<THREE.InstancedMesh>(null);

  const colors = React.useMemo(() => [
    new THREE.Color('#FFD600'),
    new THREE.Color('#FF5FA2'),
    new THREE.Color('#5EEAD4'),
    new THREE.Color('#FFFFFF'),
    new THREE.Color('#111111'),
  ], []);

  React.useLayoutEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      // Deterministic pseudo-random distribution
      const theta = (i / count) * Math.PI * 2;
      const radius = 2.8 + (i % 5) * 0.4;
      const x = Math.cos(theta) * radius + ((i % 3) - 1) * 0.3;
      const y = Math.sin(theta) * (radius * 0.5) + ((i % 4) - 1.5) * 0.5;
      const z = ((i % 5) - 2) * 0.6;

      dummy.position.set(x, y, z);
      dummy.rotation.set((i * 0.7), (i * 0.5), (i * 0.3));
      const scale = 0.08 + (i % 3) * 0.04;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, colors[i % colors.length]);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [colors]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}
