import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import useChooseCameraTargetAndElPosition from "../hooks/useChooseCameraTargetAndElPosition";

import BlackHole from "./BlackHole";
import Stars from "./Stars";
import Astronaut from "./Astronaut";

function BlackHoleApp({ pathname, screenSizeWidth }) {
  const [
    cameraTarget,
    blackHolePosition,
    blackHoleRotation,
    starsRotation,
    astronautPosition,
    astronautRotation,
  ] = useChooseCameraTargetAndElPosition(pathname);

  return (
    <div className="w-full h-full">
      <Canvas style={{ background: "black" }} linear camera={{ fov: 40 }}>
        <ambientLight intensity={2} />
        {screenSizeWidth.isMd && (
          <OrbitControls
            makeDefault
            minAzimuthAngle={screenSizeWidth.isLg ? -0.2 : -0.1}
            maxAzimuthAngle={screenSizeWidth.isLg ? 0.15 : 0.1}
            minPolarAngle={1.468}
            maxPolarAngle={1.55}
            maxDistance={6}
            minDistance={4}
            enableZoom={true}
            enablePan={false}
            zoomSpeed={0.2}
            target={cameraTarget}
          />
        )}
        <Stars rotation={starsRotation} />
        {screenSizeWidth.isLg && (
          <Astronaut
            position={astronautPosition}
            rotation={astronautRotation}
            scale={1.5}
          />
        )}
        {(screenSizeWidth.isLg || pathname == "/") && (
          <BlackHole
            position={
              screenSizeWidth.isLg
                ? blackHolePosition
                : { x: 0, y: -0.1, z: -3 }
            }
            rotation={screenSizeWidth.isLg ? blackHoleRotation : [0, 0, 0]}
          />
        )}
      </Canvas>
    </div>
  );
}

export default BlackHoleApp;
