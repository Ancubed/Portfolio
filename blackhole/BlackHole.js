import Circles from "./Circles"
import Sphere from "./Sphere"

import config from './blackHoleConfig.json'

function BlackHole({ position, rotation, scale }) {
    return (
        <mesh position={position} rotation={rotation} scale={scale}>
            <Sphere />
            <Circles />
        </mesh>
    );
}
  
export default BlackHole;