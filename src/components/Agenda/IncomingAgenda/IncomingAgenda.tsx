"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import AgendaCard from "@/components/ui/AgendaCard/AgendaCard";
import { agendaItems } from "@/data/dataAgenda";
import Link from "next/link";

function IncomingAgenda() {
  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <h2 className="text-3xl font-bold">Akan Datang</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {agendaItems.map((item, index) => {
            // Generate slug from the agenda title
            const slug = item.AgendaTitle.toLowerCase().replace(/\s+/g, "-");

            return (
              <SwiperSlide key={index}>
                <div>
                  <AgendaCard
                    image={item.imageSrc}
                    AgendaDate={item.AgendaDate}
                    AgendaMonth={item.AgendaMonth}
                    AgendaTitle={item.AgendaTitle}
                    AgendaHour={item.AgendaHour}
                    AgendaLocation={item.AgendaLocation}
                    slug={item.slug}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default IncomingAgenda;
