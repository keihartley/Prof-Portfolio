import CustomCard from "../../Components/Custom/Cards";
import React, { Suspense } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useThree } from "react-three-fiber";
import { Vector3 } from "three";
import projectData from "../../Data/projectData";
import { HeaderText } from "./Texts";

const HomeScene: React.FC = () => {
  const { projects } = projectData;
  const { height, width } = useThree((state) => state.viewport);
  const w = width * 0.66;
  const h = height / 2;
  const gap = 0.5;
  const xH = h + gap;
  return (
      <ScrollControls
        damping={0.4}
        pages={(height / 3 - xH + projects.length * xH) / height}
      >
        <Scroll>
            <Suspense fallback={null}>
            <group>
              <HeaderText position={[0, 1, 0]} children="Projects" />
              {projects.map((project, index) => (
                <CustomCard
                  key={index}
                  position={
                    new Vector3(0, -(height / 1.33) - (index - 1) * xH, 0)
                  }
                  project={project}
                  w={w}
                  h={h}
                />
              ))}
            </group>
            </Suspense>
        </Scroll>
      </ScrollControls>
  );
};

export default HomeScene;
