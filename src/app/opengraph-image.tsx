import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 16,
                height: 56,
                background: "#E5FF00",
                transform: "skewX(-20deg)",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 900,
            color: "#F5F5F0",
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          <span>Compete.</span>
          <span>
            Connect. <span style={{ color: "#E5FF00" }}>Belong.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "rgba(245,245,240,0.6)",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Second Shift — Corporate Sports & Sunday League, Rajasthan
        </div>
      </div>
    ),
    { ...size },
  );
}
