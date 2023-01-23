import { useGLTF, PresentationControls } from "@react-three/drei";
import React from "react";
import { useFrame } from "react-three-fiber";
import { useThree } from "@react-three/fiber";
import { useWatchControls } from "../Hooks/useCustomControls";

interface WatchProps {
  X: number;
  Y: number;
  Z: number;
}

export const Watch: React.FC<WatchProps> = (props) => {
  const { width } = useThree((state) => state.viewport);
  const {X, Y, Z} = useWatchControls(props.X, props.Y, props.Z);

  const ref = React.createRef<THREE.Group>();

  const { nodes, materials } = useGLTF("/watch-v1.glb");
  const mesh = nodes.Object006_watch_0 as THREE.Mesh;

  const maxScale = 0.0025;
  const newScale = Math.min(maxScale * (width / 5), maxScale);

  const newX = width < 5.5 ? Math.min(1.1 - 1 / width, X) : X;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current != null) {
      ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
      ref.current.rotation.y = Math.sin(t / 4) / 8;
      ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 400 }}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <group ref={ref} position={[newX, Y, Z]} dispose={null} scale={newScale}>
        <mesh
          castShadow
          receiveShadow
          geometry={mesh.geometry}
          material={materials.watch}
        />
      </group>
    </PresentationControls>
  );
};
