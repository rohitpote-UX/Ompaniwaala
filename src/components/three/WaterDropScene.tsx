"use client";

import React, { useRef, useEffect } from "react";

export default function WaterDropScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Ripple state
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }

    const ripples: Ripple[] = [];
    let lastDropTime = 0;

    function addDrop(x: number, y: number) {
      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: Math.min(width, height) * 0.45,
        alpha: 0.7,
        speed: 1.8,
      });
    }

    // Interactive pointer ripple
    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (Math.random() > 0.7) {
        addDrop(x, y);
      }
    };

    canvas.addEventListener("mousemove", handlePointerMove);

    function render(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Periodic automatic center drop if idle
      if (time - lastDropTime > 2400) {
        addDrop(width / 2 + (Math.random() - 0.5) * 80, height / 2 + (Math.random() - 0.5) * 60);
        lastDropTime = time;
      }

      // Draw caustics and ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.007;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(7, 59, 120, ${r.alpha * 0.6})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Secondary subtle green nature wave
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius - 12), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(57, 169, 107, ${r.alpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // Central water droplet glowing origin
      const pulse = Math.sin(time * 0.003) * 4;
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        45 + pulse
      );
      gradient.addColorStop(0, "rgba(7, 59, 120, 0.2)");
      gradient.addColorStop(0.5, "rgba(57, 169, 107, 0.12)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 60, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-3xl bg-ocean-tint/60 border border-ocean-light">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      <div className="relative z-10 pointer-events-none text-center px-6">
        <span className="inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[11px] font-semibold tracking-widest uppercase text-ocean mb-3 shadow-sm">
          Interactive Water Physics
        </span>
        <p className="text-xs text-slate-500">
          Move your cursor across the surface to initiate water wave dispersion
        </p>
      </div>
    </div>
  );
}

