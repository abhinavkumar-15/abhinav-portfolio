"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  scale?: number;
  perspective?: number;
  cursorType?: "pointer" | "view" | "drag";
}

export default function Card3D({
  children,
  className = "",
  maxTilt = 7,
  glareOpacity = 0.15,
  scale = 1.02,
  perspective = 1000,
  cursorType,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse coordinates from -1 to 1
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Specular glare position in percentage (0% to 100%)
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Smooth physics springs
  const springConfig = { damping: 22, stiffness: 260, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // 3D rotations derived from mouse position
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseClientX = e.clientX - rect.left;
    const mouseClientY = e.clientY - rect.top;

    // Normalized from -0.5 to 0.5
    const normX = mouseClientX / rect.width - 0.5;
    const normY = mouseClientY / rect.height - 0.5;

    x.set(normX);
    y.set(normY);

    glareX.set((mouseClientX / rect.width) * 100);
    glareY.set((mouseClientY / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorType}
      className={`relative ${className}`}
      style={{
        perspective: `${perspective}px`,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scale : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Specular 3D Reflection Glare */}
        <motion.div
          animate={{
            opacity: isHovered ? glareOpacity : 0,
          }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden mix-blend-overlay z-30"
          style={{
            background: `radial-gradient(circle 320px at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
