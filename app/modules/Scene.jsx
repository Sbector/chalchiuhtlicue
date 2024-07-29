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
        noPan
        rotateSpeed={0.1}
      />
    </Canvas>
  );
}
