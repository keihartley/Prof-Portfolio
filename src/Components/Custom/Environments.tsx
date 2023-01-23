import React from 'react'
import { Environment, Lightformer } from "@react-three/drei";
import { Euler } from 'three';

interface Props {}

const Env: React.FC<Props> = () => {
  return (
    <Environment preset='dawn' resolution={512}>
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, -9]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, -6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, -3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, 3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, 6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[0, 4, 9]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[-50, 2, 0]}
        scale={[100, 2, 1]}
      />
      <Lightformer
        intensity={2}
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={[50, 2, 0]}
        scale={[100, 2, 1]}
      />
      <Lightformer
        form="ring"
        color="red"
        intensity={10}
        scale={2}
        position={[10, 5, 10]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
  );
}

export default Env;