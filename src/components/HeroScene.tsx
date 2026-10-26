import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function StrapRing({ radius, tube, color, position, speed }: {
  radius: number; tube: number; color: string; position: [number, number, number]; speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.y = t * 0.4;
  });
  return (
    <mesh ref={ref} position={position} castShadow>
      <torusGeometry args={[radius, tube, 24, 120]} />
      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.25}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function Parcel({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });
  return (
    <group position={position}>
      <mesh ref={ref} castShadow receiveShadow>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial color="#C9A86A" metalness={0.1} roughness={0.7} />
      </mesh>
      {/* strap lines */}
      <mesh position={[0, 1.61, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.82, 0.04, 16, 80]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.81]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.82, 0.04, 16, 80]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const mx = state.pointer.x * 0.2;
    const my = state.pointer.y * 0.2;
    group.current.rotation.y += (mx - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-my - group.current.rotation.x) * 0.05;
  });

  const rings = useMemo(
    () => [
      { radius: 2.2, tube: 0.06, color: '#D6FF45', position: [0, 0, 0] as [number, number, number], speed: 0.25 },
      { radius: 2.6, tube: 0.05, color: '#C7CBD1', position: [0, 0.2, 0] as [number, number, number], speed: -0.18 },
      { radius: 1.8, tube: 0.07, color: '#FF7043', position: [0, -0.2, 0] as [number, number, number], speed: 0.35 },
      { radius: 3.0, tube: 0.03, color: '#9CA0A8', position: [0.1, 0.1, 0.1] as [number, number, number], speed: -0.12 },
    ],
    []
  );

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <Parcel position={[0, 0, 0]} />
        {rings.map((r, i) => (
          <StrapRing key={i} {...r} />
        ))}
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 8, 5]} angle={0.4} penumbra={1} intensity={2.5} castShadow color="#D6FF45" />
      <spotLight position={[-6, 4, -3]} angle={0.5} penumbra={1} intensity={1.5} color="#FF7043" />
      <directionalLight position={[0, -5, 5]} intensity={0.5} color="#C7CBD1" />
      <Scene />
      <ContactShadows position={[0, -2.2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#17121F" />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
