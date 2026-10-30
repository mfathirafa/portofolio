import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#171717" }}>
        <div style={{ color: "#ffffff", fontSize: 68, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>MFR</div>
        <div style={{ width: 80, height: 11, borderRadius: 6, background: "#5a74ff", marginTop: 20 }} />
      </div>
    ),
    size,
  );
}