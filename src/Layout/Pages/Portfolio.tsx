import CustomCard from "../../Components/Custom/Cards";
import { Canvas } from "@react-three/fiber";
import Lights from "../../Components/Custom/Lights";

interface Props {}

const Portfolio: React.FC<Props> = () => {
  return (
    <Canvas>
      <Lights hasStars={false} hasRig={false} />
      <CustomCard colors={["#24242d", "#0a1727", "#272731"]} args={[1, 5]} speed={5} scale={[1, 1, 1]} size={100} />
    </Canvas>
  );
};

export default Portfolio;
