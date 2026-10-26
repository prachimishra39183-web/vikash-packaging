import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Ribbon() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z = state.clock.elapsedTime * 0.06;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  const coils = Array.from({ length: 48 }, (_, i) => {
    const t = (i / 48) * Math.PI * 6;
    const radius = 1.6 + Math.sin(t * 0.5) * 0.35;

    return (
      <mesh
        key={i}
        position={[
          Math.cos(t) * radius,
          (i / 48 - 0.5) * 2.8,
          Math.sin(t) * radius,
        ]}
      >
        <boxGeometry args={[0.15, 0.06, 0.15]} />
        <meshStandardMaterial
          color={i % 4 === 0 ? '#D6FF45' : '#C7CBD1'}
          metalness={0.65}
          roughness={0.4}
        />
      </mesh>
    );
  });

  return <group ref={ref}>{coils}</group>;
}

export default function FooterScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 1.2]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ alpha: true, antialias: false }}
    >
      <ambientLight intensity={0.6} />
      <spotLight
        position={[4, 5, 4]}
        intensity={1}
        color="#D6FF45"
      />
      <Ribbon />
    </Canvas>
  );
}