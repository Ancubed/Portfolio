import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import BlackHole from './BlackHole';
import Stars from './Stars';
import Astronaut from './Astronaut';

import config from './blackHoleConfig.json'

function BlackHoleApp() {
  return (
    <div className='w-full h-full'>
      <Canvas style={{ background: "black" }} linear camera={{ fov: 40 }}>
            <ambientLight intensity={2} />
            <OrbitControls
                makeDefault
                minAzimuthAngle={-0.6}
                maxAzimuthAngle={0.4}
                minPolarAngle={1.468}
                maxPolarAngle={1.550}
                maxDistance={6}
                minDistance={4}
                enableZoom={true}
                enablePan={false}
                zoomSpeed={0.2}
                target={config.background ? [0, 100, -1] : [0, 0 ,0]}
            />
            <Stars />
            {/* <Astronaut position={config.background ? [-2.5, 96, 0] : [0, 0 ,0]} rotation={[0, 0 ,0]} scale={1.3}/> */}
            <BlackHole position={config.background ? [2.5, 100, 0] : [0, 0 ,0]} />
        </Canvas>
    </div>
  );
}

export default BlackHoleApp;
