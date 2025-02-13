import { Playfair_Display } from "next/font/google";
import { VT323 } from "@next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});
const pixelFont = VT323({ display: "swap", subsets: ["latin"], weight: "400" });

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-3xl font-bold leading-tight ${pixelFont.className}`}
      >
        <span className="text-red-500">Before we create another night to remember...</span> <br />Let&apos;s make sure we don&apos;t forget...
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-3xl font-bold leading-tight text-right ${pixelFont.className}`}
      >
        all the memories we've already made <br /> <span className="text-red-500">with a Valentine&apos;s Day Matching Game!</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-white text-sm opacity-15 hover:opacity-50">
        © {new Date().getFullYear()}{" "}
        <Link href="https://visibait.com">visibait.com</Link>
      </p>
    </>
  );
}
