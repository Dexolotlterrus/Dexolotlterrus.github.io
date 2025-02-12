import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Upper Text */}
          <h1
            className={`absolute left-1/2 top-10 transform -translate-x-1/2 text-white text-5xl font-bold leading-tight text-center ${playfairDisplay.className}`}
          >
            <span className="text-red-500">Hi Madelyn, let&apos;s play a...</span> <br />Valentine&apos;s Day Matching Game!
          </h1>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-red-500">Before we add </span> <br />another night to remember...
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        let&apos;s make sure <br /> <span className="text-red-500">we don&apos;t forget...</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-white text-sm opacity-15 hover:opacity-50">
        © {new Date().getFullYear()}{" "}
        <Link href="https://visibait.com">visibait.com</Link>
      </p>
    </>
  );
}
