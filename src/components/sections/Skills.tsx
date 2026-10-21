"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

interface SkillCategory {
  index: string;
  title: string;
  subtitle: string;
  skills: { name: string; tag: string }[];
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "120px" });

  const categories: SkillCategory[] = [
    {
      index: "01",
      title: "AI & Machine Learning",
      subtitle: "Predictive algorithms, decision models, and validation",
      skills: [
        { name: "Scikit-learn", tag: "Core ML" },
        { name: "Random Forests & Trees", tag: "Ensemble" },
        { name: "Leave-One-Out (LOBO) CV", tag: "Validation" },
        { name: "SHAP Explainability", tag: "Interpretability" },
        { name: "Feature Engineering", tag: "Data Prep" },
      ],
    },
    {
      index: "02",
      title: "Deep Learning & Architectures",
      subtitle: "Multi-horizon sequence forecasting and neural modeling",
      skills: [
        { name: "Neural Network Modeling", tag: "Deep Learning" },
        { name: "Multi-Horizon Time-Series", tag: "Forecasting" },
        { name: "Physics-Informed ML", tag: "Applied" },
        { name: "Loss Optimization", tag: "Algorithms" },
      ],
    },
    {
      index: "03",
      title: "Data Analytics & Computing",
      subtitle: "Statistical exploration, manipulation, and visual synthesis",
      skills: [
        { name: "Pandas & Numerical Tables", tag: "Core" },
        { name: "NumPy Linear Algebra", tag: "Numerical" },
        { name: "Matplotlib & Visual Analytics", tag: "Graphics" },
        { name: "Exploratory Data Analysis (EDA)", tag: "Analytics" },
      ],
    },
    {
      index: "04",
      title: "Bioinformatics & Life Sciences",
      subtitle: "Computational biology, sequence analysis, and genomics",
      skills: [
        { name: "BioPython", tag: "Genomics" },
        { name: "Biological Sequence Exploration", tag: "Analysis" },
        { name: "Healthcare AI Diagnostics", tag: "Prognostics" },
        { name: "Biomolecular Data Modeling", tag: "Research" },
      ],
    },
    {
      index: "05",
      title: "Systems, Cloud & Infrastructure",
      subtitle: "Databases, robotics pipelines, and engineering workflows",
      skills: [
        { name: "Python", tag: "Primary" },
        { name: "SQL & Relational Schemas", tag: "Databases" },
        { name: "PostgreSQL & Aurora", tag: "Cloud DB" },
        { name: "AWS RDS & CloudWatch", tag: "Internship" },
        { name: "ROS 2 & Autonomous Navigation", tag: "Robotics" },
        { name: "Git Version Control", tag: "Tooling" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 border-t relative"
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
              02 / TECHNICAL CAPABILITIES
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: "var(--th-border)" }} />
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--th-text-heading)" }}
            >
              INDEX OF COMPETENCIES
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight"
            style={{ color: "var(--th-text-heading)" }}
          >
            Applied methods across{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              Machine Learning
            </span>
            ,{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              Data Analytics
            </span>
            , &amp;{" "}
            <span className="italic font-light" style={{ color: "var(--th-text-body)" }}>
              Bioinformatics
            </span>
            .
          </h2>
        </motion.div>
        </ScrollReveal3D>

        {/* Editorial Index Layout */}
        <div
          className="border-t divide-y"
          style={{ borderColor: "var(--th-border)" }}
        >
          {categories.map((cat, i) => (
            <ScrollReveal3D
              key={cat.title}
              variant={i % 2 === 0 ? "tilt-left" : "tilt-right"}
              threshold={0.1}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group transition-colors"
              style={{ borderColor: "var(--th-border)" }}
            >
              {/* Index Column */}
              <div className="lg:col-span-1">
                <span
                  className="font-mono text-xs transition-colors"
                  style={{ color: "var(--th-text-faint)" }}
                >
                  [ {cat.index} ]
                </span>
              </div>

              {/* Title & Scope Column */}
              <div className="lg:col-span-4">
                <h3
                  className="font-serif text-xl sm:text-2xl mb-1 transition-colors"
                  style={{ color: "var(--th-text-heading)" }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-mono text-xs leading-relaxed"
                  style={{ color: "var(--th-text-dim)" }}
                >
                  {cat.subtitle}
                </p>
              </div>

              {/* Skills Tags Column */}
              <div className="lg:col-span-7 flex flex-wrap gap-2.5 items-center">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border transition-colors"
                    style={{
                      backgroundColor: "var(--th-tag-bg)",
                      borderColor: "var(--th-tag-border)",
                    }}
                  >
                    <span
                      className="text-sm font-light"
                      style={{ color: "var(--th-text-heading)" }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider"
                      style={{ color: "var(--th-text-faint)" }}
                    >
                      {skill.tag}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
