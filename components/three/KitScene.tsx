'use client';

import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';
import { ScrollTrigger } from '@/lib/gsap';
import { ACTS, POSES, MOBILE_POSES, type ShapeId } from './poses';
import {
  CubeShape,
  BallShape,
  RingShape,
  PillShape,
  SlabShape,
  GlyphShape,
  ConfettiBits,
} from './KitShapes';

const IDS: ShapeId[] = ['cube', 'ball', 'ring', 'pill', 'slab', 'glyph'];

// Smoothstep ease
const ease = (t: number) => t * t * (3 - 2 * t);

export function KitScene() {
  const refs = React.useRef<Record<ShapeId, THREE.Group | null>>({
    cube: null,
    ball: null,
    ring: null,
    pill: null,
    slab: null,
    glyph: null,
  });

  const scrollRef = React.useRef({ act: 0, t: 0 });
  const isMobileRef = React.useRef(false);
  const mouseRef = React.useRef({ x: 0, y: 0 });

  const tmpVec = React.useRef({
    p: new THREE.Vector3(),
    target: new THREE.Vector3(),
  });

  React.useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const triggers: ScrollTrigger[] = [];

    // Create ScrollTrigger for each act
    ACTS.forEach((id, i) => {
      const element = document.getElementById(id) || (id === 'footer' ? document.querySelector('footer') : null);
      if (!element) return;

      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          scrollRef.current = { act: i, t: self.progress };
        },
        onEnterBack: () => {
          scrollRef.current = { act: i, t: 1 };
        },
      });

      triggers.push(trigger);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('pointermove', handlePointerMove);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useFrame((state, delta) => {
    const { act, t } = scrollRef.current;
    const nextAct = Math.min(act + 1, ACTS.length - 1);
    const k = ease(Math.max(0, Math.min(1, t)));
    const poseTable = isMobileRef.current ? MOBILE_POSES : POSES;

    for (const id of IDS) {
      const g = refs.current[id];
      if (!g) continue;

      const a = poseTable[id][act] || poseTable[id][0];
      const b = poseTable[id][nextAct] || a;

      // Position lerp
      tmpVec.current.p.set(a.p[0], a.p[1], a.p[2]);
      tmpVec.current.target.set(b.p[0], b.p[1], b.p[2]);
      tmpVec.current.p.lerp(tmpVec.current.target, k);

      // Mouse parallax only in Act 0 (Hero)
      if (act === 0) {
        const mx = mouseRef.current.x || state.pointer.x;
        const my = mouseRef.current.y || state.pointer.y;
        tmpVec.current.p.x += mx * 0.35;
        tmpVec.current.p.y += my * 0.25;
      }

      // Smooth lag / damping
      easing.damp3(g.position, tmpVec.current.p, 0.25, delta);

      // Rotation lerp with gentle idle spin
      const idleSpin = act < 3 ? state.clock.elapsedTime * 0.12 : 0;
      const targetRotX = THREE.MathUtils.lerp(a.r[0], b.r[0], k);
      const targetRotY = THREE.MathUtils.lerp(a.r[1], b.r[1], k) + idleSpin;
      const targetRotZ = THREE.MathUtils.lerp(a.r[2], b.r[2], k);

      easing.dampE(g.rotation, [targetRotX, targetRotY, targetRotZ], 0.3, delta);

      // Scale lerp
      const s = THREE.MathUtils.lerp(a.s, b.s, k);
      easing.damp3(g.scale, [s, s, s], 0.25, delta);
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[-4, 7, 5]} intensity={1.5} color="#FFFFFF" />
      <directionalLight position={[4, -3, 2]} intensity={0.4} color="#FFF9DB" />

      {/* Hero Shapes */}
      <CubeShape innerRef={(g) => { refs.current.cube = g; }} />
      <BallShape innerRef={(g) => { refs.current.ball = g; }} />
      <RingShape innerRef={(g) => { refs.current.ring = g; }} />
      <PillShape innerRef={(g) => { refs.current.pill = g; }} />
      <SlabShape innerRef={(g) => { refs.current.slab = g; }} />
      <GlyphShape innerRef={(g) => { refs.current.glyph = g; }} />

      {/* Floating confetti particles */}
      <ConfettiBits />
    </>
  );
}
