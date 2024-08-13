"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function LoginSwiper() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Specify custom pagination element
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        modules={[Autoplay, Pagination]}
        simulateTouch={false}
        className="mySwiper"
      >
        <SwiperSlide className="flex border border-primary-500 flex-col gap-4 py-8 xl:py-16">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full mr-4 bg-slate-200"></div>
              <div>
                <h3 className="text-lg font-semibold">Keisha Lovana</h3>
                <p className="text-gray-600 text-sm">Mahasiswa</p>
                <p className="text-gray-600 text-sm">D3 Sistem Informasi</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Bergabung dengan BEM FIK UPNVJ adalah pengalaman yang sangat
              berharga. Saya belajar banyak tentang kepemimpinan, komunikasi,
              dan bagaimana mengelola organisasi dengan baik.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex border border-primary-500 flex-col gap-4 py-8 xl:py-16">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full mr-4 bg-slate-200"></div>
              <div>
                <h3 className="text-lg font-semibold">Keisha Lovana</h3>
                <p className="text-gray-600 text-sm">Mahasiswa</p>
                <p className="text-gray-600 text-sm">D3 Sistem Informasi</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Bergabung dengan BEM FIK UPNVJ adalah pengalaman yang sangat
              berharga. Saya belajar banyak tentang kepemimpinan, komunikasi,
              dan bagaimana mengelola organisasi dengan baik.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex border border-primary-500 flex-col gap-4 py-8 xl:py-16">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-full mr-4 bg-slate-200"></div>
              <div>
                <h3 className="text-lg font-semibold">Keisha Lovana</h3>
                <p className="text-[#8D8BA7] text-sm">Mahasiswa</p>
                <p className="text-[#8D8BA7] text-sm">D3 Sistem Informasi</p>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm">
              Bergabung dengan BEM FIK UPNVJ adalah pengalaman yang sangat
              berharga. Saya belajar banyak tentang kepemimpinan, komunikasi,
              dan bagaimana mengelola organisasi dengan baik.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination"></div>
    </div>
  );
}
