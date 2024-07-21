import React, { useRef } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function ComputerRoom(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/computerRoom_materials.glb'
  );

  const { actions } = useAnimations(animations, group);

  const bakedTexture = useTexture('computerRoomBaked.jpg');
  bakedTexture.flipY = true;
  console.log(bakedTexture);

  const masterMaterial = new THREE.MeshStandardMaterial();
  masterMaterial.map = bakedTexture;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="printer"
          position={[-2.127, -0.687, 0.255]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="NurbsPath"
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath.geometry}
            material={materials['pla.001']}
            position={[-0.7, 1.106, -0.039]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.277}
          />
          <group
            name="ePlaStart"
            position={[-0.434, 1.309, -0.044]}
            scale={0.089}
          />
          <group
            name="ePlaMid001"
            position={[-0.289, 1.321, -0.025]}
            scale={0.113}
          />
          <group name="Armature" position={[0, 0.005, -0.114]}>
            <primitive object={nodes.root} />
          </group>
        </group>
        <group name="chair">
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.blueChairMat}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.silverLeg}
          />
        </group>
        <mesh
          name="chairWheels"
          castShadow
          receiveShadow
          geometry={nodes.chairWheels.geometry}
          material={materials.silverLeg}
        />
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.purpleCountertop}
        />
        <group name="board" position={[0, 0, -1.273]}>
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.whiteboard}
          />
          <mesh
            name="Cube026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials['purpleCountertop.004']}
          />
          <mesh
            name="Cube026_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Cube026_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_3.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Cube026_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_4.geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          name="boardwheeels"
          castShadow
          receiveShadow
          geometry={nodes.boardwheeels.geometry}
          material={materials.purpleCountertop}
          position={[0, 0, -1.273]}
        />
        <mesh
          name="wallVent"
          castShadow
          receiveShadow
          geometry={nodes.wallVent.geometry}
          material={materials.wallvent}
        />
        <mesh
          name="monitors"
          castShadow
          receiveShadow
          geometry={nodes.monitors.geometry}
          material={materials.screen}
        />
        <group name="keyboard">
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.screen}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials['screen.001']}
          />
        </group>
        <group name="computer">
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials.purpleCountertop}
          />
          <mesh
            name="Cube028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={materials['purpleCountertop.002']}
          />
        </group>
        <group name="desk">
          <mesh
            name="Cylinder022"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials.silverLeg}
          />
          <mesh
            name="Cylinder022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_1.geometry}
            material={materials.desk}
          />
        </group>
        <group name="bin">
          <mesh
            name="Cube038"
            castShadow
            receiveShadow
            geometry={nodes.Cube038.geometry}
            material={materials.purpleCountertop}
          />
          <mesh
            name="Cube038_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube038_1.geometry}
            material={materials['purpleCountertop.003']}
          />
          <mesh
            name="Cube038_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube038_2.geometry}
            material={materials.stripedRamp}
          />
        </group>
        <group name="cabinet">
          <mesh
            name="Cube039"
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials.purpleCountertop}
          />
          <mesh
            name="Cube039_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials['purpleCountertop.003']}
          />
          <mesh
            name="Cube039_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube039_2.geometry}
            material={materials.orangeWall}
          />
        </group>
        <group name="backWall">
          <mesh
            name="Cube040"
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials.wall2}
          />
          <mesh
            name="Cube040_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials.wall2}
          />
        </group>
        <group name="rightWall">
          <mesh
            name="Cube069"
            castShadow
            receiveShadow
            geometry={nodes.Cube069.geometry}
            material={materials.orangeWall}
          />
          <mesh
            name="Cube069_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube069_1.geometry}
            material={materials.purpleCountertop}
          />
        </group>
        <mesh
          name="window"
          castShadow
          receiveShadow
          geometry={nodes.window.geometry}
          material={materials.wall2}
        />
        <mesh
          name="door"
          castShadow
          receiveShadow
          geometry={nodes.door.geometry}
          material={materials.purpleCountertop}
        />
        <mesh
          name="doorPanel"
          castShadow
          receiveShadow
          geometry={nodes.doorPanel.geometry}
          material={materials.purpleCountertop}
          position={[0.255, 0, 0]}
        />
        <mesh
          name="wallVentGrate1"
          castShadow
          receiveShadow
          geometry={nodes.wallVentGrate1.geometry}
          material={materials.vents}
        />
        <mesh
          name="wallVentGrate2"
          castShadow
          receiveShadow
          geometry={nodes.wallVentGrate2.geometry}
          material={materials.darkvent}
        />
        <group name="cabinetVent">
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials['purpleCountertop.001']}
          />
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials['purpleCountertop.002']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/computerRoom_materials.glb');
