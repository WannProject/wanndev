import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// import next image
import Image from "next/image";

// icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://wannproject.github.io/landing-page-tn-crab/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://wannproject.github.io/MyPortfolio-Kurniawan/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://wannproject.github.io/wnbrand/",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://wannproject.github.io/Portfolio_Design_01/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb5.jpg",
          link: "https://wannproject.github.io/coffe-time/",
        },
        {
          title: "title",
          path: "/thumb6.jpg",
          link: "https://wannproject.github.io/Cafe_Resto/",
        },
        {
          title: "title",
          path: "/thumb7.jpg",
          link: "https://wannproject.github.io/platform-login/",
        },
        {
          title: "title",
          path: "/thumb8.jpg",
          link: "https://wannproject.github.io/travel-page/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Link href={image.link} target="_blank">
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l
                      from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700"
                    ></div>
                    {/* title */}
                    <div
                      className="absolute bottom-0 translate-y-full 
                      group-hover:-translate-y-10 group-hover:xl-translate-y-20 
                      transition-all duration-300"
                    >
                      <div
                        className="flex items-center gap-x-2 text-[13px] 
                        tracking-[0.2m]"
                      >
                        {/* title part1 */}
                        <div className="delay-100">LIVE</div>
                        {/* title part2 */}
                        <div
                          className="translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150"
                        >
                          PROJECT
                        </div>
                        {/* icon */}
                        <div
                          className="text-xl translate-y-[500%]
                          group-hover:translate-y-0 transition-all 
                          duration-300 delay-200"
                        >
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
