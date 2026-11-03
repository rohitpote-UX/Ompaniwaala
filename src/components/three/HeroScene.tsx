"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { KalashHeroArtifact } from "./WaterProduct";
import Image from "next/image";

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
      <div className="relative w-16 h-16">
        <div className="w-16 h-16 rounded-full border-2 border-ocean-bright/20 border-t-ocean-bright animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-nature/20 border-t-nature animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.2s" }} />
      </div>
      <span className="mt-4 text-xs tracking-[0.25em] uppercase text-ocean font-semibold">
        Materializing Water Artifact...
      </span>
    </div>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 md:w-80 h-80 md:h-96 animate-float-gentle">
          <Image
            src="/brand/kalash-emblem.png"
            alt="KALASH Pure Water Emblem"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[460px] md:min-h-[600px] lg:min-h-[680px]">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          shadows
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: true,
          }}
          className="w-full h-full pointer-events-auto"
        >
          <PerspectiveCamera makeDefault position={[0, 0.4, 7.2]} fov={38} />

          {/* Cinematic Studio Lighting Rig */}
          <ambientLight intensity={1.1} />
          
          {/* Top Key Volumetric Spotlight */}
          <spotLight
            position={[0, 8, 4]}
            angle={0.45}
            penumbra={0.8}
            intensity={3.2}
            color="#FFFFFF"
            castShadow
          />

          {/* Living Green Emerald Rim Light */}
          <directionalLight
            position={[-5, 3, -2]}
            intensity={2.2}
            color="#39A96B"
          />

          {/* Deep Ocean Blue Backlight */}
          <directionalLight
            position={[5, 2, -3]}
            intensity={2.8}
            color="#156CD4"
          />

          {/* Core Artifact Model */}
          <KalashHeroArtifact />

          {/* Soft Ground Contact Shadow */}
          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.65}
            scale={10}
            blur={2.8}
            far={4.5}
          />

          {/* Subtle Interactive Orbit Controls with damping */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.15}
            minPolarAngle={Math.PI / 3}
            rotateSpeed={0.6}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
