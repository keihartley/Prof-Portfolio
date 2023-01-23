import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import { Vector3, Euler } from "three";

interface RigProps {
  v?: THREE.Vector3;
}

const Rig: React.FC<RigProps> = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 4, state.mouse.y / 4, 10),
      0.025
    );
  });
};

interface Props {
  sphere: Vector3[];
}

const Stars: React.FC<Props> = ({ sphere }) => {
  const ref = useRef<any>(null);
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));
  useFrame((state, delta) => {
    setRotation((prev) => {
      prev.x += delta / 10;
      prev.y += delta / 15;
      return prev;
    });
  });
  const positions = new Float32Array(sphere.length * 3);
  for (let i = 0; i < sphere.length; i++) {
    const offset = i * 3;
    positions[offset] = sphere[i].x;
    positions[offset + 1] = sphere[i].y;
    positions[offset + 2] = sphere[i].z;
  }

  return (
    <group rotation={rotation}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

interface LightProps {
  hasStars: boolean;
  hasRig: boolean;
}

const Lights: React.FC<LightProps> = ({ hasStars = false, hasRig = false }) => {
  const [sphere] = useState(() => {
    const positions = new Float32Array(10_000 * 3);
    inSphere(positions, { radius: 8 });
    const sphere = new Array(10_000);
    for (let i = 0; i < sphere.length; i++) {
      const offset = i * 3;
      sphere[i] = new Vector3(
        positions[offset],
        positions[offset + 1],
        positions[offset + 2]
      );
    }
    return sphere;
  });

  return (
    <>
      <color attach="background" args={["#15151a"]} />
      <fog attach="fog" args={[0xfff0ea, 10, 60]} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow={true}
      />
      {hasRig && <Rig v={new Vector3(0, 0, 10)} />}
      {hasStars && <Stars sphere={sphere} />}
    </>
  );
};

export default Lights;
