"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

type RevealVariant =
  | "rise"       // Comes up from below with Y + slight rotateX tilt
  | "tilt-left"  // Tilts in from the left like a page turning
  | "tilt-right" // Tilts in from the right
  | "depth"      // Pure Z-axis depth push-in
  | "float"      // Parallel float with subtle perspective
  | "unfold";    // Unfolds from a folded state (dramatic 3D)

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number; // 0–1, fraction into viewport at which effect starts
}

export default function ScrollReveal3D({
  children,
  className = "",
  variant = "rise",
  delay = 0,
  threshold = 0.05,
}: ScrollReveal3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Snappy reveal: triggers smoothly as top of element approaches 85% of viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.98", "start 0.75"],
  });

  // --- rise ---
  const riseY = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const riseRotX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const riseOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.4, 0.85, 1]);

  // --- tilt-left ---
  const tiltLeftRotY = useTransform(scrollYProgress, [0, 1], [-14, 0]);
  const tiltLeftX = useTransform(scrollYProgress, [0, 1], [-25, 0]);

  // --- tilt-right ---
  const tiltRightRotY = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const tiltRightX = useTransform(scrollYProgress, [0, 1], [25, 0]);

  // --- depth ---
  const depthScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const depthZ = useTransform(scrollYProgress, [0, 1], [-60, 0]);

  // --- float ---
  const floatY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const floatRotX = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // --- unfold ---
  const unfoldRotX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const unfoldOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.85, 1]);

  const sharedOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.4, 0.85, 1]);

  const getStyle = () => {
    const base: Record<string, MotionValue<number> | number | string> = {
      transformPerspective: 900,
      transformStyle: "preserve-3d" as const,
      willChange: "transform, opacity",
    };

    switch (variant) {
      case "rise":
        return { ...base, y: riseY, rotateX: riseRotX, opacity: riseOpacity };
      case "tilt-left":
        return { ...base, x: tiltLeftX, rotateY: tiltLeftRotY, opacity: sharedOpacity };
      case "tilt-right":
        return { ...base, x: tiltRightX, rotateY: tiltRightRotY, opacity: sharedOpacity };
      case "depth":
        return { ...base, scale: depthScale, z: depthZ, opacity: sharedOpacity };
      case "float":
        return { ...base, y: floatY, rotateX: floatRotX, opacity: sharedOpacity };
      case "unfold":
        return { ...base, rotateX: unfoldRotX, opacity: unfoldOpacity };
      default:
        return base;
    }
  };

  return (
    <div
      ref={ref}
      className={`overflow-visible ${className}`}
      style={{ perspective: "900px" }}
    >
      <motion.div
        style={getStyle() as any}
        transition={{ delay }}
        className="w-full h-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
