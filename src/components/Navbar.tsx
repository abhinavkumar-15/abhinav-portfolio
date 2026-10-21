"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, socialLinks } from "@/data/siteConfig";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md py-3.5"
            : "bg-transparent py-5"
        }`}
        style={isScrolled ? {
          backgroundColor: 'var(--th-surface)',
          opacity: 0.95,
          borderBottom: '1px solid var(--th-border)',
        } : undefined}
      >
        <div className="section-container flex items-center justify-between">
          
          {/* Desktop Navigation Links — All words capitalised */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 relative py-1"
                  style={{
                    color: isActive ? 'var(--th-text-heading)' : 'var(--th-text-dim)',
                  }}
                >
                  {item.label.toUpperCase()}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ backgroundColor: 'var(--th-text-heading)' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Profiles */}
          <div className="flex items-center gap-6 ml-auto">

            {/* Quick Profile Links */}
            <div className="hidden md:flex items-center gap-3" style={{ color: 'var(--th-text-dim)' }}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LeetCode"
              >
                <LeetcodeIcon size={14} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300"
              style={{
                border: '1px solid var(--th-border-strong)',
                color: 'var(--th-text-dim)',
              }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </motion.div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              style={{ color: 'var(--th-text-body)' }}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <span
                className={`block w-5 h-px bg-current transition-transform duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-opacity duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-transform duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-8 pt-28"
            style={{ backgroundColor: 'var(--th-surface)', opacity: 0.98 }}
          >
            <nav className="flex flex-col gap-5">
              <span className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: 'var(--th-text-dim)' }}>
                NAVIGATION
              </span>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-mono text-xl tracking-widest uppercase transition-colors"
                  style={{ color: 'var(--th-text-body)' }}
                >
                  {item.label.toUpperCase()}
                </motion.a>
              ))}
            </nav>

            <div className="pt-6 flex items-center justify-between text-xs font-mono" style={{ borderTop: '1px solid var(--th-border)', color: 'var(--th-text-dim)' }}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>HYDERABAD · GMT +5:30</span>
              </div>
              <div className="flex items-center gap-4">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                  GITHUB
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
