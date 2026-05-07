import { IoLocationOutline, IoHomeOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export default function Features() {
  return (
    <section className="px-4 py-20 lg:px-20 bg-white" id="features">
      <div className="flex flex-col items-center justify-center text-center gap-y-3">
        <h1 className="text-4xl font-bold">Why Choose Our Properties</h1>
        <p className="text-gray-600">
          We provide luxury residences with strategic locations and trusted
          property services.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 md:px-20 py-10">
        <div className="bg-gray-100 p-8 rounded-xl text-center flex flex-col items-center justify-center gap-y-4 border-3 border-gray-200 shadow-lg hover:text-white hover:bg-primary over:border-3 hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <IoLocationOutline className="w-12 h-12" />
          <h2 className="text-2xl font-bold">Location</h2>
          <p>Find properties in strategic and highly desirable locations.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-xl text-center flex flex-col items-center justify-center gap-y-4 border-3 border-gray-200 shadow-lg hover:text-white hover:bg-primary over:border-3 hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <IoHomeOutline className="w-12 h-12" />
          <h2 className="text-2xl font-bold">Property Type</h2>
          <p>Explore modern homes, apartments, and luxury residences.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-xl text-center flex flex-col items-center justify-center gap-y-4 border-3 border-gray-200 shadow-lg hover:text-white hover:bg-primary over:border-3 hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <FaRegMoneyBillAlt className="w-12 h-12" />
          <h2 className="text-2xl font-bold">Budget</h2>
          <p>Choose properties that match your budget and lifestyle.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-xl text-center flex flex-col items-center justify-center gap-y-4 border-3 border-gray-200 shadow-lg hover:text-white hover:bg-primary over:border-3 hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <MdOutlineRealEstateAgent className="w-12 h-12" />
          <h2 className="text-2xl font-bold">Agent Bio</h2>
          <p>Connect with experienced agents ready to guide your journey.</p>
        </div>
      </div>
    </section>
  );
}
