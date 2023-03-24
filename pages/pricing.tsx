import splitbee from "@splitbee/web";
import { useState } from "react";
import Header from "../components/Header";

interface PricingProps {
  className?: string;
}

const Pricing = (props: PricingProps) => {
  const [showDialog, setShowDialog] = useState(false);

  const showStartForFreeDialog = () => {
    setShowDialog(true);
  };
  return (
    <>
      <div className="bg-gradient-radial from-purple-900/30 to-black/80 from fixed inset-0" />
      <div className={`${props.className} z-10 relative`}>
        <Header />
        <section className="flex flex-col items-center text-center mt-20 px-3 font-display">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight">
            Pricing
          </h1>
          <h2 className="text-xl mt-12 leading-8 max-w-3xl">
            Zero suggests fixes for every issues, so you don't waste time
            Googling them
          </h2>
          <div className="mt-12 max-w-2xl w-full mx-auto flex flex-col sm:flex-row gap-8">
            <div className="flex-1 border border-white/20 bg-white/10 p-8 rounded-lg flex flex-col">
              <h3 className="uppercase text-xs tracking-wider">Starter</h3>
              <h2 className="mt-2 text-4xl text-semibold ">Free</h2>
              <div className="mt-2 px-2 py-px bg-white/10 rounded-md mx-auto text-xs ">
                Forever
              </div>
              <ul className="mt-8 flex flex-col items-start gap-3">
                <li>
                  30 suggestions <span className="text-white/50">/month</span>
                </li>
                {/* <li>
                  Save ~2h <span className="text-white/50">/user/month</span>
                </li> */}
              </ul>
              <button
                onClick={() => {
                  window.open(
                    "https://ziggapp.notion.site/Get-started-9177ad3bc96d40e1991cac232f46c945",
                    "_blank"
                  );
                  splitbee.track("Click free plan CTA");
                }}
                className="bg-white text-black px-8 py-4 w-full text-xl font-bold rounded mt-8"
              >
                Start for free
              </button>
            </div>
            <div className="flex-1 p-8 rounded-lg flex flex-col border border-white/20 bg-white/10">
              <h3 className="uppercase text-xs tracking-wider">Pro</h3>
              <h2 className="mt-2 text-4xl text-semibold ">
                $5<span className="text-lg">/month</span>
              </h2>
              <div className="mt-2 px-2 py-px bg-white/10 rounded-md mx-auto text-xs ">
                Per user
              </div>
              <ul className="mt-8 flex flex-col items-start gap-3">
                <li className="whitespace-nowrap">Unlimited suggestions</li>
                {/* <li>
                  Save ~10h <span className="text-white/50">/user/month</span>
                </li> */}
                {/* <li>
                1000 texts <span className="text-base">+$9/1000 texts</span>
              </li> */}
              </ul>
              <button
                onClick={() => {
                  window.open(
                    "https://ziggapp.notion.site/Get-started-9177ad3bc96d40e1991cac232f46c945",
                    "_blank"
                  );
                  splitbee.track("Click paid plan CTA");
                }}
                className="bg-white px-8 py-4 w-full text-xl font-bold rounded text-black mt-8"
              >
                Start for free
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
