import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#0A0A0A",
          borderRadius: 6,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 48 48">
          <path d="M4 30 L14 30 L20 20 L26 30 L36 30 L26 14 L20 14 Z" fill="#F04E23" />
          <path d="M28 30 L36 30 L44 18 L36 18 Z" fill="#F04E23" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
