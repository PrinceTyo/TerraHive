import { IoIosArrowForward } from "react-icons/io";
import parallaxImage from "@/assets/parallax.png";

export default function Parallax() {
  return (
    <div
      className="relative h-116 lg:h-96 flex items-center justify-start bg-fixed"
      style={{
        backgroundImage: `url(${parallaxImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-10 text-center lg:text-start lg:max-w-1/2 space-y-2 lg:space-y-4 px-4 md:px-20 flex flex-col items-center lg:items-start justify-center lg:justify-start">
        <h1 className="text-3xl lg:text-4xl text-white font-semibold">
          Discover Modern Luxury Living Designed For Your Future
        </h1>
        <p className="text-white/80 text-md mt-4 max-w-2xl leading-relaxed">
          Explore premium residences with elegant architecture, strategic
          locations, and exceptional comfort tailored to your lifestyle.
        </p>
        <a href="#">
          <button className="mt-6 lg:mt-12 cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg">
            Explore More <IoIosArrowForward />
          </button>
        </a>
      </div>
    </div>
  );
}
