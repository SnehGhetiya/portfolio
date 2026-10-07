import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";
import { USER } from "@/data/user";

export const alt = `${SITE_NAME} | ${USER.flipSentences[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        background: "#fafafa",
        color: "#0a0a0a",
      }}
    >
      <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>{SITE_NAME}</div>
      <div style={{ fontSize: 40, marginTop: 24, color: "#525252" }}>
        {USER.flipSentences.join(" · ")}
      </div>
    </div>,
    size,
  );
}
