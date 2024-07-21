import {
  OrbitControls,
  SoftShadows,
  Sky,
  Environment,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { Suspense, useRef, useEffect, useState } from 'react';
import { useControls, Leva } from 'leva';
import { ComputerRoom } from './ComputerRoom';

const Experience = () => {
  const [showLeva, setShowLeva] = useState(false);
  const directionalLight = useRef();

  // const { nodes } = useGLTF('computerRoom.glb');
  // console.log(nodes);
  // const bakedTexture = useTexture('computerRoomBaked.jpg');
  // bakedTexture.flipY = true;

  const { perfVisible, useEnvironment, useShoftShadows, useSky, showPlane } =
    useControls('_master', {
      perfVisible: true,
      useEnvironment: false,
      useShoftShadows: false,
      useSky: true,
      showPlane: false,
    });

  const shadowControls = useControls('shadows', {
    size: {
      value: 25,
      min: 0,
      max: 50,
      step: 1,
    },
    samples: {
      value: 10,
      min: 1,
      max: 50,
      step: 1,
    },
    focus: {
      value: 0,
      min: 0,
      max: 10,
      step: 1,
    },
  });

  const { sunPosition } = useControls('sun', {
    sunPosition: { value: [-30, 3, 5], step: 1 },
  });

  const { envMapIntensity, background } = useControls('env map', {
    envMapIntensity: {
      value: 1,
      min: 0,
      max: 12,
      step: 1,
    },
    background: false,
  });

  const { ambienLightIntensity } = useControls('ambient light', {
    ambienLightIntensity: 1.5,
  });
  const { directionalLightIntensity } = useControls('directional light', {
    directionalLightIntensity: 3.5,
  });

  const scene = useThree((state) => state.scene);

  useEffect(() => {
    scene.environmentIntensity = envMapIntensity;
    const queryString = window.location.href;
    if (queryString.includes('debug')) {
      setShowLeva(true);
    } else {
      setShowLeva(false);
    }
    console.log(queryString);
  }, [envMapIntensity]);

  return (
    <>
      <color args={['#312f2f']} attach="background" />

      {perfVisible ? <Perf position="bottom-left" /> : null}
      {useEnvironment ? (
        <Environment
          background={background}
          preset="sunset"
          ground={{
            height: 7,
            radius: 28,
            scale: 100,
          }}
        />
      ) : null}
      {useShoftShadows ? (
        <SoftShadows
          size={shadowControls.size}
          samples={shadowControls.samples}
          focus={shadowControls.focus}
        />
      ) : null}

      <OrbitControls makedefault />
      <ambientLight intensity={ambienLightIntensity} />
      <directionalLight
        ref={directionalLight}
        position={sunPosition}
        intensity={directionalLightIntensity}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-normalBias={0.04}
      />
      {useSky ? <Sky sunPosition={sunPosition} /> : null}

      {/* <mesh castShadow position-x={-1} position-y={-0.4}>
        <boxGeometry />
        <meshBasicMaterial color="blue" />
      </mesh> */}
      {/* <mesh geometry={nodes.backWall.geometry}>
        <meshStandardMaterial map={bakedTexture} />
      </mesh> */}
      <ComputerRoom />

      {showPlane ? (
        <mesh
          rotation-x={-Math.PI * 0.5}
          position-y={-1}
          scale={10}
          receiveShadow
        >
          <planeGeometry />
          <meshStandardMaterial color={'#5577ad'} />
        </mesh>
      ) : null}
    </>
  );
};

export default Experience;
