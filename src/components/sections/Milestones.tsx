"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { milestones, achievements } from "@/data/siteConfig";
import Card3D from "@/components/ui/Card3D";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

export default function Milestones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "120px" });

  return (
    <section
      id="milestones"
      className="py-24 md:py-32 border-t relative"
      style={{ borderColor: "var(--th-border)" }}
    >
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <ScrollReveal3D variant="depth" className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--th-text-dim)" }}
            >
              04 / MILESTONES &amp; EXPERIENCE
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: "var(--th-border)" }} />
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--th-text-heading)" }}
            >
              CHRONOLOGY
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight"
            style={{ color: "var(--th-text-heading)" }}
          >
            Documented experience and{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              commitments
            </span>
            .
          </h2>
        </motion.div>
        </ScrollReveal3D>

        {/* Timeline by Year Groups */}
        <div className="space-y-16">
          {milestones.map((yearGroup, gi) => (
            <ScrollReveal3D
              key={yearGroup.year}
              variant={gi % 2 === 0 ? "tilt-left" : "tilt-right"}
              threshold={0.05}
            >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Year column */}
              <div className="lg:col-span-2">
                <span
                  className="font-mono text-3xl font-light sticky top-28"
                  style={{ color: "var(--th-text-dim)" }}
                >
                  {yearGroup.year}
                </span>
              </div>

              {/* Items column */}
              <div
                className="lg:col-span-10 divide-y border-t border-b"
                style={{ borderColor: "var(--th-border)" }}
              >
                {yearGroup.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.04 * i }}
                    className="py-7 group transition-colors"
                    style={{ borderColor: "var(--th-border)" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <div className="flex items-baseline gap-3">
                        <h3
                          className="font-serif text-xl sm:text-2xl font-normal"
                          style={{ color: "var(--th-text-heading)" }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="text-sm font-light"
                          style={{ color: "var(--th-text-dim)" }}
                        >
                          — {item.organization}
                        </span>
                      </div>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--th-text-faint)" }}
                      >
                        {item.period}
                      </span>
                    </div>

                    <p
                      className="text-sm font-light leading-relaxed max-w-2xl mb-4"
                      style={{ color: "var(--th-text-body)" }}
                    >
                      {item.description}
                    </p>

                    {item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs border"
                            style={{
                              backgroundColor: "var(--th-tag-bg)",
                              borderColor: "var(--th-tag-border)",
                              color: "var(--th-text-dim)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            </ScrollReveal3D>
          ))}
        </div>

        {/* Leadership & Achievements Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t"
          style={{ borderColor: "var(--th-border)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--th-text-dim)" }}
            >
              HONORS &amp; INITIATIVE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((ach, i) => (
              <Card3D
                key={ach.title}
                maxTilt={6}
                glareOpacity={0.12}
                scale={1.02}
                cursorType="pointer"
                className="h-full rounded-sm"
              >
                <div
                  className="p-6 border rounded-sm h-full flex flex-col justify-between transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--th-card-bg)",
                    borderColor: "var(--th-border)",
                  }}
                >
                  <div>
                    <span
                      className="font-mono text-[10px] block mb-2"
                      style={{ color: "var(--th-text-faint)" }}
                    >
                      0{i + 1}
                    </span>
                    <h4
                      className="font-serif text-lg font-medium mb-2"
                      style={{ color: "var(--th-text-heading)" }}
                    >
                      {ach.title}
                    </h4>
                    <p
                      className="text-xs font-light leading-relaxed"
                      style={{ color: "var(--th-text-body)" }}
                    >
                      {ach.description}
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
