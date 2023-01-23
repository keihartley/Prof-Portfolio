import { Html } from "@react-three/drei";

type ProgressProps = {
  active: boolean;
  errors: string[];
  item: string;
  loaded: number;
  progress: number;
  total: number;
};

const ProgressLoader: React.FC<ProgressProps> = (props: ProgressProps) => {
    return (
        <Html center>
            {props.progress} % loaded
        </Html>
    );
};

export default ProgressLoader;
