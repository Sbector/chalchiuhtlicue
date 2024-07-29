'use client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 50] }}
      gl={{ toneMapping: ACESFilmicToneMapping, toneMappingExposure: 2.5 }}
    >
      <ambientLight intensity={1} />
      <Model />
      <OrbitControls
        target={[0, 0, 0]}
        minDistance={30}
        maxDistance={80}
        enablePan={false}
        minPolarAngle={1.5}
        maxPolarAngle={1.8}
        maxAzimuthAngle={Math.PI/4}
        minAzimuthAngle={Math.PI/4*-1}
        rotateSpeed={0.15}
      />
    </Canvas>
  );
}
