"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Card3D from "@/components/ui/Card3D";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

// Visual 01: Smart Grid Dynamic Topology Illustration (Minimalist Editorial Schematic)
function SmartGridVisualization() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#0c0d10] border border-white/[0.08] shadow-2xl group overflow-hidden">
      {/* Header plate */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0f1014]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            TOPOLOGICAL POWER FLOW &amp; LOAD BALANCING
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-500">NetworkX · Matplotlib</span>
      </div>

      <svg
        viewBox="0 0 500 300"
        className="w-full h-[calc(100%-40px)] p-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="genGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Minimal grid gridlines */}
        <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          <line x1="0" y1="75" x2="500" y2="75" />
          <line x1="0" y1="150" x2="500" y2="150" />
          <line x1="0" y1="225" x2="500" y2="225" />
          <line x1="125" y1="0" x2="125" y2="300" />
          <line x1="250" y1="0" x2="250" y2="300" />
          <line x1="375" y1="0" x2="375" y2="300" />
        </g>

        {/* Transmission Edges */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
          <line x1="250" y1="50" x2="130" y2="120" stroke="rgba(45,212,191,0.6)" strokeWidth="1.5" />
          <line x1="250" y1="50" x2="370" y2="120" stroke="rgba(45,212,191,0.6)" strokeWidth="1.5" />
          <line x1="250" y1="50" x2="250" y2="130" stroke="rgba(45,212,191,0.4)" strokeDasharray="3 3" />
          
          <line x1="130" y1="120" x2="80" y2="200" />
          <line x1="130" y1="120" x2="180" y2="200" />
          
          <line x1="370" y1="120" x2="320" y2="200" />
          <line x1="370" y1="120" x2="420" y2="200" />

          <line x1="250" y1="130" x2="250" y2="200" stroke="#2dd4bf" strokeWidth="1.5" />
        </g>

        {/* Generator Node */}
        <circle cx="250" cy="50" r="24" fill="url(#genGlow)" />
        <circle cx="250" cy="50" r="8" fill="#0c0d10" stroke="#2dd4bf" strokeWidth="1.5" />
        <circle cx="250" cy="50" r="3" fill="#2dd4bf" />
        <text x="250" y="28" textAnchor="middle" fill="#e4e4e7" fontSize="8.5" fontFamily="monospace" letterSpacing="1">
          PRIMARY GENERATION BUS
        </text>

        {/* Substation West */}
        <circle cx="130" cy="120" r="6" fill="#0c0d10" stroke="#a1a1aa" strokeWidth="1.5" />
        <text x="85" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="monospace">
          SUBSTATION-W
        </text>

        {/* Substation East */}
        <circle cx="370" cy="120" r="6" fill="#0c0d10" stroke="#a1a1aa" strokeWidth="1.5" />
        <text x="415" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="monospace">
          SUBSTATION-E
        </text>

        {/* Priority Consumer */}
        <rect x="235" y="195" width="30" height="18" fill="#0c0d10" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="250" y="208" textAnchor="middle" fill="#2dd4bf" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          PRI-1
        </text>
        <text x="250" y="228" textAnchor="middle" fill="#f4f4f5" fontSize="8" fontFamily="monospace">
          Critical Infrastructure
        </text>

        {/* Consumer Nodes */}
        <circle cx="80" cy="200" r="5" fill="#0c0d10" stroke="#71717a" strokeWidth="1" />
        <text x="80" y="222" textAnchor="middle" fill="#71717a" fontSize="7.5" fontFamily="monospace">Node W-1</text>

        <circle cx="180" cy="200" r="5" fill="#0c0d10" stroke="#71717a" strokeWidth="1" />
        <text x="180" y="222" textAnchor="middle" fill="#71717a" fontSize="7.5" fontFamily="monospace">Node W-2</text>

        <circle cx="320" cy="200" r="5" fill="#0c0d10" stroke="#71717a" strokeWidth="1" />
        <text x="320" y="222" textAnchor="middle" fill="#71717a" fontSize="7.5" fontFamily="monospace">Node E-1</text>

        <circle cx="420" cy="200" r="5" fill="#0c0d10" stroke="#71717a" strokeWidth="1" />
        <text x="420" y="222" textAnchor="middle" fill="#71717a" fontSize="7.5" fontFamily="monospace">Node E-2</text>

        {/* Footnote Ledger */}
        <g transform="translate(20, 255)">
          <rect width="460" height="24" fill="#0a0a0c" stroke="rgba(255,255,255,0.06)" />
          <text x="12" y="16" fill="#2dd4bf" fontSize="8" fontFamily="monospace">
            ALGORITHM: CONSTRAINED MINIMUM RESISTIVE LOSS
          </text>
          <text x="310" y="16" fill="#71717a" fontSize="8" fontFamily="monospace">
            LOAD REDUCTION: ~18%
          </text>
        </g>
      </svg>
    </div>
  );
}

