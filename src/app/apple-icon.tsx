import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/logo-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f4fa" }}>
        <img src={logoDataUri({ stroke: 8, view: "4 4 56 56" })} width={140} height={140} alt="" />
      </div>
    ),
    size,
  );
}