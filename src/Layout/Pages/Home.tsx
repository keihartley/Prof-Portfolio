import { Canvas } from "react-three-fiber";
import Env from "../../Components/Custom/Environments";
import Lights from "../../Components/Custom/Lights";
import { Suspense } from "react";
import { Caption } from "../../Components/Custom/Texts";
import { Watch } from "../../Components/Custom/Models";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 22 }}
      performance={{ min: 0.1 }}
      gl={{ antialias: false }}
    >
      <Lights hasStars={true} hasRig={true} />
      <Suspense fallback={null}>
        <Watch X={1} Y={0} Z={0} />
        <Caption>{`CLIFFORD HARTLEY\nFULL STACK DEVELOPER`}</Caption>
      </Suspense>
      <Env />
    </Canvas>
  );
};

export default Home;
