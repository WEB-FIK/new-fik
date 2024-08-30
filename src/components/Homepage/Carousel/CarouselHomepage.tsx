"use client";

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
import SelasarFIK from "../../../../public/images/SelasarFIK.webp";
import TestOnLab from "../../../../public/images/TestOnLab.webp";
import Labkom from "../../../../public/images/Labkom.webp";
import RektoratUPN from "../../../../public/images/RektoratUPN.webp";

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
          el: ".custom-pagination", // Custom class for pagination
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={RektoratUPN}
            alt="Rektorat UPN"
            role="img"
            className="w-full h-[320px] md:h-[745px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={SelasarFIK}
            alt="Selasar FIK"
            role="img"
            className="w-full h-[320px] md:h-[745px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={TestOnLab}
            alt="Test On Lab"
            role="img"
            className="w-full h-[320px] md:h-[745px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Labkom}
            alt="Labkom"
            role="img"
            className="w-full h-[320px] md:h-[745px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={TwoPersons}
            alt="Two Persons"
            role="img"
            className="w-full h-[320px] md:h-[745px]"
          />
        </SwiperSlide>
        <div className="custom-pagination"></div>
      </Swiper>
    </section>
  );
}

export default CarouselHomepage;