// Visual 02: EV Battery Degradation & RUL Analytics (VoltGuard AI)
function EVBatteryVisualization() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#0c0d10] border border-white/[0.08] shadow-2xl group overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0f1014]">
        <div className="flex items-center gap-2">
          <Activity size={13} className="text-emerald-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            VOLTGUARD AI · DEGRADATION &amp; RUL PROGNOSTICS
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-500">
          LOBO Cross-Validation
        </span>
      </div>

      <svg
        viewBox="0 0 500 300"
        className="w-full h-[calc(100%-40px)] p-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sohGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="bandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1="45" y1="20" x2="45" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="45" y1="220" x2="475" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* Y-axis ticks */}
        <text x="38" y="35" textAnchor="end" fill="#71717a" fontSize="7.5" fontFamily="monospace">100%</text>
        <line x1="42" y1="32" x2="475" y2="32" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 2" />

        <text x="38" y="85" textAnchor="end" fill="#71717a" fontSize="7.5" fontFamily="monospace">95%</text>
        <line x1="42" y1="82" x2="475" y2="82" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 2" />

        <text x="38" y="135" textAnchor="end" fill="#71717a" fontSize="7.5" fontFamily="monospace">90%</text>
        <line x1="42" y1="132" x2="475" y2="132" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 2" />

        {/* 80% EOL Threshold */}
        <line x1="42" y1="195" x2="475" y2="195" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
        <text x="470" y="188" textAnchor="end" fill="#f43f5e" fontSize="7.5" fontFamily="monospace">
          80% EOL THRESHOLD
        </text>

        {/* X-axis labels */}
        <text x="45" y="236" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">0</text>
        <text x="140" y="236" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">200</text>
        <text x="240" y="236" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">400</text>
        <text x="340" y="236" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">600 (Current)</text>
        <text x="440" y="236" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="monospace">800 (Forecast)</text>

        {/* Confidence Band Polygon */}
        <polygon
          points="340,150 390,160 440,175 465,190 465,208 440,195 390,178 340,150"
          fill="url(#bandGradient)"
        />

        {/* Observed Battery SOH Degradation Curve */}
        <path
          d="M 45,35 Q 120,40 180,60 T 260,102 T 340,150"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="2"
        />

        {/* Historical Area fill */}
        <path
          d="M 45,35 Q 120,40 180,60 T 260,102 T 340,150 L 340,220 L 45,220 Z"
          fill="url(#sohGradient)"
        />

        {/* Forecast Extrapolation Curve */}
        <path
          d="M 340,150 Q 390,168 440,185 T 465,198"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Marker */}
        <circle cx="340" cy="150" r="4" fill="#0c0d10" stroke="#2dd4bf" strokeWidth="2" />

        {/* Telemetry Annotation Box */}
        <g transform="translate(250, 50)">
          <rect width="130" height="32" fill="#111115" stroke="rgba(255,255,255,0.12)" />
          <text x="8" y="13" fill="#71717a" fontSize="7" fontFamily="monospace">ESTIMATION AT C-600</text>
          <text x="8" y="25" fill="#2dd4bf" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SOH: 87.4% · RUL +184 cyc</text>
        </g>

        {/* Bottom Ledger */}
        <g transform="translate(20, 255)">
          <rect width="460" height="24" fill="#0a0a0c" stroke="rgba(255,255,255,0.06)" />
          <text x="12" y="16" fill="#38bdf8" fontSize="8" fontFamily="monospace">
            DATASET: EMPIRICAL CYCLER AGING
          </text>
          <text x="210" y="16" fill="#71717a" fontSize="8" fontFamily="monospace">
            MODELS: RF + MULTI-HORIZON RIDGE
          </text>
          <text x="380" y="16" fill="#2dd4bf" fontSize="8" fontFamily="monospace">
            SHAP EXPLAINABILITY
          </text>
        </g>
      </svg>
    </div>
  );
}

