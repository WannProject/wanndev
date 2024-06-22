// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCardStack,
  RxPencil2,
  RxDesktop,
  RxGlobe,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// impoert required  modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCardStack />,
    title: "Data Science",
    description: "Mengekstrak wawasan dari data besar.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Pengembang perangkat lunak berkualitas tinggi.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Desain visual menawan dan fungsional.",
  },

  {
    icon: <RxGlobe />,
    title: "AI",
    description: "Kecerdasan algoritma adaptif & inovasi.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Meningkatkan visibilitas dan peringkat situs.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm;gap-x-0  group cursor-pointer hover:bg-[rgba(89,65,168,0.15)]
            transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent
                transition-all duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
