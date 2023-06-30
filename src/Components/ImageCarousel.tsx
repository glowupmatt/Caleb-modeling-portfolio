import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "./ImageCarousel.scss";

export default function ImageCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="../../imageSlider/IMG_1082.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../imageSlider/LB_CC23C_Caleb_2_B.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../imageSlider/Photo_Dec_13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../imageSlider/Photo_Mar_29.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../imageSlider/IMG_1082.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../imageSlider/LB_CC23C_Caleb_2_B.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
