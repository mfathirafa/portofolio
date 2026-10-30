import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#171717", borderRadius: 14 }}>
        <div style={{ color: "#ffffff", fontSize: 24, fontWeight: 700, letterSpacing: -1, lineHeight: 1 }}>MFR</div>
        <div style={{ width: 28, height: 4, borderRadius: 2, background: "#5a74ff", marginTop: 7 }} />
      </div>
    ),
    size,
  );
}