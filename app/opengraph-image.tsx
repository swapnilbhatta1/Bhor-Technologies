import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(180deg, #fffdf8 0%, #fff6e5 30%, #fff2da 58%, #fff9f1 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 88%, rgba(255, 211, 111, 0.95) 0%, rgba(254, 127, 45, 0.44) 22%, rgba(254, 127, 45, 0) 48%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -230,
            transform: "translateX(-50%)",
            width: 740,
            height: 740,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,244,210,1) 0%, rgba(255,219,129,0.95) 30%, rgba(254,127,45,0.55) 58%, rgba(254,127,45,0) 74%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#fe7f2d",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#fe7f2d",
              }}
            />
            Bhor Technologies
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 760 }}>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 800,
                color: "#111827",
              }}
            >
              Rise faster with AI, SaaS, and secure digital systems.
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "#475569",
              }}
            >
              Automation-first product engineering for ambitious businesses ready to scale.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
