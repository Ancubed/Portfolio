import { animated } from "@react-spring/three";

import Circles from "./Circles";
import Sphere from "./Sphere";

function BlackHole({ position, rotation, scale }) {
  return (
    <animated.mesh
      position-x={position.x}
      position-y={position.y}
      position-z={position.z}
      rotation={rotation}
      scale={scale}
    >
      <Sphere />
      <Circles />
    </animated.mesh>
  );
}

export default BlackHole;
