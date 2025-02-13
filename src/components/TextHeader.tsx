import { Playfair_Display } from "next/font/google";
import { VT323 } from "@next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});
const pixelFont = VT323({ subsets: ["latin"], weight: "400" });

export default function TextHeader() {
  return (
    <>
      {/* Upper Text */}
      <div className="float-animation ">
          <h1
            className={`absolute left-1/2 top-[-100px] transform -translate-x-1/2 text-white text-7xl font-bold leading-tight text-center ${pixelFont.className}`}
          >
            <span className="text-500-gray">Hi Madelyn!</span> <br />
          </h1>
      </div>
    </>
  );
}
