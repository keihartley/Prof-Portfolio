import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Room from "../../Components/Custom/Models/Room";
import { useTheme } from "@mui/material/styles";
import { folder, useControls } from "leva";

const Sandbox: React.FC = () => {
  const { roomRotation } = useControls("Sandbox", {
    Room: folder({
      roomRotation: {
        value: [Math.PI, -Math.PI - Math.PI / 4, Math.PI],
        step: 0.25,
      },
    }),
    Controls: folder({
      controlRotation: {
        value: [0, -Math.PI / 4, 0],
        step: 0.25,
      },
    }),
  });
  const { palette } = useTheme();
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 8] }}>
      <color attach="background" args={[palette.background.paper]} />
      <ambientLight />

      <Bounds fit clip observe margin={1}>
        <Room scale={0.01} rotation={roomRotation} position={[0, -0.75, 0]} />
      </Bounds>

      <OrbitControls
        makeDefault
        minAzimuthAngle={-Math.PI / 3.5}
        maxAzimuthAngle={Math.PI / 3.5}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.5}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />

      <gridHelper
        args={[1000, 200, "#151515", "#020202"]}
        position={[0, -4, 0]}
      />
      <mesh
        scale={200}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4, 0]}
        receiveShadow
      >
        <planeGeometry />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Sandbox;
