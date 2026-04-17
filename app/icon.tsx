import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #fffdf8 0%, #fff3d1 100%)",
          borderRadius: 18,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -18,
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ffd36f 0%, #fe7f2d 62%, rgba(254,127,45,0) 78%)",
          }}
        />
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.8)",
            position: "absolute",
            bottom: 12,
          }}
        />
      </div>
    ),
    size,
  );
}
