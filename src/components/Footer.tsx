import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer
      className="border-t py-12 transition-colors duration-300"
      style={{
        backgroundColor: "var(--th-surface-panel)",
        borderColor: "var(--th-border)",
      }}
    >
      <div className="section-container">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 text-xs font-mono"
          style={{ color: "var(--th-text-dim)" }}
        >
          <div className="md:col-span-6">
            <span
              className="block font-serif text-base mb-1"
              style={{ color: "var(--th-text-heading)" }}
            >
              {siteConfig.name}
            </span>
            <span
              className="block text-[11px]"
              style={{ color: "var(--th-text-dim)" }}
            >
              AI · ML · DL · Data Analytics · Bioinformatics
            </span>
          </div>

          <div className="md:col-span-6 md:text-right">
            <span
              className="block text-[10px] uppercase tracking-widest mb-1"
              style={{ color: "var(--th-text-faint)" }}
            >
              LOCATION
            </span>
            <span
              className="block"
              style={{ color: "var(--th-text-heading)" }}
            >
              Hyderabad, India
            </span>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono"
          style={{
            borderColor: "var(--th-border)",
            color: "var(--th-text-faint)",
          }}
        >
          <span>© 2026 Abhinav Kumar. All rights reserved.</span>
          <span>Designed with restraint &amp; editorial care.</span>
        </div>
      </div>
    </footer>
  );
}
