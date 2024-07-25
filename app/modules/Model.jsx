import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber"

export default function Model() {
  const ref = useRef();
  useFrame((_,delta)=> {
    ref.current.rotation.x += 0.015* delta
    ref.current.rotation.y += 0.015* delta
  })
  const url = "./models/chalchiuhtlicueWeb.glb";
  const gltf = useGLTF(url);
  console.log(gltf);

  return (
    <Suspense>
      <primitive
        ref = {ref}
        object={gltf.scene}
        position={[0, -8, 0]}
        scale={[1, 1, 1]}
      />
    </Suspense>
  );
}
