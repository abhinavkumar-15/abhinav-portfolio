"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { beyondTheCode } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";
import Card3D from "@/components/ui/Card3D";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

export default function Beyond() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "120px" });

  return (
    <section
      id="beyond"
      className="py-24 md:py-32 border-t relative"
      style={{ borderColor: "var(--th-border)" }}
    >
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <ScrollReveal3D variant="unfold" className="mb-16">
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
              05 / BEYOND THE TERMINAL
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: "var(--th-border)" }} />
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--th-text-heading)" }}
            >
              PERSONAL DISCIPLINE &amp; INQUIRY
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight"
            style={{ color: "var(--th-text-heading)" }}
          >
            Interests that inform{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              how I think
            </span>
            .
          </h2>
          <p
            className="font-light text-base mt-3 max-w-xl"
            style={{ color: "var(--th-text-body)" }}
          >
            Competitive athletics, classical arts, and deep curiosities that
            sharpen technical intuition outside the codebase.
          </p>
        </motion.div>
        </ScrollReveal3D>

        {/* 3-Column Editorial Grid with Equal Height 3D Tactile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {beyondTheCode.map((item, i) => {
            const variants = ["rise", "depth", "float"] as const;
            return (
            <ScrollReveal3D
              key={item.title}
              variant={variants[i % 3]}
              threshold={0.05}
              className="h-full flex flex-col"
            >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="h-full flex flex-col flex-1"
            >
              <Card3D
                maxTilt={6}
                glareOpacity={0.14}
                scale={1.018}
                cursorType="pointer"
                className="h-full flex flex-col flex-1 rounded-sm"
              >
                <div
                  className="p-8 lg:p-10 flex flex-col justify-between h-full flex-1 border rounded-sm transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--th-card-bg)",
                    borderColor: "var(--th-border)",
                  }}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--th-text-faint)" }}
                      >
                        [ 0{i + 1} ]
                      </span>
                      {item.badge && (
                        <span
                          className="font-mono text-[9.5px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-xs border"
                          style={{
                            backgroundColor: "var(--th-tag-bg)",
                            borderColor: "var(--th-tag-border)",
                            color: "var(--th-text-dim)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      className="font-serif text-[28px] sm:text-[30px] lg:text-[32px] font-normal tracking-[-0.015em] leading-[1.18] mb-2.5 transition-colors"
                      style={{ color: "var(--th-text-heading)" }}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span
                        className="block font-mono text-[10.5px] uppercase tracking-[0.15em] mb-4"
                        style={{ color: "var(--th-accent)" }}
                      >
                        {item.subtitle}
                      </span>
                    )}

                    <p
                      className="text-[13.5px] sm:text-[14px] font-light leading-[1.75] flex-1"
                      style={{ color: "var(--th-text-body)" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {item.link ? (
                    <div
                      className="mt-8 pt-4 border-t"
                      style={{ borderColor: "var(--th-border)" }}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-75"
                        style={{ color: "var(--th-text-heading)" }}
                      >
                        <span>Read Publication</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  ) : (
                    <div
                      className="mt-8 pt-4 border-t opacity-0 pointer-events-none select-none text-xs font-mono"
                      aria-hidden="true"
                    >
                      <span>Spacer</span>
                    </div>
                  )}
                </div>
              </Card3D>
            </motion.div>
            </ScrollReveal3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
