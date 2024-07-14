"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import TwoPersons from "../../../../public/images/TwoPersons.webp";
function CarouselHomepage() {
  return (
    <section role="region">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={TwoPersons} alt="Rektorat UPN" role="img" className="w-full h-[320px] md:h-[745px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TwoPersons} alt="Rektorat UPN" role="img" className="w-full h-[320px] md:h-[745px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TwoPersons} alt="Rektorat UPN" role="img" className="w-full h-[320px] md:h-[745px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TwoPersons} alt="Rektorat UPN" role="img" className="w-full h-[320px] md:h-[745px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TwoPersons} alt="Rektorat UPN" role="img" className="w-full h-[320px] md:h-[745px]" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default CarouselHomepage;
