"use client";

import AgendaCard from "@/components/ui/AgendaCard/AgendaCard";
import React from "react";
import RektoratUPN2 from "../../../../public/images/RektoratUPN2.webp";
import Button from "@/components/ui/Button/Button";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function Agenda() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="overflow-hidden px-4 py-8 min-h-screen space-y-5 md:px-[116px] md:flex md:flex-col md:justify-center md:space-y-8">
      <div
        className="flex flex-row-reverse items-center justify-between"
        data-aos="fade-down"
      >
        <p className="text-[24px] font-extrabold md:text-[42px]">Agenda</p>
        <hr className="w-[65%] border-primary-500 rounded-xl border-[3px]" />
      </div>

      <div className="space-y-5">
        <p
          className="text-primary-500 text-[14px] font-semibold text-right md:text-[20px]"
          data-aos="fade-down"
        >
          Jelajahi jadwal kegiatan dan acara terbaru yang diselenggarakan oleh
          Fakultas Ilmu Komputer UPN Veteran Jakarta
        </p>
        <div
          className="space-y-5 w-full flex flex-col justify-center items-center md:gap-y-8 md:flex md:flex-row md:flex-wrap md:justify-between md:space-y-0 md:items-center"
          data-aos="fade-up"
        >
          <div>
            <AgendaCard
              image={RektoratUPN2}
              AgendaDate="25"
              AgendaMonth="Feb"
              AgendaTitle="Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7"
              AgendaHour="10:00 WIB - 16:00 WIB"
              AgendaLocation="Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta"
              slug="seminar-nasional-senamika-7"
            />
          </div>
          <div>
            <AgendaCard
              image={RektoratUPN2}
              AgendaDate="25"
              AgendaMonth="Feb"
              AgendaTitle="Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7"
              AgendaHour="10:00 WIB - 16:00 WIB"
              AgendaLocation="Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta
          "
              slug="seminar-nasional-senamika-7"
            />
          </div>

          <div>
            <AgendaCard
              image={RektoratUPN2}
              AgendaDate="25"
              AgendaMonth="Feb"
              AgendaTitle="Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7"
              AgendaHour="10:00 WIB - 16:00 WIB"
              AgendaLocation="Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta
          "
              slug="seminar-nasional-senamika-7"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:flex md:justify-center md:pt-5">
        <Button
          text="Agenda lainnya"
          path="/berita"
          bgColor="primary-500"
          variant="whiteWithPrimaryBorder"
          width="427px"
        />
      </div>

      <div className="block md:hidden w-full md:flex md:justify-center md:pt-5">
        <Button
          text="Agenda lainnya"
          path="/berita"
          bgColor="primary-500"
          variant="whiteWithPrimaryBorder"
          width="100%"
        />
      </div>
    </section>
  );
}

export default Agenda;
