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
            "linear-gradient(180deg, #090a10 0%, #0d0f1a 30%, #151829 58%, #0f111c 100%)",
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
              "radial-gradient(circle at 50% 88%, rgba(82, 90, 255, 0.4) 0%, rgba(82, 90, 255, 0.2) 22%, rgba(0, 0, 0, 0) 48%)",
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
              "radial-gradient(circle, rgba(134,143,255,0.7) 0%, rgba(82,90,255,0.5) 30%, rgba(61,66,229,0.3) 58%, rgba(82,90,255,0) 74%)",
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
              gap: 18,
            }}
          >
            <span
              style={{
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                borderRadius: 18,
                background: "linear-gradient(180deg, #fffdf8 0%, #fff4dd 100%)",
                border: "1px solid rgba(251,146,60,0.26)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: 3,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "linear-gradient(180deg, #868fff 0%, #525AFF 100%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 11,
                  width: 24,
                  height: 12,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  border: "2px solid #b5baff",
                  borderBottom: "none",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 6,
                  width: 2,
                  height: 6,
                  borderRadius: 999,
                  background: "#6974ff",
                }}
              />
              <span
                style={{
                  position: "relative",
                  color: "#1c1e2b",
                  fontSize: 28,
                  fontWeight: 800,
                  transform: "translateY(2px)",
                }}
              >
                S
              </span>
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span
                style={{
                  color: "#868fff",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Sparken
              </span>
              <span
                style={{
                  color: "#f8fafc",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                Tech
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 760 }}>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 800,
                color: "#f8fafc",
              }}
            >
              Rise faster with AI, SaaS, and secure digital systems.
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "#cbd5e1",
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
