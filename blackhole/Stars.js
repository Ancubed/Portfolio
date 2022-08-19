import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

import { animated } from '@react-spring/three'

import config from './blackHoleConfig.json'

function StarsWrapper({ rotation }) {
    const ref = useRef()

    useFrame(() => (ref.current.rotation.y += config.starsRotationSpeed))

    return (
        <animated.mesh rotation-x={rotation.x} rotation-y={rotation.y} rotation-z={rotation.z}>
            <Stars 
                ref={ref}
                radius={10} 
                depth={130} 
                count={2500} 
                factor={6} 
                saturation={0}
                fade 
                speed={1} 
            />
        </animated.mesh>
    );
}
  
export default StarsWrapper;