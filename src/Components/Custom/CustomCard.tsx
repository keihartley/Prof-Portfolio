import React, { useRef, useState } from "react";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";
import { MathUtils } from "three";
import { useFrame, useThree } from "react-three-fiber";
import { useControls } from "leva";

interface Props {
  colors: string[];
  args: number[];
  scale: number[];
  speed: number;
  size: number;
}

const CustomCard: React.FC<Props> = ({ colors, args, scale, speed, size }) => {
  const { width } = useThree((state) => state.viewport);
  const cardControl = useControls("Card", {
    args: [width * 0.66, args[1]],
    scale: [scale[0], scale[1], scale[2]],
    speed: speed,
    size: size,
  });

  const ref = useRef<any>(null);
  console.log(ref);
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(() => {
    ref.current.distort = MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.1 : 0,
      hovered ? 0.1 : 0.01
    );
  });

  return (
    <mesh
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={cardControl.scale}
    >
      <planeGeometry args={cardControl.args} />
      <MeshDistortMaterial ref={ref} speed={speed}>
        <GradientTexture
          stops={[0, 0.8, 1]}
          colors={colors}
          size={cardControl.size}
        />
      </MeshDistortMaterial>
    </mesh>
  );
};

export default CustomCard;
