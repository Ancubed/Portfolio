import { useSpring, easings } from 'react-spring'

export default function useChooseCameraTargetAndElPosition(pathname : string) {
    let blackHolePositionTo, blackHolePositionFrom, starsRotationTo, starsRotationFrom, astronautPositionTo, astronautPositionFrom

    switch(pathname) {
      case '/about': 
        blackHolePositionFrom = { x: 0, y: 0, z: 0 }
        blackHolePositionTo = { x: 10, y: 0, z: 10 }

        starsRotationFrom= { x: 0, y: 0, z: 0 }
        starsRotationTo = { x: 0, y: 3.14, z: 0 }

        astronautPositionFrom= { x: -10, y: -5.2, z: 0 }
        astronautPositionTo = { x: -1.6, y: -5.2, z: 1 }
        break
      case '/portfolio': 
        blackHolePositionFrom = { x: 0, y: 0, z: 0 }
        blackHolePositionTo = { x: 2.5, y: -0.1, z: -5 }

        starsRotationFrom= { x: 0, y: 0.8, z: 0 }
        starsRotationTo = { x: 0, y: 0.9, z: 0 }

        astronautPositionFrom= { x: -10, y: -5.2, z: 0 }
        astronautPositionTo = { x: -10, y: -5.2, z: 0 }
        break
      default:
        blackHolePositionFrom = { x: 5, y: 0, z: 0 }
        blackHolePositionTo = { x: 2.7, y: 0, z: -0.2 }

        starsRotationFrom= { x: 0, y: 1, z: 0 }
        starsRotationTo = { x: 0, y: 0.8, z: 0 }

        astronautPositionFrom= { x: -10, y: -5.2, z: 0 }
        astronautPositionTo = { x: -10, y: -5.2, z: 0 }
        break
    }
  
    const blackHolePosition = useSpring({
      to: blackHolePositionTo,
      from: blackHolePositionFrom,
      config: { mass: 5, duration: 2000, tension: 100, easing: easings.easeOutQuint, friction: 100, precision: 0.00001 }
    })

    const starsRotation = useSpring({
      to: starsRotationTo,
      from:  starsRotationFrom,
      config: { mass: 1, duration: 2200, tension: 100, easing: easings.easeOutQuint, friction: 100, precision: 0.001 }
    })

    const astronautPosition = useSpring({
      to: astronautPositionTo,
      from:  astronautPositionFrom,
      config: { mass: 1, duration: 5200, tension: 100, easing: easings.easeOutQuint, friction: 100, precision: 0.001 }
    })
  
    return [[0, 0, 0], blackHolePosition, [0.02, -0.3, 0], starsRotation, astronautPosition, [0, 0.3, 0]]
  }