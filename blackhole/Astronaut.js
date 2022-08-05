import { useRef, Suspense } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

import config from './blackHoleConfig.json'

function Astronaut({ position, rotation, scale }) {
    const gltf = useLoader(GLTFLoader, 'textures/astronaut/scene.gltf')
    let mixer = null
    
    if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    return (
        <Suspense fallback={null} >
            <mesh position={position} rotation={rotation} scale={scale}>
                <primitive object={gltf.scene} />
            </mesh>
        </Suspense>
    );
}
  
export default Astronaut;