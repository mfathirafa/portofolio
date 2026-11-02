import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/logo-svg";

export const alt = "Muhammad Fathi Rafa, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f2f4fa", color: "#14193a", padding: 80 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src={logoDataUri({ stroke: 8 })} width={104} height={104} alt="" />
          <div style={{ fontSize: 32, color: "#4a5278" }}>muhammadfathirafa.my.id</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Muhammad Fathi Rafa</div>
          <div style={{ fontSize: 40, color: "#4a5278", marginTop: 24 }}>
            Software Engineer. APIs, payments, and databases for real-world systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}