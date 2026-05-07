import { HiBadgeCheck } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdRealEstateAgent } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function About() {
  return (
    <section className="px-0 py-20 lg:px-20 bg-linear-to-b from-gray-100 to-gray-50 flex items-start justify-between gap-6">
      <div className="relative w-1/2">
        <img
          src="https://i.pinimg.com/1200x/7e/e0/d8/7ee0d810f0db0f7a2e06f8333f3daaa3.jpg"
          alt="About Image"
          className="absolute bottom-10 right-6 w-50 h-40 object-cover rounded-xl z-10"
        />
        <img
          src="https://i.pinimg.com/736x/38/34/a6/3834a6fbc01211938cd831b0bd868068.jpg"
          alt="About Image"
          className="w-126 h-116 object-cover rounded-3xl"
          style={{
            clipPath: "polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      <div className="w-2/3">
        <div>
          <p className="text-primary tracking-widest text-md md:text-lg">
            ― ABOUT
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            About The Story Behind Us
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            We are dedicated to creating exceptional living spaces that combine
            modern architecture, comfort, and timeless elegance. Our passion is
            helping people discover homes that reflect their lifestyle, dreams,
            and future aspirations.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 py-6">
          <div className="flex items-center justify-between bg-white px-8 py-4 gap-10 rounded-lg border border-gray-100">
            <div className="">
              <h2 className="font-bold text-2xl">20+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <HiBadgeCheck className="w-14 h-14 p-2 bg-gray-100 text-primary rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between bg-white px-8 py-4 gap-10 rounded-lg border border-gray-100">
            <div className="">
              <h2 className="font-bold text-2xl">500+</h2>
              <p>Happy Clients</p>
            </div>
            <div>
              <FaPeopleGroup className="w-14 h-14 p-2 bg-gray-100 text-primary rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between bg-white px-8 py-4 gap-10 rounded-lg border border-gray-100">
            <div className="">
              <h2 className="font-bold text-2xl">800+</h2>
              <p>Luxury Home Sold</p>
            </div>
            <div>
              <MdRealEstateAgent className="w-14 h-14 p-2 bg-gray-100 text-primary rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between bg-white px-8 py-4 gap-10 rounded-lg border border-gray-100">
            <div className="">
              <h2 className="font-bold text-2xl">10+</h2>
              <p>Countries of Clientele</p>
            </div>
            <div>
              <FaGlobeAmericas className="w-14 h-14 p-2 bg-gray-100 text-primary rounded-full" />
            </div>
          </div>
        </div>
        <a href="#">
          <button className="cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg">
            Explore More <IoIosArrowForward />
          </button>
        </a>
      </div>
    </section>
  );
}
