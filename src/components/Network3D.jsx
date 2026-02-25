import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, RoundedBox } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function GlassCube({ position, scale = [1.6, 1.6, 1.6], color }) {
  return (
    <RoundedBox args={scale} radius={0.15} position={position}>
      <meshPhysicalMaterial
        color={color}
        roughness={0.15}
        transmission={1}
        thickness={2}
        transparent
        opacity={0.9}
        metalness={0.1}
      />
    </RoundedBox>
  )
}

function Rod({ start, end }) {
  const mid = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ]

  const length = new THREE.Vector3(...end)
    .sub(new THREE.Vector3(...start))
    .length()

  return (
    <mesh position={mid}>
      <cylinderGeometry args={[0.07, 0.07, length, 16]} />
      <meshStandardMaterial color="#d9d9d9" metalness={1} roughness={0.3} />
    </mesh>
  )
}

function Joint({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color="#d9d9d9" metalness={1} roughness={0.3} />
    </mesh>
  )
}

function Structure() {
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y += 0.002
  })

  // Colors from your image
  const blue = "#9fb3c1"
  const darkBlue = "#6f8fa3"
  const white = "#e9e6df"

  return (
    <group ref={group}>

      {/* TOP ROW */}
      <GlassCube position={[-4, 2, 0]} color={blue} />
      <GlassCube position={[-1.5, 2.8, 0]} scale={[1.6, 3, 1.6]} color={darkBlue} />
      <GlassCube position={[1.5, 2, 0]} color={white} />
      <GlassCube position={[4, 2, 0]} color={blue} />

      {/* BOTTOM ROW */}
      <GlassCube position={[-4, -2, 0]} color={blue} />
      <GlassCube position={[-1.5, -2.8, 0]} scale={[1.6, 3, 1.6]} color={white} />
      <GlassCube position={[1.5, -2, 0]} color={blue} />

      {/* RODS */}
      <Rod start={[-4, 2, 0]} end={[-1.5, 2.8, 0]} />
      <Rod start={[-1.5, 2.8, 0]} end={[1.5, 2, 0]} />
      <Rod start={[1.5, 2, 0]} end={[4, 2, 0]} />

      <Rod start={[-4, -2, 0]} end={[-1.5, -2.8, 0]} />
      <Rod start={[-1.5, -2.8, 0]} end={[1.5, -2, 0]} />

      <Rod start={[-4, 2, 0]} end={[-4, -2, 0]} />
      <Rod start={[4, 2, 0]} end={[1.5, -2, 0]} />

      {/* JOINTS */}
      <Joint position={[-4, 2, 0]} />
      <Joint position={[-1.5, 2.8, 0]} />
      <Joint position={[1.5, 2, 0]} />
      <Joint position={[4, 2, 0]} />
      <Joint position={[-4, -2, 0]} />
      <Joint position={[-1.5, -2.8, 0]} />
      <Joint position={[1.5, -2, 0]} />

    </group>
  )
}

export default function Network3D() {
  return (
    <div className="w-full h-[520px]">
      <Canvas camera={{ position: [10, 6, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 8, 5]} intensity={1.2} />
        <pointLight position={[-6, -6, -6]} intensity={0.5} />

        <Structure />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}