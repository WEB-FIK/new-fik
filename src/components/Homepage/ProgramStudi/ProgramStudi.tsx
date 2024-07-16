"use client";
import React from "react";
import S1Informatika from "../../../components/Icons/S1Informatika";
import S1Sisfor from "../../../components/Icons/S1Sisfor";
import D3Sisfor from "../../../components/Icons/D3Sisfor";
import S1SainsData from "../../../components/Icons/S1SainsData";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

import ProgramStudiCard from "@/components/ui/ProgramStudiCard/ProgramStudiCard";

export default function ProgramStudi() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <section className="px-4 py-8 min-h-screen space-y-3 md:px-[116px] md:flex md:flex-col md:justify-center md:space-y-8">
      <div
        className="flex flex-row items-center justify-between"
        data-aos="fade-down"
      >
        <p className="text-[24px] font-extrabold md:text-[42px]">
          Fakultas Ilmu Komputer UPNVJ
          {/* <Image src={line} alt="line" width={135} height={0}/> */}
        </p>
        <hr className="min-w-[40%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p
          className="text-primary-500 text-[14px] font-semibold md:text-[20px]"
          data-aos="fade-down"
        >
          Program studi Fakultas Ilmu Komputer UPN Veteran Jakarta menawarkan
          jalur pendidikan yang terstruktur untuk membangun keterampilan dan
          pengetahuan di bidang yang diminati.
        </p>
      </div>

      <div className="space-y-4 flex flex-col justify-center items-center md:flex-row md:space-x-6 md:space-y-0 md:items-center md:justify-between">
        <div data-aos="fade-right">
          <ProgramStudiCard
            icon={S1Informatika}
            programStudi="S1 Informatika"
            deskripsi="Pelajari dasar-dasar komputasi dan pemrograman untuk mengembangkan solusi inovatif di dunia teknologi."
          />
        </div>
        <div data-aos="fade-up">
          <ProgramStudiCard
            icon={S1Sisfor}
            programStudi="S1 Sistem Informasi"
            deskripsi="Menggabungkan teknologi dan manajemen untuk mengoptimalkan solusi informasi di organisasi."
          />
        </div>
        <div data-aos="fade-left">
          <ProgramStudiCard
            icon={S1SainsData}
            programStudi="S1 Sains Data"
            deskripsi="Kuasai analisis data untuk mengubah data menjadi wawasan berharga bagi pengambilan keputusan."
          />
        </div>
        <div data-aos="fade-down">
          <ProgramStudiCard
            icon={D3Sisfor}
            programStudi="D3 Sistem Informasi"
            deskripsi="Dapatkan keterampilan praktis untuk mendukung dan mengelola sistem informasi dalam berbagai lingkungan bisnis."
          />
        </div>
      </div>
    </section>
  );
}
