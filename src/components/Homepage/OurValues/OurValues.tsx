"use client"

import React from "react";
import OurValuesCard from "@/components/ui/OurValuesCard/OurValuesCard";
import ZonaIntegritas from "../../../../public/icons/ZonaIntegritas.webp";
import BeraniJujurHebat from "../../../../public/icons/BeraniJujurHebat.webp";
import KerjaPrima from "../../../../public/icons/KerjaPrima.webp";
import StopKorupsi from "../../../../public/icons/StopKorupsi.webp";
import TolakGratifikasi from "../../../../public/icons/TolakGratifikasi.webp";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function OurValues() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen md:min-h-[550px] space-y-5 md:py-8">
      <div className="px-4 py-8 md:flex-col md:justify-center md:space-y-6 md:px-[116px] md:hidden" data-aos="fade-down">
        <div className="flex flex-row items-center justify-between" >
          <p className="text-[24px] font-extrabold">Our Values</p>
          <hr className="min-w-[60%] border-primary-500 rounded-xl border-[3px]" />
        </div>

        <div>
          <p className="text-primary-500 text-[14px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 p-4 space-y-5 flex flex-col md:space-y-0 lg:min-h-[550px] md:text-center md:justify-evenly md:items-center">
        <div className="hidden md:block" data-aos="fade-down">
          <p className="text-white text-[36px] font-bold">Our Values</p>
        </div>
        <div className="hidden md:block" data-aos="fade-down">
          <p className="text-[20px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.{" "}
          </p>
        </div>
        <div className="space-y-5 flex flex-col justify-center items-center md:flex md:flex-row md:gap-x-5 md:space-y-0" data-aos="fade-up">
          <OurValuesCard image={ZonaIntegritas} />
          <OurValuesCard image={StopKorupsi} />
          <OurValuesCard image={TolakGratifikasi} />
          <OurValuesCard image={KerjaPrima} />
          <OurValuesCard image={BeraniJujurHebat} />
        </div>
      </div>
    </section>
  );
}

export default OurValues;
