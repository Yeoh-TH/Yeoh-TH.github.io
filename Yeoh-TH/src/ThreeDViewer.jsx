
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model' // Adjust the path if needed

export default function ThreeDView() {
    return (
        <Canvas camera={{ position: [10, 10, 20], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Model />
            <OrbitControls />
        </Canvas>
    )
}