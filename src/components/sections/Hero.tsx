"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { siteConfig, socialLinks, corePillars } from "@/data/siteConfig";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import Card3D from "@/components/ui/Card3D";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { theme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);

  // Hero parallax — as user scrolls down, headline floats upward slightly
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    { damping: 30, stiffness: 100 }
  );
  // Keep hero fully visible longer — don't fade out until it is nearly scrolled off screen
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);


  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="section-container w-full my-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Editorial Headline & Introduction — Left 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle Editorial Top Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5"
                style={{ color: "var(--th-accent)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--th-accent)" }}
                />
                {siteConfig.availability}
              </span>
            </motion.div>

            {/* Giant Editorial Headline with Serif Italics (Jackie Zhang Aesthetic) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h1
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.06]"
                style={{ color: "var(--th-text-heading)" }}
              >
                Building intelligent systems across{" "}
                <span
                  className="italic font-light"
                  style={{ color: "var(--th-text-body)" }}
                >
                  Machine Learning
                </span>
                ,{" "}
                <span
                  className="italic font-light"
                  style={{ color: "var(--th-text-body)" }}
                >
                  Deep Learning
                </span>
                , &amp;{" "}
                <span
                  className="italic font-light"
                  style={{ color: "var(--th-text-body)" }}
                >
                  Bioinformatics
                </span>
                .
              </h1>
            </motion.div>

            {/* Pillar Domains Bar (Clean Monospace Badges) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              {corePillars.map((pillar, i) => (
                <span
                  key={pillar.label}
                  className="font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded-sm border transition-colors"
                  style={{
                    backgroundColor: "var(--th-tag-bg)",
                    borderColor: "var(--th-tag-border)",
                    color: "var(--th-text-dim)",
                  }}
                >
                  <span style={{ color: "var(--th-text-faint)" }} className="mr-1.5">
                    0{i + 1}
                  </span>
                  {pillar.label}
                </span>
              ))}
            </motion.div>

            {/* Introduction Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--th-text-body)" }}
            >
              I am an undergraduate specializing in Artificial Intelligence and Machine
              Learning at Sreyas Institute, Hyderabad. I design predictive architectures,
              explore high-dimensional data, and work at the intersection where computational
              intelligence informs biological inquiry.
            </motion.p>

            {/* Call to Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs font-mono uppercase tracking-wider transition-opacity duration-200 shadow-sm hover:opacity-90"
                style={{
                  backgroundColor: "var(--th-cta-bg)",
                  color: "var(--th-cta-text)",
                }}
              >
                <span>Selected Work</span>
                <ArrowDown size={13} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-xs font-mono uppercase tracking-wider transition-colors duration-200"
                style={{
                  borderColor: "var(--th-border-strong)",
                  color: "var(--th-text-heading)",
                  backgroundColor: "transparent",
                }}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={13} />
              </a>
            </motion.div>

            {/* Profiles Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-6 pt-6 border-t text-xs font-mono"
              style={{
                borderColor: "var(--th-border)",
                color: "var(--th-text-dim)",
              }}
            >
              <span
                className="uppercase tracking-widest text-[10px]"
                style={{ color: "var(--th-text-faint)" }}
              >
                PROFILES
              </span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:opacity-80"
                style={{ color: "var(--th-text-body)" }}
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:opacity-80"
                style={{ color: "var(--th-text-body)" }}
              >
                <LinkedinIcon size={13} />
                <span>LinkedIn</span>
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:opacity-80"
                style={{ color: "var(--th-text-body)" }}
              >
                <LeetcodeIcon size={13} />
                <span>LeetCode</span>
              </a>
            </motion.div>
          </div>

          {/* Gallery Photographic Framing — Right 5 cols (Editorial Exhibition Style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[390px]">
              
              {/* 3D Exhibition Frame with Specular Glare */}
              <Card3D
                maxTilt={8}
                glareOpacity={0.18}
                scale={1.02}
                perspective={1100}
                className="rounded-sm"
              >
                {/* Outer Minimal Frame */}
                <div
                  className="p-2.5 rounded-sm border shadow-2xl transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--th-card-bg)",
                    borderColor: "var(--th-border)",
                  }}
                >
                  
                  {/* Photo Container */}
                  <div
                    className="relative aspect-[3/4] w-full overflow-hidden rounded-xs transition-colors duration-300"
                    style={{
                      backgroundColor: "var(--th-surface-panel)",
                    }}
                  >
                    {!imageError ? (
                      <Image
                        src={siteConfig.portrait}
                        alt={siteConfig.portraitAlt}
                        fill
                        priority
                        sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 390px"
                        className="editorial-portrait object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                        style={{
                          filter: theme === "light"
                            ? "grayscale(100%) contrast(1.08) brightness(1.02)"
                            : "grayscale(100%) contrast(1.05) brightness(0.98)",
                        }}
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div
                        className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                        style={{ backgroundColor: "var(--th-surface-panel)" }}
                      >
                        <div
                          className="w-20 h-20 rounded-full border flex items-center justify-center font-serif text-2xl mb-3"
                          style={{
                            borderColor: "var(--th-border)",
                            color: "var(--th-text-body)",
                          }}
                        >
                          AK
                        </div>
                        <span
                          className="font-mono text-xs uppercase tracking-wider"
                          style={{ color: "var(--th-text-dim)" }}
                        >
                          Abhinav Kumar
                        </span>
                      </div>
                    )}

                    {/* Gentle vignette */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, var(--th-vignette) 0%, transparent 55%)",
                      }}
                    />
                  </div>

                  {/* Editorial Caption Plate */}
                  <div
                    className="pt-3 pb-1 px-1 flex items-center justify-between font-mono text-[11px]"
                    style={{ color: "var(--th-text-dim)" }}
                  >
                    <span style={{ color: "var(--th-text-heading)" }}>Abhinav Kumar</span>
                    <span>HYDERABAD, IN</span>
                  </div>
                </div>
              </Card3D>

              {/* Status Note below caption */}
              <div
                className="mt-3 px-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider"
                style={{ color: "var(--th-text-faint)" }}
              >
                <span>AI · ML · DL · BIOINFORMATICS</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Subtle Bottom Bar of Hero */}
      <div
        className="section-container w-full pt-8 border-t flex items-center justify-between text-[11px] font-mono"
        style={{
          borderColor: "var(--th-border)",
          color: "var(--th-text-dim)",
        }}
      >
        <span className="uppercase tracking-widest">
          01 / 06 — PERSPECTIVE
        </span>
        <a
          href="#about"
          className="hover:opacity-75 transition-opacity flex items-center gap-1.5 uppercase tracking-wider"
          style={{ color: "var(--th-text-dim)" }}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={11} />
        </a>
      </div>
    </section>
  );
}
