import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import useChooseCameraTargetAndElPosition from '../hooks/useChooseCameraTargetAndElPosition'
import useIsLg from '../hooks/useIsLg'

import BlackHole from './BlackHole';
import Stars from './Stars';
import Astronaut from './Astronaut';

function BlackHoleApp() {
  const [cameraTarget, blackHolePosition, blackHoleRotation, starsRotation, astronautPosition, astronautRotation] = useChooseCameraTargetAndElPosition();
  const isLg = useIsLg();

  return (
    <div className='w-full h-full'>
      <Canvas style={{ background: "black" }} linear camera={{ fov: 40 }}>
        <ambientLight intensity={2} />
        <OrbitControls
          makeDefault
          minAzimuthAngle={isLg ? -0.2 : -0.1}
          maxAzimuthAngle={isLg ? 0.15 : 0.1}
          minPolarAngle={1.468}
          maxPolarAngle={1.550}
          maxDistance={6}
          minDistance={4}
          enableZoom={true}
          enablePan={false}
          zoomSpeed={0.2}
          target={cameraTarget}
        />
        <Stars rotation={starsRotation} />
        {isLg && <Astronaut position={astronautPosition} rotation={astronautRotation} scale={1.5} />}
        <BlackHole position={isLg 
        ? blackHolePosition 
        : { x: 0, y: -0.1, z: -3 }} 
        rotation={isLg 
        ? blackHoleRotation 
        : [0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default BlackHoleApp;
