import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Torus, MeshDistortMaterial } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import config from './blackHoleConfig.json'

function Light() {
    const ref = useRef()

    const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
        'textures/torus/ReverseStarmap.png',
        'textures/torus/Marble012_1K_NormalGL.jpg',
        'textures/torus/Marble012_1K_Roughness.jpg',
    ])

    useFrame(() => (ref.current.rotation.z -= config.lightsRotationSpeed))

    return (
        <Torus 
            ref={ref} 
            args={[1, 0.22, 20, 150]}
            position={[0, 0, 0]}
            rotation={config.background ? [0, -Math.PI / 7, 0] : [0, 0 ,0]}
        >
            <MeshDistortMaterial 
                distort={0.25} 
                speed={2} 
                map={colorMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap} 
            />
        </Torus>
    )
}

function Sphere() {
    return (
        <mesh>
            <sphereGeometry args={[1, 20, 150]}/>
            <meshBasicMaterial color="black" />
            <Light />
        </mesh>
    );
}
  
export default Sphere;