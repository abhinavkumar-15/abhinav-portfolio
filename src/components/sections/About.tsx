"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";
import Card3D from "@/components/ui/Card3D";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "120px" });

  const dossierItems = [
    {
      label: "DEGREE",
      value: "B.Tech in Computer Science & Engineering (AI/ML)",
      detail: "Sreyas Institute of Engineering & Technology, Hyderabad",
    },
    {
      label: "CORE PILLARS",
      value: "AI · Machine Learning · Deep Learning",
      detail: "Data Analytics · Bioinformatics",
    },
    {
      label: "RESEARCH FRONTIERS",
      value: "Genomic Sequence Exploration & Healthcare AI",
      detail: "High-dimensional telemetry & predictive modeling",
    },
    {
      label: "INDUSTRY EXPERIENCE",
      value: "Cloud & Data Engineering · Robotics Pipelines",
      detail: "Core Defender AI & Yotzeron Robotics internships",
    },
    {
      label: "STATUS",
      value: "Active Undergraduate Researcher & Developer",
      detail: "Open to internships & research collaborations",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t relative"
      style={{ borderColor: "var(--th-border)" }}
    >
      <div className="section-container" ref={ref}>
        {/* Section Label */}
        <ScrollReveal3D variant="depth" className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "var(--th-text-dim)" }}
          >
            01 / ABOUT
          </span>
          <span className="w-8 h-px" style={{ backgroundColor: "var(--th-border)" }} />
          <span
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: "var(--th-text-heading)" }}
          >
            POSITIONING &amp; TRAJECTORY
          </span>
        </motion.div>
        </ScrollReveal3D>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Editorial Narrative — Left 7 cols */}
          <ScrollReveal3D variant="tilt-left" className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-8"
              style={{ color: "var(--th-text-heading)" }}
            >
              Curiosity directed toward{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--th-text-body)" }}
              >
                intelligent models
              </span>{" "}
              and the living world.
            </h2>

            <blockquote
              className="font-serif italic text-xl sm:text-2xl border-l pl-6 py-1.5 mb-8 font-light leading-snug"
              style={{
                color: "var(--th-text-heading)",
                borderColor: "var(--th-accent)",
              }}
            >
              &ldquo;The most compelling opportunities in artificial intelligence do not
              lie in generic software, but in extracting clean signal from complex,
              high-dimensional empirical data.&rdquo;
            </blockquote>

            <div
              className="space-y-5 font-light text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--th-text-body)" }}
            >
              <p>
                I’m{" "}
                <strong className="font-semibold" style={{ color: "var(--th-text-heading)" }}>
                  Abhinav Kumar
                </strong>{" "}
                — an AI &amp; ML undergrad with a curious mind and an unreasonable number of questions.
              </p>
              <p>
                I dabble in{" "}
                <strong className="font-semibold" style={{ color: "var(--th-text-heading)" }}>
                  AI, ML, Deep Learning, Data Analytics, and Bioinformatics
                </strong>{" "}
                because apparently, one rabbit hole was never enough.
              </p>
              <p
                className="font-medium text-base sm:text-lg tracking-tight pt-1"
                style={{ color: "var(--th-text-heading)" }}
              >
                Teaching machines to think. Teaching data to talk. Trying to figure out life’s source code.
              </p>
            </div>
          </motion.div>
          </ScrollReveal3D>

          {/* Dossier / Ledger Sidebar — Right 5 cols (Editorial Ledger) */}
          <ScrollReveal3D variant="tilt-right" className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card3D maxTilt={4} glareOpacity={0.1} scale={1.01} className="w-full">
              <div
                className="border divide-y transition-colors duration-300"
                style={{
                  backgroundColor: "var(--th-card-bg)",
                  borderColor: "var(--th-border)",
                }}
              >
                <div
                  className="p-4 flex items-center justify-between"
                  style={{
                    backgroundColor: "var(--th-surface-panel)",
                    borderColor: "var(--th-border)",
                  }}
                >
                  <span
                    className="font-mono text-[11px] uppercase tracking-widest"
                    style={{ color: "var(--th-text-heading)" }}
                  >
                    DOSSIER / PROFILE SUMMARY
                  </span>
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "var(--th-text-faint)" }}
                  >
                    HYD · IN
                  </span>
                </div>

                {dossierItems.map((item) => (
                  <div
                    key={item.label}
                    className="p-5"
                    style={{ borderColor: "var(--th-border)" }}
                  >
                    <span
                      className="block font-mono text-[10px] uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--th-text-faint)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="block text-sm font-medium"
                      style={{ color: "var(--th-text-heading)" }}
                    >
                      {item.value}
                    </span>
                    <span
                      className="block text-xs font-mono mt-1"
                      style={{ color: "var(--th-text-dim)" }}
                    >
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </Card3D>
          </motion.div>
          </ScrollReveal3D>

        </div>
      </div>
    </section>
  );
}
