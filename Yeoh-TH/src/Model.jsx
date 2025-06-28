import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model({ url, ...props }) {
    const { nodes, materials } = useGLTF(url)
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0, 6, 0]}
                scale={[0.25, 6, 9.45]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={nodes.Cube003.material}
                position={[1.802, 0.5, 9]}
                scale={[0.2, 0.5, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={nodes.Cube006.material}
                position={[-6.187, 0.5, -9]}
                scale={[0.2, 0.5, 1]}
            />
        </group>
    )
}