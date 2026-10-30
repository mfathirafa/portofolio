import { ImageResponse } from "next/og";

export const alt = "Muhammad Fathi Rafa, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#171717", padding: 80 }}>
        <div style={{ fontSize: 32, color: "#525252" }}>muhammadfathirafa.my.id</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Muhammad Fathi Rafa</div>
          <div style={{ fontSize: 40, color: "#525252", marginTop: 24 }}>
            Software Engineer. APIs, payments, and databases for real-world systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}