import truckImage1 from "../assets/IMG_2691.jpg";
import truckImage2 from "../assets/IMG_2533.jpg";
import truckImage3 from "../assets/IMG_1710.jpg";
import truckImage4 from "../assets/IMG_2977.jpg";
import truckImage5 from "../assets/IMG_2978.jpg";
import truckImage6 from "../assets/IMG_2979.jpg";
import truckImage7 from "../assets/IMG_2981.jpg";
import truckImage8 from "../assets/IMG_2980.jpg";
import "./utils.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function Gallery() {
  return (
    <section id="gallery" className="section container gallery">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img loading="lazy" src={truckImage1} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage2} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage3} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage4} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage5} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage6} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage7} alt="Howatt Logistics Truck" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={truckImage8} alt="Howatt Logistics Truck" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Gallery;
