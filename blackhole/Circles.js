import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Torus, MeshDistortMaterial } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import config from './blackHoleConfig.json'

function Circles() {
    const ref = useRef()

    const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
        'textures/torus/Starmap.png',
        'textures/torus/Marble012_1K_NormalGL.jpg',
        'textures/torus/Marble012_1K_Roughness.jpg',
    ])

    useFrame(() => (ref.current.rotation.z += config.circlesRotationSpeed))

    return (
        <Torus 
            ref={ref} 
            args={[1, 2, 2, 5000]}
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, -Math.PI / 18, 0]}
        >
            <MeshDistortMaterial 
                distort={0.2} 
                speed={2} 
                map={colorMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap} 
            />
        </Torus>
    );
}
  
export default Circles;