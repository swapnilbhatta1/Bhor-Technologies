"use client";

import Image from "next/image";
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Share2,
  Link2,
  Camera,
  Menu,
} from "lucide-react";

export default function BloomHeroPage() {
  return (
    <div className="bloom-root">
      {/* ── Video Background ── */}
      <video
        className="bloom-video-bg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* ── Main Two-Panel Layout ── */}
      <div className="bloom-layout">

        {/* ════════════════ LEFT PANEL ════════════════ */}
        <div className="bloom-left-panel">
          {/* Frosted overlay card */}
          <div className="bloom-left-glass liquid-glass-strong">

            {/* ── Nav ── */}
            <nav className="bloom-nav">
              <div className="bloom-nav-brand">
                <Image src="/logo.png" alt="Bloom logo" width={32} height={32} className="bloom-nav-logo" />
                <span className="bloom-nav-wordmark">bloom</span>
              </div>
              <button className="bloom-menu-pill liquid-glass" aria-label="Open menu">
                <Menu size={16} strokeWidth={1.8} />
                <span>Menu</span>
              </button>
            </nav>

            {/* ── Hero Center ── */}
            <div className="bloom-hero-center">
              <Image src="/logo.png" alt="Bloom" width={80} height={80} className="bloom-hero-logo" />

              <h1 className="bloom-h1">
                Innovating the<br />
                <em className="bloom-h1-serif">spirit of bloom AI</em>
              </h1>

              {/* CTA */}
              <button className="bloom-cta liquid-glass-strong">
                <span>Explore Now</span>
                <span className="bloom-cta-icon">
                  <Download size={14} strokeWidth={2} />
                </span>
              </button>

              {/* Pills */}
              <div className="bloom-pills">
                {["Artistic Gallery", "AI Generation", "3D Structures"].map((label) => (
                  <span key={label} className="bloom-pill liquid-glass">{label}</span>
                ))}
              </div>
            </div>

            {/* ── Bottom Quote ── */}
            <div className="bloom-quote">
              <p className="bloom-quote-label">VISIONARY DESIGN</p>
              <p className="bloom-quote-text">
                <span className="bloom-quote-sans">&ldquo;We imagined a realm </span>
                <em className="bloom-quote-serif">with no ending.</em>
                <span className="bloom-quote-sans">&rdquo;</span>
              </p>
              <div className="bloom-author">
                <span className="bloom-author-line" />
                <span className="bloom-author-name">MARCUS AURELIO</span>
                <span className="bloom-author-line" />
              </div>
            </div>

          </div>
        </div>

        {/* ════════════════ RIGHT PANEL (desktop only) ════════════════ */}
        <div className="bloom-right-panel">

          {/* ── Top Bar ── */}
          <div className="bloom-right-topbar">
            {/* Social pill */}
            <div className="bloom-social-pill liquid-glass">
              {[
                { Icon: Share2,  label: "Twitter" },
                { Icon: Link2,   label: "LinkedIn" },
                { Icon: Camera,  label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="bloom-social-icon">
                  <span className="bloom-icon-circle">
                    <Icon size={14} strokeWidth={1.8} />
                  </span>
                </a>
              ))}
              <span className="bloom-social-arrow">
                <ArrowRight size={14} strokeWidth={1.8} />
              </span>
            </div>

            {/* Account / Sparkles */}
            <button className="bloom-account-btn liquid-glass" aria-label="Account">
              <span className="bloom-icon-circle">
                <Sparkles size={14} strokeWidth={1.8} />
              </span>
            </button>
          </div>

          {/* ── Community Card ── */}
          <div className="bloom-community-card liquid-glass">
            <p className="bloom-community-title">Enter our ecosystem</p>
            <p className="bloom-community-desc">
              Join thousands of designers crafting living, breathing floral art powered by AI.
            </p>
          </div>

          {/* ── Bottom Feature Section ── */}
          <div className="bloom-features-outer liquid-glass">

            {/* Two side-by-side cards */}
            <div className="bloom-features-row">
              <div className="bloom-feature-card liquid-glass">
                <span className="bloom-icon-circle">
                  <Wand2 size={16} strokeWidth={1.8} />
                </span>
                <p className="bloom-feature-title">Processing</p>
              </div>
              <div className="bloom-feature-card liquid-glass">
                <span className="bloom-icon-circle">
                  <BookOpen size={16} strokeWidth={1.8} />
                </span>
                <p className="bloom-feature-title">Growth Archive</p>
              </div>
            </div>

            {/* Bottom card */}
            <div className="bloom-feature-bottom liquid-glass">
              <Image
                src="/hero-flowers.png"
                alt="Advanced Plant Sculpting"
                width={96}
                height={64}
                className="bloom-feature-thumb"
              />
              <div className="bloom-feature-body">
                <p className="bloom-feature-bottom-title">Advanced Plant Sculpting</p>
                <p className="bloom-feature-bottom-desc">
                  Sculpt hyper-realistic botanical forms using neural mesh generation.
                </p>
              </div>
              <button className="bloom-feature-plus liquid-glass" aria-label="Add">+</button>
            </div>

          </div>

        </div>
        {/* ── end right panel ── */}

      </div>
    </div>
  );
}
