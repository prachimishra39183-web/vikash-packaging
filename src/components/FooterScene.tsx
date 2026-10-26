import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

function Ribbon() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.12;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });

  const coils = Array.from({ length: 60 }, (_, i) => {
    const t = (i / 60) * Math.PI * 6;
    const radius = 1.2 + Math.sin(t * 0.5) * 0.4;
    return (
      <mesh key={i} position={[Math.cos(t) * radius, (i / 60 - 0.5) * 3, Math.sin(t) * radius]}>
        <boxGeometry args={[0.12, 0.05, 0.12]} />
        <meshStandardMaterial color={i % 4 === 0 ? '#D6FF45' : '#C7CBD1'} metalness={0.8} roughness={0.3} />
      </mesh>
    );
  });

  return <group ref={ref}>{coils}</group>;
}

export default function FooterScene() {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.4} />
      <spotLight position={[4, 6, 4]} angle={0.5} penumbra={1} intensity={1.5} color="#D6FF45" />
      <spotLight position={[-5, 2, -3]} angle={0.6} penumbra={1} intensity={1} color="#FF7043" />
      <Ribbon />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
