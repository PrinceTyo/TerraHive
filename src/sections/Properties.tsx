import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { MdInsertChartOutlined } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

export default function Properties() {
  return (
    <section className="px-4 py-20 md:px-20 bg-gray-100" id="properties">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2 lg:space-y-4">
            <p className="text-primary tracking-widest text-md md:text-lg">
              ― POPULAR
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Our Popular Homes
            </h1>
          </div>

          <div className="relative flex flex-col md:flex-col-reverse items-start md:items-end lg:flex-row lg:items-center gap-2 mt-6 lg:mt-0">
            <div className="flex items-center gap-x-1 lg:me-8">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </div>
        <CarouselContent className="-ml-1">
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full lg:w-102 bg-white max-w-[98%]">
                <img
                  src="https://i.pinimg.com/736x/ba/28/2e/ba282e6465d684da2cee26b17dc466f0.jpg"
                  alt="Image Properties"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-x-2">
                    <FaLocationDot className="w-6 h-6" />
                    <h1 className="text-lg lg:text-xl font-bold">
                      Sobo Indah, Banyuwangi
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-x-1">
                        <FaBed size={22} className="text-gray-700" />
                        <p className="text-gray-700">4 Bed</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <MdInsertChartOutlined
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">10x10 m</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <AiOutlineLineChart
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">1600 m</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 250.599.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full lg:w-102 bg-white max-w-[98%]">
                <img
                  src="https://i.pinimg.com/736x/57/7a/6e/577a6eff5e7097cb2d41872a0a544e02.jpg"
                  alt="Image Properties"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-x-2">
                    <FaLocationDot className="w-6 h-6" />
                    <h1 className="text-lg lg:text-xl font-bold">
                      Diamond, Bandung
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-x-1">
                        <FaBed size={22} className="text-gray-700" />
                        <p className="text-gray-700">5 Bed</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <MdInsertChartOutlined
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">10x10 m</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <AiOutlineLineChart
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">1600 m</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 300.599.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full lg:w-102 bg-white max-w-[98%]">
                <img
                  src="https://i.pinimg.com/736x/4e/eb/51/4eeb517e0e27076e0ba8fd882459174c.jpg"
                  alt="Image Properties"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-x-2">
                    <FaLocationDot className="w-6 h-6" />
                    <h1 className="text-lg lg:text-xl font-bold">
                      Adimas Permai, Banyuwangi
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-x-1">
                        <FaBed size={22} className="text-gray-700" />
                        <p className="text-gray-700">4 Bed</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <MdInsertChartOutlined
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">10x10 m</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <AiOutlineLineChart
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">1600 m</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 290.599.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full lg:w-102 bg-white max-w-[98%]">
                <img
                  src="https://i.pinimg.com/736x/8d/a3/64/8da364298f2ee0972608bd86ccaaacae.jpg"
                  alt="Image Properties"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-x-2">
                    <FaLocationDot className="w-6 h-6" />
                    <h1 className="text-lg lg:text-xl font-bold">
                      Plengkung Permai, Solo
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-x-1">
                        <FaBed size={22} className="text-gray-700" />
                        <p className="text-gray-700">6 Bed</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <MdInsertChartOutlined
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">10x10 m</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <AiOutlineLineChart
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">1600 m</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 500.599.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full lg:w-102 bg-white max-w-[98%]">
                <img
                  src="https://i.pinimg.com/1200x/33/80/58/3380589d3796bf1a2dcbba9764ee94f0.jpg"
                  alt="Image Properties"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-x-2">
                    <FaLocationDot className="w-6 h-6" />
                    <h1 className="text-lg lg:text-xl font-bold">
                      Citraland, Surabaya Barat
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-x-1">
                        <FaBed size={22} className="text-gray-700" />
                        <p className="text-gray-700">2 Bed</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <MdInsertChartOutlined
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">10x10 m</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <AiOutlineLineChart
                          size={22}
                          className="text-gray-700"
                        />
                        <p className="text-gray-700">1600 m</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Rp. 900.599.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-primary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
