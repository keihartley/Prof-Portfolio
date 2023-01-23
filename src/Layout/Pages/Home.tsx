import { Canvas } from "react-three-fiber";
import Lights from "../../Components/Custom/Lights";
import { Suspense } from "react";
import { Watch } from "../../Components/Custom/Models";
import { HomeEnv } from "../../Components/Custom/Environments";
import Overlay from "../../Components/Custom/Overlays";
import { Loader } from "@react-three/drei";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 22 }}
        performance={{ min: 0.1 }}
        gl={{ antialias: false }}
      >
        <Lights hasStars={true} hasRig={true} hasSpotlight={true} />
        <Suspense fallback={null}>
          <Watch X={0} Y={0} Z={0} />
        </Suspense>
        <HomeEnv />
      </Canvas>
      <Loader />
      <Overlay />
    </>
  );
};

export default Home;
