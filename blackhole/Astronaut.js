import { useRef, Suspense } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import { animated } from "@react-spring/three";

function Astronaut({ position, rotation, scale }) {
  const gltf = useLoader(GLTFLoader, "textures/astronaut/scene.gltf");
  let mixer = null;

  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <animated.mesh
        position-x={position.x}
        position-y={position.y}
        position-z={position.z}
        rotation={rotation}
        scale={scale}
      >
        <primitive object={gltf.scene} />
      </animated.mesh>
    </Suspense>
  );
}

export default Astronaut;
