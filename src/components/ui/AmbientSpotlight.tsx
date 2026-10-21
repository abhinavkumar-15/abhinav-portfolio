"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function AmbientSpotlight() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Gentle spring dampening for the ambient glow
  const springConfig = { damping: 45, stiffness: 180, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const isDark = theme !== "light";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: isDark
            ? "radial-gradient(circle 350px at center, rgba(45, 212, 191, 0.045) 0%, rgba(245, 158, 11, 0.015) 45%, transparent 70%)"
            : "radial-gradient(circle 350px at center, rgba(15, 118, 110, 0.04) 0%, rgba(217, 119, 6, 0.018) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
        className="absolute w-[700px] h-[700px] rounded-full opacity-60 transition-opacity duration-700 pointer-events-none"
      />
    </div>
  );
}
