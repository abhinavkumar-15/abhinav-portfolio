"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function CustomCursor() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer fluid ring (amaterasu.ai physics)
  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Inspect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
      const viewable = target.closest("[data-cursor='view']");
      const draggable = target.closest("[data-cursor='drag']");

      if (viewable) {
        setCursorState("view");
      } else if (draggable) {
        setCursorState("drag");
      } else if (interactive) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  // Variants based on hover state
  const isDark = theme !== "light";

  const getRingDimensions = () => {
    if (cursorState === "view") return { size: 68, opacity: 1 };
    if (cursorState === "hover") return { size: 52, opacity: 0.9 };
    return { size: 34, opacity: 0.75 };
  };

  const { size, opacity } = getRingDimensions();
  const currentScale = isMouseDown ? 0.82 : 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Fluid Trailing Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: size,
          height: size,
          scale: currentScale,
          opacity: isVisible ? opacity : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="absolute rounded-full flex items-center justify-center pointer-events-none transition-colors duration-200"
      >
        <div
          className="w-full h-full rounded-full transition-all duration-300"
          style={{
            border: isDark
              ? cursorState === "hover"
                ? "1.5px solid rgba(45, 212, 191, 0.7)"
                : cursorState === "view"
                ? "1.5px solid rgba(255, 255, 255, 0.85)"
                : "1px solid rgba(255, 255, 255, 0.35)"
              : cursorState === "hover"
              ? "1.5px solid rgba(15, 118, 110, 0.8)"
              : cursorState === "view"
              ? "1.5px solid rgba(17, 17, 20, 0.9)"
              : "1px solid rgba(17, 17, 20, 0.4)",
            backgroundColor:
              cursorState === "view"
                ? isDark
                  ? "rgba(10, 10, 12, 0.75)"
                  : "rgba(255, 255, 255, 0.85)"
                : cursorState === "hover"
                ? isDark
                  ? "rgba(45, 212, 191, 0.08)"
                  : "rgba(15, 118, 110, 0.08)"
                : "transparent",
            backdropFilter: cursorState === "view" ? "blur(4px)" : "none",
            boxShadow:
              isDark && cursorState === "hover"
                ? "0 0 16px rgba(45, 212, 191, 0.25)"
                : !isDark && cursorState === "hover"
                ? "0 0 14px rgba(15, 118, 110, 0.2)"
                : "none",
          }}
        />

      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isDark ? "#ffffff" : "#111114",
          boxShadow: isDark
            ? "0 0 6px rgba(255, 255, 255, 0.8)"
            : "0 0 4px rgba(0, 0, 0, 0.3)",
        }}
        animate={{
          scale: cursorState === "view" ? 0 : cursorState === "hover" ? 1.4 : 1,
          opacity: cursorState === "view" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      />
    </div>
  );
}
