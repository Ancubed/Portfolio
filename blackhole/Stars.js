import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

import config from './blackHoleConfig.json'

function StarsWrapper() {
    const ref = useRef()

    useFrame(() => (ref.current.rotation.y += config.starsRotationSpeed))

    return (
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
    );
}
  
export default StarsWrapper;