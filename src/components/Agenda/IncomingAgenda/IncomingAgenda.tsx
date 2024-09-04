"use client";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"; // Ensure this file includes your Swiper styles and any custom styling
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import AgendaCard from "@/components/ui/AgendaCard/AgendaCard";
import RektoratUPN from "../../../../public/images/RektoratUPN.webp";
import { agendaItems } from "@/data/dataAgenda";

function IncomingAgenda() {
  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader title="Akan Datang" subtitle="" textAlign="left" />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            // When the window is >= 640px
            640: {
              slidesPerView: 2,
            },
            // When the window is >= 768px
            768: {
              slidesPerView: 3,
            },
            // When the window is >= 1024px
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {agendaItems.map((item, index) => (
            <SwiperSlide key={index}>
              <AgendaCard
                image={item.imageSrc}
                AgendaDate={item.AgendaDate}
                AgendaMonth={item.AgendaMonth}
                AgendaTitle={item.AgendaTitle}
                AgendaHour={item.AgendaHour}
                AgendaLocation={item.AgendaLocation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default IncomingAgenda;
