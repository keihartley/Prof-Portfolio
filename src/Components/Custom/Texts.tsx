import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useHeaderControls } from "../Hooks/useCustomControls";
import { useTheme } from '@mui/material/styles';

interface Props {
  children: React.ReactNode;
  position: number[];
}

export const HeaderText: React.FC<Props> = ({ children, position }) => {
  const {palette} = useTheme();
    const {lineHeight, X, Y, Z} = useHeaderControls(position);
    const { width } = useThree((state) => state.viewport);
  
    return (
      <Text
        lineHeight={lineHeight}
        fontSize={width / 30}
        material-toneMapped={false}
        position={[X, Y, Z]}
        color={palette.text.primary.toString()}
      >
        {children}
      </Text>
    );
  };