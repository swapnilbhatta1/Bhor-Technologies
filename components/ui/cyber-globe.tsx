export function CyberGlobe({ className = "" }: { className?: string }) {
  return (
    <div
      className={`cyber-globe-wrapper ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="cyber-globe-svg"
        fill="none"
      >
        {/* ── Outer glow halo ── */}
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="rgba(82,90,255,0.08)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          stroke="rgba(82,90,255,0.12)"
          strokeWidth="0.5"
        />

        {/* ── Main sphere outline ── */}
        <circle
          cx="200"
          cy="200"
          r="155"
          stroke="rgba(134,143,255,0.35)"
          strokeWidth="1.2"
        />

        {/* ── Latitude rings ── */}
        {/* Equator */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="30"
          stroke="rgba(134,143,255,0.45)"
          strokeWidth="1"
        />
        {/* Tropic of Cancer */}
        <ellipse
          cx="200"
          cy="162"
          rx="138"
          ry="24"
          stroke="rgba(134,143,255,0.25)"
          strokeWidth="0.8"
        />
        {/* Tropic of Capricorn */}
        <ellipse
          cx="200"
          cy="238"
          rx="138"
          ry="24"
          stroke="rgba(134,143,255,0.25)"
          strokeWidth="0.8"
        />
        {/* Arctic */}
        <ellipse
          cx="200"
          cy="122"
          rx="100"
          ry="16"
          stroke="rgba(134,143,255,0.18)"
          strokeWidth="0.6"
        />
        {/* Antarctic */}
        <ellipse
          cx="200"
          cy="278"
          rx="100"
          ry="16"
          stroke="rgba(134,143,255,0.18)"
          strokeWidth="0.6"
        />

        {/* ── Longitude arcs (slow spin group) ── */}
        <g className="globe-spin-slow">
          <ellipse
            cx="200"
            cy="200"
            rx="48"
            ry="155"
            stroke="rgba(134,143,255,0.30)"
            strokeWidth="0.9"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="100"
            ry="155"
            stroke="rgba(134,143,255,0.22)"
            strokeWidth="0.8"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="135"
            ry="155"
            stroke="rgba(134,143,255,0.15)"
            strokeWidth="0.7"
          />
        </g>

        {/* ── Longitude arcs (counter-spin group) ── */}
        <g className="globe-spin-reverse">
          <ellipse
            cx="200"
            cy="200"
            rx="70"
            ry="155"
            stroke="rgba(82,90,255,0.25)"
            strokeWidth="0.8"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="118"
            ry="155"
            stroke="rgba(82,90,255,0.18)"
            strokeWidth="0.7"
          />
        </g>

        {/* ── Glowing poles ── */}
        <circle cx="200" cy="46" r="4" fill="rgba(134,143,255,0.7)" className="globe-pulse" />
        <circle cx="200" cy="354" r="4" fill="rgba(134,143,255,0.7)" className="globe-pulse" />

        {/* ── Nodes / network dots ── */}
        {[
          { cx: 200, cy: 200 },
          { cx: 148, cy: 162 },
          { cx: 252, cy: 162 },
          { cx: 148, cy: 238 },
          { cx: 252, cy: 238 },
          { cx: 200, cy: 122 },
          { cx: 200, cy: 278 },
          { cx: 110, cy: 200 },
          { cx: 290, cy: 200 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="3.5"
            fill="rgba(134,143,255,0.65)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.8"
            className="globe-node-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* ── Network connection lines ── */}
        <g stroke="rgba(134,143,255,0.20)" strokeWidth="0.7" strokeDasharray="3 4">
          <line x1="200" y1="200" x2="148" y2="162" />
          <line x1="200" y1="200" x2="252" y2="162" />
          <line x1="200" y1="200" x2="148" y2="238" />
          <line x1="200" y1="200" x2="252" y2="238" />
          <line x1="148" y1="162" x2="252" y2="162" />
          <line x1="148" y1="238" x2="252" y2="238" />
          <line x1="148" y1="162" x2="148" y2="238" />
          <line x1="252" y1="162" x2="252" y2="238" />
          <line x1="200" y1="122" x2="148" y2="162" />
          <line x1="200" y1="122" x2="252" y2="162" />
          <line x1="200" y1="278" x2="148" y2="238" />
          <line x1="200" y1="278" x2="252" y2="238" />
          <line x1="110" y1="200" x2="148" y2="162" />
          <line x1="110" y1="200" x2="148" y2="238" />
          <line x1="290" y1="200" x2="252" y2="162" />
          <line x1="290" y1="200" x2="252" y2="238" />
        </g>

        {/* ── Central radial glow (rendered via filter) ── */}
        <defs>
          <radialGradient id="globe-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(134,143,255,0.18)" />
            <stop offset="100%" stopColor="rgba(82,90,255,0)" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="155" fill="url(#globe-core-glow)" />
      </svg>
    </div>
  );
}
