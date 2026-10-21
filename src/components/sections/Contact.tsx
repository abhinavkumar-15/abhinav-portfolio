"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/Icons";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "120px" });
  const [copied, setCopied] = useState<string | null>(null);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(email);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 border-t relative"
      style={{ borderColor: "var(--th-border)" }}
    >
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <ScrollReveal3D variant="unfold" className="mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--th-text-dim)" }}
            >
              06 / GET IN TOUCH
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: "var(--th-border)" }} />
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--th-text-heading)" }}
            >
              CORRESPONDENCE
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] max-w-4xl"
            style={{ color: "var(--th-text-heading)" }}
          >
            Have an inquiry,{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              research collaboration
            </span>
            , or system to build?
          </h2>
        </motion.div>
        </ScrollReveal3D>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative & Direct Emails — 7 cols */}
          <ScrollReveal3D variant="tilt-left" className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="text-lg font-light leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--th-text-body)" }}
            >
              I am open to AI/ML engineering internships, computational biology
              research opportunities, and technical discussions. Feel free to reach out
              directly via either email:
            </p>

            {/* Email Cards */}
            <div className="space-y-4 mb-10 max-w-xl">
              {/* Primary Email */}
              <div
                className="p-5 border flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors duration-300"
                style={{
                  backgroundColor: "var(--th-card-bg)",
                  borderColor: "var(--th-border)",
                }}
              >
                <div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest block mb-1"
                    style={{ color: "var(--th-text-faint)" }}
                  >
                    PRIMARY INBOX
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-serif text-lg sm:text-xl transition-colors hover:opacity-80"
                    style={{ color: "var(--th-text-heading)" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyEmail(siteConfig.email)}
                    className="p-2 border transition-colors"
                    style={{
                      borderColor: "var(--th-border)",
                      color: "var(--th-text-dim)",
                    }}
                    aria-label="Copy primary email"
                    title="Copy to clipboard"
                  >
                    {copied === siteConfig.email ? (
                      <Check size={14} style={{ color: "var(--th-accent)" }} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 border text-xs font-mono uppercase tracking-wider transition-colors"
                    style={{
                      borderColor: "var(--th-border)",
                      color: "var(--th-text-heading)",
                    }}
                  >
                    <span>Write</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Alternative Email */}
              <div
                className="p-5 border flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors duration-300"
                style={{
                  backgroundColor: "var(--th-card-bg)",
                  borderColor: "var(--th-border)",
                }}
              >
                <div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest block mb-1"
                    style={{ color: "var(--th-text-faint)" }}
                  >
                    ALTERNATIVE INBOX
                  </span>
                  <a
                    href={`mailto:${siteConfig.altEmail}`}
                    className="font-serif text-base sm:text-lg transition-colors hover:opacity-80"
                    style={{ color: "var(--th-text-heading)" }}
                  >
                    {siteConfig.altEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyEmail(siteConfig.altEmail)}
                    className="p-2 border transition-colors"
                    style={{
                      borderColor: "var(--th-border)",
                      color: "var(--th-text-dim)",
                    }}
                    aria-label="Copy alternative email"
                    title="Copy to clipboard"
                  >
                    {copied === siteConfig.altEmail ? (
                      <Check size={14} style={{ color: "var(--th-accent)" }} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                  <a
                    href={`mailto:${siteConfig.altEmail}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 border text-xs font-mono uppercase tracking-wider transition-colors"
                    style={{
                      borderColor: "var(--th-border)",
                      color: "var(--th-text-heading)",
                    }}
                  >
                    <span>Write</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          </ScrollReveal3D>

          {/* Location & Digital Channels — 5 cols */}
          <ScrollReveal3D variant="tilt-right" className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="border p-6 sm:p-8 space-y-6 transition-colors duration-300"
              style={{
                backgroundColor: "var(--th-card-bg)",
                borderColor: "var(--th-border)",
              }}
            >
              <div>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest block mb-2"
                  style={{ color: "var(--th-text-faint)" }}
                >
                  LOCATION &amp; TIMEZONE
                </span>
                <span
                  className="text-base block font-light"
                  style={{ color: "var(--th-text-heading)" }}
                >
                  Hyderabad, Telangana, India
                </span>
                <span
                  className="text-xs font-mono mt-1 block"
                  style={{ color: "var(--th-text-dim)" }}
                >
                  Indian Standard Time (GMT +5:30)
                </span>
              </div>

              <div
                className="pt-6 border-t"
                style={{ borderColor: "var(--th-border)" }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-widest block mb-4"
                  style={{ color: "var(--th-text-faint)" }}
                >
                  DIGITAL CHANNELS
                </span>
                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1 border-b transition-colors hover:opacity-80"
                    style={{
                      borderColor: "var(--th-border)",
                      color: "var(--th-text-heading)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon size={14} />
                      <span>github.com/abhinavkumar-15</span>
                    </span>
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1 border-b transition-colors hover:opacity-80"
                    style={{
                      borderColor: "var(--th-border)",
                      color: "var(--th-text-heading)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon size={14} />
                      <span>linkedin.com/in/pathiabhinavkumar</span>
                    </span>
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1 transition-colors hover:opacity-80"
                    style={{ color: "var(--th-text-heading)" }}
                  >
                    <span className="flex items-center gap-2">
                      <LeetcodeIcon size={14} />
                      <span>leetcode.com/u/abhinavkumar_15</span>
                    </span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          </ScrollReveal3D>
        </div>
      </div>
    </section>
  );
}
