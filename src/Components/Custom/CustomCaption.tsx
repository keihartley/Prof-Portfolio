import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

interface Props {
  children: React.ReactNode;
}

export const Caption: React.FC<Props> = ({ children }) => {
    const { X, Y, Z, lineHeight } = useControls("Text", {
      X: {
        value: 0,
        min: -10,
        max: 10,
        step: 0.5,
      },
      Y: {
        value: 0,
        min: -10,
        max: 10,
        step: 0.5,
      },
      Z: {
        value: 0,
        min: -10,
        max: 10,
        step: 0.5,
      },
      lineHeight: {
        value: 1.25,
        min: 0,
        max: 10,
        step: 0.25,
      },
    });
  
    const { width } = useThree((state) => state.viewport);
  
    return (
      <Text
        lineHeight={lineHeight}
        fontSize={width / 30}
        material-toneMapped={false}
        anchorX="right"
        anchorY="middle"
        position={[X, Y, Z]}
        color="#A5C5E9"
      >
        {children}
      </Text>
    );
  };