import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber"

export default function Model() {
  
  const url = "./models/chalchiuhtlicue.glb";
  const gltf = useGLTF(url);
  console.log(gltf);

  return (
    <Suspense>
      <primitive
        
        object={gltf.scene}
        position={[0, -11, 0]}
        scale={[1, 1, 1]}
      />
    </Suspense>
  );
}