// Visual 03: Thryve Creative Writing Publication (Faithfully matching user's live site)
function ThryveVisualization() {
  return (
    <div className="relative w-full bg-[#161513] border border-white/[0.1] rounded-xs shadow-2xl overflow-hidden flex flex-col justify-between">
      {/* Thryve Warm Parchment Banner Header */}
      <div className="px-5 py-3.5 border-b border-[#2b2722] bg-[#1d1b18] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full border border-amber-600/40 flex items-center justify-center text-amber-500 font-serif text-[11px]">
            ❦
          </div>
          <span className="font-serif text-base tracking-wide text-[#e8e2d5] font-normal">
            Thryve
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-[#a39a8c]">
          <span className="hover:text-white transition-colors">POSTS</span>
          <span className="hover:text-white transition-colors">AUTHOR WORKSPACE</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="px-5 py-2.5 bg-[#171512] border-b border-[#26231f] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono">
        <div className="flex items-center gap-2 text-zinc-500 bg-[#12110f] px-3 py-1 rounded-xs border border-white/[0.05] flex-1 max-w-xs">
          <span>⌕</span>
          <span className="text-zinc-500 text-[9px] uppercase">Search title, tags, or content...</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-xs bg-[#c2410c] text-white text-[9px] font-mono uppercase tracking-wider font-semibold">
            ALL STORIES
          </span>
          <span className="px-2 py-0.5 rounded-xs bg-transparent border border-white/[0.1] text-zinc-400 text-[9px] font-mono uppercase tracking-wider">
            BOOKMARKS
          </span>
        </div>
      </div>

      {/* Tags Filter Strip */}
      <div className="px-5 py-2 bg-[#191815] border-b border-[#26231f] flex flex-wrap items-center gap-1.5 text-[9px] font-mono">
        <span className="text-[#a8824f] uppercase font-bold mr-1">TAGS:</span>
        <span className="px-2 py-0.5 rounded-xs bg-[#2e261d] text-[#e5a855] border border-[#4a3a27]">
          #PURPOSE
        </span>
        <span className="px-2 py-0.5 rounded-xs bg-[#22211e] text-[#a39a8c]">#THOUGHT</span>
        <span className="px-2 py-0.5 rounded-xs bg-[#22211e] text-[#a39a8c]">#MORALS</span>
        <span className="px-2 py-0.5 rounded-xs bg-[#22211e] text-[#a39a8c]">#LOVE</span>
        <span className="px-2 py-0.5 rounded-xs bg-[#22211e] text-[#a39a8c]">#MINDFULNESS</span>
        <span className="px-2 py-0.5 rounded-xs bg-[#22211e] text-[#a39a8c]">#LIFE</span>
        <span className="px-2 py-0.5 rounded-xs bg-[#22211e] text-[#a39a8c]">#GROWTH</span>
      </div>

      {/* Grid of Real Life Essay Cards from thryve-blog.web.app */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#131210]">
        
        {/* Card 1: Searching The Soul */}
        <div className="bg-[#1c1a17] border border-[#2e2b26] rounded-xs overflow-hidden flex flex-col justify-between shadow-sm">
          <div>
            <div className="h-14 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-2 flex items-start justify-between">
              <span className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-xs bg-black/40 text-sky-200">
                PURPOSE
              </span>
              <span className="text-[8px] font-mono text-zinc-400">3 MIN READ</span>
            </div>
            <div className="p-3">
              <span className="text-[8px] font-mono text-zinc-500 block mb-1">
                AUG 13 · 454 WORDS
              </span>
              <h5 className="font-serif text-xs text-[#f0ebe1] font-medium mb-1.5 leading-snug">
                Searching The Soul
              </h5>
              <p className="font-serif italic text-[10px] text-[#a8a194] leading-relaxed line-clamp-3">
                &ldquo;A retrospective write up about thoughts and how circumstances influence them. What role do we as people have to play in it?&rdquo;
              </p>
            </div>
          </div>
          <div className="px-3 py-2 border-t border-[#26231f] flex items-center justify-between text-[8px] font-mono text-zinc-500">
            <span>#THOUGHT #MORALS</span>
            <span className="text-rose-400">♥</span>
          </div>
        </div>

        {/* Card 2: For The Love Of Love */}
        <div className="bg-[#1c1a17] border border-[#2e2b26] rounded-xs overflow-hidden flex flex-col justify-between shadow-sm">
          <div>
            <div className="h-14 bg-gradient-to-br from-[#78350f] to-[#451a03] p-2 flex items-start justify-between">
              <span className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-xs bg-black/40 text-amber-200">
                LOVE
              </span>
              <span className="text-[8px] font-mono text-zinc-400">2 MIN READ</span>
            </div>
            <div className="p-3">
              <span className="text-[8px] font-mono text-zinc-500 block mb-1">
                JUL 21 · 362 WORDS
              </span>
              <h5 className="font-serif text-xs text-[#f0ebe1] font-medium mb-1.5 leading-snug">
                For The Love Of Love
              </h5>
              <p className="font-serif italic text-[10px] text-[#a8a194] leading-relaxed line-clamp-3">
                &ldquo;A thought provoking insight into the principles of love at the hand of someone who simply admires how wondrous it sounds as a concept.&rdquo;
              </p>
            </div>
          </div>
          <div className="px-3 py-2 border-t border-[#26231f] flex items-center justify-between text-[8px] font-mono text-zinc-500">
            <span>#THOUGHT #MINDFULNESS</span>
            <span className="text-rose-400">♥</span>
          </div>
        </div>

        {/* Card 3: As Good As The Old */}
        <div className="bg-[#1c1a17] border border-[#2e2b26] rounded-xs overflow-hidden flex flex-col justify-between shadow-sm">
          <div>
            <div className="h-14 bg-gradient-to-br from-[#064e3b] to-[#022c22] p-2 flex items-start justify-between">
              <span className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-xs bg-black/40 text-emerald-200">
                LIFE
              </span>
              <span className="text-[8px] font-mono text-zinc-400">3 MIN READ</span>
            </div>
            <div className="p-3">
              <span className="text-[8px] font-mono text-zinc-500 block mb-1">
                JUL 21 · 410 WORDS
              </span>
              <h5 className="font-serif text-xs text-[#f0ebe1] font-medium mb-1.5 leading-snug">
                As Good As The Old
              </h5>
              <p className="font-serif italic text-[10px] text-[#a8a194] leading-relaxed line-clamp-3">
                &ldquo;A reflection on what humanity lost and a satirical rhetoric on human evolution. Is there a chance we are evolving backwards?&rdquo;
              </p>
            </div>
          </div>
          <div className="px-3 py-2 border-t border-[#26231f] flex items-center justify-between text-[8px] font-mono text-zinc-500">
            <span>#LOSS #GROWTH</span>
            <span className="text-rose-400">♥</span>
          </div>
        </div>

      </div>

      {/* Platform & Publication Footer Bar */}
      <div className="px-5 py-2.5 border-t border-[#2b2722] bg-[#161412] flex items-center justify-between font-mono text-[10px] text-[#8a8174]">
        <span>ENGINEERED ON FIREBASE · SELF-AUTHORED ESSAYS ON LIFE</span>
        <span className="text-amber-500/90">thryve-blog.web.app</span>
      </div>
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "120px" });

  const projectList = [
    {
      id: "smart-grid",
      number: "01",
      total: "03",
      title: "Smart Grid Energy Distribution System",
      category: "AI & Machine Learning · Graph Optimization",
      thesis:
        "Dynamic graph-based grid optimization routing power through constraints to minimize transmission losses.",
      narrative: [
        "Modeled electrical grids with NetworkX, dynamically balancing power between generation buses, substations, and critical nodes.",
        "Applied constrained shortest-path algorithms, reducing peak transmission losses by an estimated 18%.",
      ],
      technologies: ["Python", "NetworkX", "Matplotlib", "Graph Analytics"],
      github: "https://github.com/abhinavkumar-15/Smart-Grid-Energy-DIstribution-System",
      visual: <SmartGridVisualization />,
    },
    {
      id: "ev-battery-degradation",
      number: "02",
      total: "03",
      title: "VoltGuard AI — EV Battery Health & RUL Prognostics",
      category: "Deep Learning · Predictive Analytics · Diagnostics",
      thesis:
        "An end-to-end ML framework predicting battery State of Health (SOH) and Remaining Useful Life (RUL).",
      narrative: [
        "Trained on empirical cycler aging telemetry with LOBO cross-validation, predicting degradation across 5 to 50 future cycles.",
        "Integrated SHAP explainability and deployed a live FastAPI backend with responsive analytics dashboard.",
      ],
      technologies: ["Python", "Scikit-learn", "FastAPI", "React", "SHAP", "Tailwind CSS"],
      github: "https://github.com/abhinavkumar-15/ev-battery-degradation",
      demo: "https://ev-battery-degradation.vercel.app",
      visual: <EVBatteryVisualization />,
    },
    {
      id: "thryve",
      number: "03",
      total: "03",
      title: "Thryve — Digital Publishing Platform for Self-Authored Essays",
      category: "Web Application · Digital Publishing · Self-Authored Essays",
      thesis:
        "A custom web publishing platform engineered to host my self-authored essays exploring life and the human experience.",
      narrative: [
        "Built and deployed on Firebase with dedicated author/reader workspaces, search, and dynamic multi-tag filtering.",
        "Hosts self-authored reflective essays on the soul, love, morals, and growth including 'Searching The Soul'.",
      ],
      technologies: ["Web Application", "Firebase", "Reader Architecture", "Content Indexing", "Self-Authored Essays"],
      demo: "https://thryve-blog.web.app/",
      visual: <ThryveVisualization />,
    },
  ];

  return (
    <section
      id="work"
      className="py-24 md:py-32 border-t relative"
      style={{ borderColor: "var(--th-border)" }}
    >
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <ScrollReveal3D variant="depth" className="mb-16">
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
              03 / SELECTED WORK
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: "var(--th-border)" }} />
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--th-text-heading)" }}
            >
              CASE STUDIES &amp; SYSTEMS
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight"
            style={{ color: "var(--th-text-heading)" }}
          >
            Selected systems in{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              energy optimization
            </span>
            ,{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              predictive prognostics
            </span>
            , &amp;{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              inquiry
            </span>
            .
          </h2>
        </motion.div>
        </ScrollReveal3D>

        {/* Case Studies Showcase */}
        <div className="space-y-24">
          {projectList.map((project, idx) => (
            <ScrollReveal3D
              key={project.id}
              variant={idx % 2 === 0 ? "tilt-left" : "tilt-right"}
              threshold={0.08}
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="pt-12 border-t grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
                style={{ borderColor: "var(--th-border)" }}
              >
                {/* Left Column: Case Narrative (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Case Number & Category */}
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] mb-3.5">
                      <span style={{ color: "var(--th-text-heading)" }}>CASE {project.number} / {project.total}</span>
                      <span style={{ color: "var(--th-text-faint)" }}>·</span>
                      <span style={{ color: "var(--th-accent)" }}>{project.category}</span>
                    </div>

                    {/* Title — Elegant Editorial Display */}
                    <h3
                      className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.02em] mb-4 leading-[1.12]"
                      style={{ color: "var(--th-text-heading)" }}
                    >
                      {project.title}
                    </h3>

                    {/* Thesis statement — Literary pullquote */}
                    <p
                      className="font-serif italic text-base sm:text-lg font-light leading-relaxed mb-6 border-l-2 pl-4 py-1"
                      style={{
                        color: "var(--th-text-body)",
                        borderColor: "var(--th-accent)",
                      }}
                    >
                      &ldquo;{project.thesis}&rdquo;
                    </p>

                    {/* Detailed points */}
                    <div className="space-y-3.5 mb-8">
                      {project.narrative.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-[14px] sm:text-[15px] font-light leading-[1.75]"
                          style={{ color: "var(--th-text-body)" }}
                        >
                          <span
                            className="font-mono text-[11px] mt-0.5 shrink-0"
                            style={{ color: "var(--th-text-faint)" }}
                          >
                            0{i + 1}
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs border transition-colors"
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
                  </div>

                  {/* External Action Links */}
                  <div
                    className="flex items-center gap-6 pt-6 border-t"
                    style={{ borderColor: "var(--th-border)" }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-opacity hover:opacity-80 group"
                        style={{ color: "var(--th-text-heading)" }}
                      >
                        <GithubIcon size={14} />
                        <span>Source Repository</span>
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-opacity hover:opacity-80 group"
                        style={{ color: "var(--th-accent)" }}
                      >
                        <span>Live System</span>
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Schematic (6 cols) with 3D Tilt */}
                <div className="lg:col-span-6 w-full">
                  <Card3D maxTilt={5} glareOpacity={0.12} scale={1.015} className="w-full">
                    {project.visual}
                  </Card3D>
                </div>
              </motion.article>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
