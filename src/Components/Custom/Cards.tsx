import React, { useRef, useState } from "react";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";
import { MathUtils } from "three";
import { useFrame, Vector3 } from "react-three-fiber";
import { Vector2 } from "three/src/Three";
import { folder, useControls } from "leva";
import { useTheme } from '@mui/material/styles';

interface Props {
  position: Vector3;
  w?: number;
  h?: number;
  project?: {name: string};
}

const CustomCard: React.FC<Props> = ({position, w, h}) => {
  const {palette} = useTheme();
  const ref = useRef<any>(null);
  const [hovered, hover] = useState(false);

  const {
    speed,
    rotation,
    stops,
    colorOne,
    size,
    center,
    colorTwo
  } = useControls("Card", {
    scale: {
      value: {
        x: 1,
        y: 1,
        z: 1,
      },
      step: 0.1,
    },
    stops: [0.33, 0.66],
    speed: 5,
    size: 100,
    Colors: folder({
      colorOne: palette.background.paper.toString(),
      colorTwo: "#49494D",
      rotation: 90,
    }),
    center: {
      value: {
        x: 0.5,
        y: 0.5
      },
      step: 0.1,
    }
  });

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
      position={position}
    >
      <planeGeometry args={[w, h]} />
      <MeshDistortMaterial ref={ref} speed={speed}>
        <GradientTexture
          rotation={rotation}
          center={new Vector2(center.x, center.y)}
          stops={stops}
          colors={[colorOne, colorTwo]}
          size={size}
        />
      </MeshDistortMaterial>
    </mesh>
  );
};

export default CustomCard;
