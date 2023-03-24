import { ImageResponse } from "@vercel/og";
import { SITE_TITLE } from "../../const/webConst";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const fontBold = fetch(
  new URL("../../assets/SpaceGrotesk-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontRegular = fetch(
  new URL("../../assets/SpaceGrotesk-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function () {
  const fontBoldData = await fontBold;
  const fontRegularData = await fontRegular;
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Space Grotesk Regular",
          justifyContent: "space-between",
          backgroundColor: "white",
          background: "linear-gradient(135deg, #231F2B 0%, #000000 100%)",
          color: "white",
        }}
      >
        <div
          style={{ fontFamily: "Space Grotesk Bold" }}
          tw="text-8xl font-bold mx-12 mt-8"
        >
          zero_
        </div>
        <div
          style={{ fontFamily: "Space Grotesk Regular" }}
          tw="text-7xl leading-tight font-bold mt-16 m-12 text-white/70"
        >
          {`${SITE_TITLE}: understand and solve problems faster.`}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Space Grotesk Bold",
          data: fontBoldData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Space Grotesk Regular",
          data: fontRegularData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
