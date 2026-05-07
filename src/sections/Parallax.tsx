import { IoIosArrowForward } from "react-icons/io";
import parallaxImage from "@/assets/parallax.png";

export default function Parallax() {
  return (
    <div
      className="relative h-116 md:h-96 flex items-center justify-start bg-fixed"
      style={{
        backgroundImage: `url(${parallaxImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10 text-start max-w-1/2 space-y-4 px-20">
        <h1 className="text-3xl md:text-4xl text-white font-semibold">
          Discover Modern Luxury Living Designed For Your Future
        </h1>
        <p className="text-white/80 text-md mt-4 max-w-2xl leading-relaxed">
          Explore premium residences with elegant architecture, strategic
          locations, and exceptional comfort tailored to your lifestyle.
        </p>
        <a href="#">
          <button className="cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg">
            Explore More <IoIosArrowForward />
          </button>
        </a>
      </div>
    </div>
  );
}
