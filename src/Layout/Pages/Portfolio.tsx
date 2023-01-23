import { Canvas } from "@react-three/fiber";
import HomeScene from "../../Components/Custom/Scenes";
import React from "react";
import { PortfolioEnv } from "../../Components/Custom/Environments";
import { useTheme } from "@mui/material/styles";
import Overlay from "../../Components/Custom/Overlays";
import { Loader } from "@react-three/drei";

const Portfolio: React.FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 22 }}
        performance={{ min: 0.1 }}
        gl={{ antialias: false }}
      >
        <color
          attach="background"
          args={[palette.background.default.toString()]}
        />
        <fog
          attach="fog"
          args={[palette.background.paper.toString(), 10, 10]}
        />
        <ambientLight intensity={0.5} />
        <HomeScene />
        <PortfolioEnv />
      </Canvas>
      <Loader />
      <Overlay noTopNav={true} />
    </>
  );
};

export default Portfolio;
