"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { sound } from "@/lib/audio";

// Procedural 3D Kalash Vessel with Liquid Core, Bubbles, and Orbiting Droplets
export function KalashHeroArtifact() {
  const groupRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);
  const bubblesRef = useRef<THREE.InstancedMesh>(null);

  // 1. Vessel Profile (Lathe Geometry points forming the sacred Kalash shape)
  const { outerGeometry, innerLiquidGeometry } = useMemo(() => {
    // Outer glass profile
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0.0, -1.8)); // center bottom
    points.push(new THREE.Vector2(0.9, -1.8)); // base ring
    points.push(new THREE.Vector2(1.2, -1.5));
    points.push(new THREE.Vector2(1.8, -0.6)); // wide bulbous belly
    points.push(new THREE.Vector2(1.9, 0.2));  // mid belly
    points.push(new THREE.Vector2(1.5, 0.9));  // tapering upper body
    points.push(new THREE.Vector2(0.95, 1.4)); // narrow waist
    points.push(new THREE.Vector2(1.15, 1.8)); // flare out
    points.push(new THREE.Vector2(1.45, 2.1)); // flaring lip
    points.push(new THREE.Vector2(1.35, 2.15)); // top rim curve
    points.push(new THREE.Vector2(1.15, 2.0)); // inner neck
    points.push(new THREE.Vector2(0.85, 1.35));
    points.push(new THREE.Vector2(0.85, 0.8));

    const outerGeo = new THREE.LatheGeometry(points, 64);
    outerGeo.computeVertexNormals();

    // Inner liquid profile
    const liquidPoints: THREE.Vector2[] = [];
    liquidPoints.push(new THREE.Vector2(0.0, -1.7));
    liquidPoints.push(new THREE.Vector2(0.8, -1.7));
    liquidPoints.push(new THREE.Vector2(1.1, -1.4));
    liquidPoints.push(new THREE.Vector2(1.68, -0.6));
    liquidPoints.push(new THREE.Vector2(1.78, 0.2));
    liquidPoints.push(new THREE.Vector2(1.38, 0.9));
    liquidPoints.push(new THREE.Vector2(0.85, 1.3));
    liquidPoints.push(new THREE.Vector2(0.0, 1.3)); // liquid surface meniscus

    const liquidGeo = new THREE.LatheGeometry(liquidPoints, 48);
    liquidGeo.computeVertexNormals();

    return { outerGeometry: outerGeo, innerLiquidGeometry: liquidGeo };
  }, []);

  // 2. Rising Bubbles Inside the Vessel
  const bubbleCount = 28;
  const bubbleData = useMemo(() => {
    return Array.from({ length: bubbleCount }, () => ({
      x: (Math.random() - 0.5) * 1.8,
      y: -1.6 + Math.random() * 2.8,
      z: (Math.random() - 0.5) * 1.8,
      speed: 0.8 + Math.random() * 1.2,
      size: 0.03 + Math.random() * 0.06,
      wobbleSpeed: 2 + Math.random() * 3,
    }));
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // 3. Orbiting Floating Droplets
  const droplets = useMemo(() => {
    return [
      { r: 2.8, speed: 0.6, yOffset: 0.8, size: 0.28, phase: 0 },
      { r: 3.2, speed: -0.45, yOffset: -0.5, size: 0.22, phase: 1.5 },
      { r: 2.5, speed: 0.8, yOffset: -1.2, size: 0.18, phase: 3.0 },
      { r: 3.6, speed: -0.55, yOffset: 1.4, size: 0.25, phase: 4.2 },
      { r: 2.9, speed: 0.7, yOffset: 0.2, size: 0.2, phase: 2.1 },
      { r: 3.4, speed: -0.6, yOffset: -1.0, size: 0.16, phase: 5.0 },
    ];
  }, []);

  const dropletRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Animation Loop: 60fps dynamic liquid motion, bubbles rising, interactive mouse follow
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth interactive rotation influenced by pointer
      const targetRotY = Math.sin(t * 0.4) * 0.35 + state.pointer.x * 0.8;
      const targetRotX = Math.cos(t * 0.3) * 0.1 - state.pointer.y * 0.4;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.12 - 0.1;
    }

    // Liquid breathing pulse
    if (liquidRef.current) {
      const liquidScale = 1 + Math.sin(t * 2.5) * 0.015;
      liquidRef.current.scale.set(liquidScale, 1 + Math.cos(t * 2) * 0.01, liquidScale);
    }

    // Update rising bubbles inside liquid
    if (bubblesRef.current) {
      bubbleData.forEach((b, i) => {
        b.y += b.speed * 0.015;
        if (b.y > 1.25) {
          b.y = -1.6;
          b.x = (Math.random() - 0.5) * 1.4;
          b.z = (Math.random() - 0.5) * 1.4;
        }
        dummy.position.set(
          b.x + Math.sin(t * b.wobbleSpeed) * 0.05,
          b.y,
          b.z + Math.cos(t * b.wobbleSpeed) * 0.05
        );
        dummy.scale.setScalar(b.size * (1 + Math.sin(t * 4 + i) * 0.15));
        dummy.updateMatrix();
        bubblesRef.current?.setMatrixAt(i, dummy.matrix);
      });
      bubblesRef.current.instanceMatrix.needsUpdate = true;
    }

    // Update orbiting crystal droplets
    dropletRefs.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const d = droplets[idx];
      const angle = t * d.speed + d.phase;
      const x = Math.cos(angle) * d.r;
      const z = Math.sin(angle) * d.r;
      const y = d.yOffset + Math.sin(t * 2 + idx) * 0.25;
      mesh.position.set(x, y, z);
    });
  });

  const handlePointerDown = () => {
    sound.playDrop();
  };

  return (
    <group ref={groupRef} onPointerDown={handlePointerDown}>
      {/* 1. Outer Translucent Crystal Vessel */}
      <mesh geometry={outerGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          roughness={0.02}
          transmission={0.96}
          thickness={2.2}
          ior={1.48}
          color="#EAF4FC"
          attenuationColor="#073B78"
          attenuationDistance={1.8}
          reflectivity={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.04}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* 2. Inner Swirling Pure Liquid */}
      <mesh ref={liquidRef} geometry={innerLiquidGeometry}>
        <meshPhysicalMaterial
          roughness={0.08}
          transmission={0.88}
          thickness={1.5}
          ior={1.333} // Water IOR
          color="#156CD4"
          attenuationColor="#042347"
          attenuationDistance={1.2}
          reflectivity={0.9}
          emissive="#0A4D9B"
          emissiveIntensity={0.25}
          transparent
        />
      </mesh>

      {/* 3. Rising Mineral Carbonation Bubbles */}
      <instancedMesh
        ref={bubblesRef}
        args={[undefined, undefined, bubbleCount]}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#39A96B"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.85}
        />
      </instancedMesh>

      {/* 4. Glowing Sacred Core Light (The Living Energy of Kalash) */}
      <pointLight position={[0, -0.2, 0]} intensity={2.8} distance={5} color="#39A96B" />
      <pointLight position={[0, 0.8, 0]} intensity={3.5} distance={6} color="#156CD4" />

      {/* 5. Orbiting Refractive Water Droplets */}
      {droplets.map((d, i) => (
        <mesh
          key={i}
          ref={(el) => {
            dropletRefs.current[i] = el;
          }}
          castShadow
        >
          <sphereGeometry args={[d.size, 32, 32]} />
          <meshPhysicalMaterial
            roughness={0.03}
            transmission={0.98}
            thickness={1.4}
            ior={1.333}
            color="#EBF3FA"
            attenuationColor="#073B78"
            attenuationDistance={1.0}
            clearcoat={1}
            reflectivity={0.9}
          />
        </mesh>
      ))}

      {/* 6. Ground Caustic Rings */}
      <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.0, 3.2, 64]} />
        <meshBasicMaterial
          color="#156CD4"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={[0, -2.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 2.2, 48]} />
        <meshBasicMaterial
          color="#39A96B"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 7. Luminous Water Sparkles */}
      <Sparkles
        count={60}
        scale={6}
        size={2.5}
        speed={0.6}
        color="#39A96B"
        opacity={0.7}
      />
      <Sparkles
        count={80}
        scale={7}
        size={3}
        speed={0.8}
        color="#FFFFFF"
        opacity={0.8}
      />
    </group>
  );
}

export function ProceduralWaterDrop() {
  return <KalashHeroArtifact />;
}

export function WaterProductModel() {
  return <KalashHeroArtifact />;
}
