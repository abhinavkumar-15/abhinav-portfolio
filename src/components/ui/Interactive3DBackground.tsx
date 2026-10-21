"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  colorType: number;
}

export default function Interactive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for 3D perspective rotation
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize -1 to 1
      const nx = (e.clientX / width) * 2 - 1;
      const ny = (e.clientY / height) * 2 - 1;
      targetRotY = nx * 0.22; // Horizontal tilt
      targetRotX = -ny * 0.16; // Vertical tilt
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Generate 3D point cloud (representing high-dimensional latent space / bioinformatics network)
    const POINT_COUNT = 48;
    const BOUNDS = 550;
    const points: Point3D[] = [];

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: (Math.random() - 0.5) * BOUNDS * 2,
        y: (Math.random() - 0.5) * BOUNDS * 1.6,
        z: (Math.random() - 0.5) * BOUNDS * 1.8,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1.2,
        colorType: Math.random() > 0.4 ? 1 : 2,
      });
    }

    const fov = 420;
    const cameraZ = 750;

    const render = () => {
      // Damped rotation interpolation
      currentRotY += (targetRotY - currentRotY) * 0.04;
      currentRotX += (targetRotX - currentRotX) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      const projectedPoints: { x: number; y: number; z: number; scale: number; alpha: number; p: Point3D }[] = [];

      // Update positions and project to 2D
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap boundaries
        if (p.x < -BOUNDS) p.x = BOUNDS;
        if (p.x > BOUNDS) p.x = -BOUNDS;
        if (p.y < -BOUNDS) p.y = BOUNDS;
        if (p.y > BOUNDS) p.y = -BOUNDS;
        if (p.z < -BOUNDS) p.z = BOUNDS;
        if (p.z > BOUNDS) p.z = -BOUNDS;

        // 3D rotation around Y and X axis
        // 1. Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // 2. Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Camera perspective projection
        const depth = cameraZ + z2;
        if (depth > 20) {
          const scale = fov / depth;
          const projX = width / 2 + x1 * scale;
          const projY = height / 2 + y2 * scale;

          // Depth-based opacity fading
          const alpha = Math.max(0.08, Math.min(0.65, (depth - 150) / 750));

          projectedPoints.push({
            x: projX,
            y: projY,
            z: z2,
            scale,
            alpha,
            p,
          });
        }
      }

      const isLight = theme === "light";

      // Connect near points with 3D lines
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];

          const dx = p1.p.x - p2.p.x;
          const dy = p1.p.y - p2.p.y;
          const dz = p1.p.z - p2.p.z;
          const dist3d = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3d < 220) {
            const lineAlpha = (1 - dist3d / 220) * 0.16 * ((p1.alpha + p2.alpha) / 2);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = Math.min(p1.scale, p2.scale) * 0.9;
            ctx.strokeStyle = isLight
              ? `rgba(15, 118, 110, ${lineAlpha * 1.2})`
              : `rgba(45, 212, 191, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw projected nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        const radius = Math.max(0.6, pt.p.size * pt.scale);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);

        if (isLight) {
          ctx.fillStyle =
            pt.p.colorType === 1
              ? `rgba(15, 118, 110, ${pt.alpha * 0.8})`
              : `rgba(71, 85, 105, ${pt.alpha * 0.7})`;
        } else {
          ctx.fillStyle =
            pt.p.colorType === 1
              ? `rgba(45, 212, 191, ${pt.alpha * 0.85})`
              : `rgba(244, 244, 245, ${pt.alpha * 0.55})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-65 transition-opacity duration-700"
    />
  );
}
