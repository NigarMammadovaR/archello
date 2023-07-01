
import SwiperCore, { EffectFade, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.min.css";
import slider1 from "../../styles/images/slider1.webp";
import slider2 from "../../styles/images/slider2.webp";
import slider3 from "../../styles/images/slider3.webp";
import slider4 from "../../styles/images/slider4.webp";

import { useRef, useEffect } from "react";


SwiperCore.use([EffectFade, Pagination, Autoplay, Navigation]);

export type CarouselProps = {};

export default function Carousel() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    return () => {
      const prevButton = document.querySelector(".prevButton");
      const nextButton = document.querySelector(".nextButton");
      if (prevButton && nextButton) {
        prevButton.removeEventListener("click", handlePrevButtonClick);
        nextButton.removeEventListener("click", handleNextButtonClick);
      }
    };
  }, []);


  return (
    <div className="carousel">
      <h1>Spotlight</h1>

      <Swiper
        effect="fade"
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          const prevButton = document.querySelector(".prevButton");
          const nextButton = document.querySelector(".nextButton");
          if (prevButton && nextButton) {
            prevButton.addEventListener("click", handlePrevButtonClick);
            nextButton.addEventListener("click", handleNextButtonClick);
          }
        }}


        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        watchSlidesProgress
      >
        <SwiperSlide>
          <img src={slider1} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="test" />
        </SwiperSlide>
      </Swiper>
 
      <div className="prevButton">
        {/* <IoIosArrowBack /> */}
      </div>
      <div className="nextButton">
        {/* <IoIosArrowForward /> */}
      </div>
    
    </div>
  );
}
