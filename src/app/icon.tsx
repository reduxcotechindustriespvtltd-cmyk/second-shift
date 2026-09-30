import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
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
          background: "#0A0A0A",
          borderRadius: 7,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M4 30H14L20 20L26 30H36L26 14H20L4 30Z"
            fill="#F04E23"
          />
          <path
            d="M28 30H36L44 18H36L28 30Z"
            fill="#F04E23"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}