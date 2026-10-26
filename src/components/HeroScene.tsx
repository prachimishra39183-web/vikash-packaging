
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Environment,
  ContactShadows,
  RoundedBox,
} from '@react-three/drei';
import * as THREE from 'three';

function ProductDisplay() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Elegant, slow movement with subtle mouse response
    group.current.rotation.y +=
      (state.pointer.x * 0.12 - group.current.rotation.y) *
      Math.min(delta * 1.5, 1);

    group.current.rotation.x +=
      (-state.pointer.y * 0.045 - group.current.rotation.x) *
      Math.min(delta * 1.5, 1);
  });

  return (
    <group ref={group}>
      <Float
        speed={0.8}
        rotationIntensity={0.035}
        floatIntensity={0.12}
      >
        {/* Main premium cardboard carton */}
        <RoundedBox
          args={[1.75, 1.9, 1.45]}
          radius={0.055}
          smoothness={4}
          position={[0.65, -0.05, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#B69A76"
            roughness={0.76}
            metalness={0.02}
          />
        </RoundedBox>

        {/* Front face: vertical chartreuse packaging strap */}
        <mesh position={[0.65, -0.05, 0.733]}>
          <boxGeometry args={[0.105, 1.91, 0.018]} />
          <meshStandardMaterial
            color="#D6FF45"
            roughness={0.3}
            metalness={0.22}
          />
        </mesh>

        {/* Second strap */}
        <mesh position={[1.12, -0.05, 0.733]}>
          <boxGeometry args={[0.075, 1.91, 0.018]} />
          <meshStandardMaterial
            color="#29252B"
            roughness={0.32}
            metalness={0.35}
          />
        </mesh>

        {/* Top straps */}
        <mesh
          position={[0.65, 0.91, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <boxGeometry args={[0.105, 1.46, 0.018]} />
          <meshStandardMaterial
            color="#D6FF45"
            roughness={0.3}
            metalness={0.22}
          />
        </mesh>

        {/* Large chartreuse strapping coil */}
        <group position={[-0.95, 0.12, -0.05]} rotation={[0.15, 0.1, 0.12]}>
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.83, 0.19, 24, 120]} />
            <meshStandardMaterial
              color="#D6FF45"
              roughness={0.34}
              metalness={0.12}
            />
          </mesh>

          {/* Inner dark core */}
          <mesh>
            <cylinderGeometry args={[0.53, 0.53, 0.25, 64]} />
            <meshStandardMaterial
              color="#27222D"
              roughness={0.48}
              metalness={0.2}
            />
          </mesh>

          {/* Visible inner opening */}
          <mesh>
            <torusGeometry args={[0.49, 0.035, 16, 80]} />
            <meshStandardMaterial
              color="#E9DDBE"
              roughness={0.35}
              metalness={0.25}
            />
          </mesh>
        </group>

        {/* Silver strapping coil in foreground */}
        <group
          position={[-0.85, -0.82, 0.65]}
          rotation={[0.18, 0.2, 0.25]}
          scale={0.67}
        >
          <mesh castShadow>
            <torusGeometry args={[0.7, 0.16, 24, 100]} />
            <meshStandardMaterial
              color="#D8D8D6"
              roughness={0.3}
              metalness={0.45}
            />
          </mesh>

          <mesh>
            <cylinderGeometry args={[0.42, 0.42, 0.22, 64]} />
            <meshStandardMaterial
              color="#77727C"
              roughness={0.42}
              metalness={0.4}
            />
          </mesh>
        </group>

        {/* Small premium security seal */}
        <group position={[0.72, -0.91, 0.84]} rotation={[0, 0, -0.15]}>
          <RoundedBox
            args={[0.32, 0.13, 0.055]}
            radius={0.025}
            smoothness={3}
            castShadow
          >
            <meshStandardMaterial
              color="#D6FF45"
              roughness={0.32}
              metalness={0.08}
            />
          </RoundedBox>

          <mesh position={[0.22, 0.015, -0.01]} rotation={[0, 0, -0.3]}>
            <boxGeometry args={[0.27, 0.035, 0.025]} />
            <meshStandardMaterial
              color="#C7CBD1"
              roughness={0.4}
              metalness={0.35}
            />
          </mesh>
        </group>

        {/* Fine metallic detail on carton */}
        <mesh position={[0.65, -0.05, 0.742]}>
          <boxGeometry args={[0.48, 0.018, 0.012]} />
          <meshStandardMaterial
            color="#E8DCC5"
            roughness={0.35}
            metalness={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}

function StudioStage() {
  return (
    <>
      <color attach="background" args={['#17121F']} />

      <ambientLight intensity={0.75} />

      {/* Warm key light */}
      <spotLight
        position={[4, 6, 5]}
        angle={0.55}
        penumbra={0.85}
        intensity={95}
        color="#FFF0D7"
        castShadow
      />

      {/* Soft chartreuse rim light */}
      <pointLight
        position={[-4, 2, -2]}
        intensity={16}
        color="#D6FF45"
      />

      {/* Muted coral fill light */}
      <pointLight
        position={[3, -2, 3]}
        intensity={5}
        color="#FF7043"
      />

      <Environment preset="studio" />

      <ProductDisplay />

      <ContactShadows
        position={[0, -1.95, 0]}
        opacity={0.38}
        scale={8}
        blur={2.8}
        far={4}
        color="#08060C"
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.8], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <StudioStage />
    </Canvas>
  );
}
