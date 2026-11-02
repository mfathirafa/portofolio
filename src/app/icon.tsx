import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/logo-svg";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f4fa", borderRadius: 14 }}>
        <img src={logoDataUri({ stroke: 9, view: "6 6 52 52" })} width={50} height={50} alt="" />
      </div>
    ),
    size,
  );
}