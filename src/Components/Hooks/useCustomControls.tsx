import { useControls } from "leva";


export const useWatchControls = (X: number, Y: number, Z: number) => {
  const controls = useControls("Watch", {
    X: {
      value: X,
      min: -10,
      max: 10,
      step: 0.5,
    },
    Y: {
      value: Y,
      min: -10,
      max: 10,
      step: 0.5,
    },
    Z: {
      value: Z,
      min: -10,
      max: 10,
      step: 0.5,
    },
  });
  
  return controls;
};

export const useHeaderControls = (position: number[]) => {
  const controls = useControls("Header", {
    X: {
      value: position[0],
      min: -10,
      max: 10,
      step: 0.5,
    },
    Y: {
      value: position[1],
      min: -10,
      max: 10,
      step: 0.5,
    },
    Z: {
      value: position[2],
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
  
  return controls;
};
