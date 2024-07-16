"use client";

import BeritaCard from "@/components/ui/BeritaCard/BeritaCard";
import Button from "@/components/ui/Button/Button";
import React from "react";
import FakultiInformatik from "../../../../public/images/FakultiInformatik.webp";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function Berita() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="px-4 py-8 min-h-screen space-y-5 md:px-[116px] md:flex md:flex-col md:justify-center md:space-y-8">
      <div
        className="flex flex-row-reverse items-center justify-between"
        data-aos="fade-down"
      >
        <p className="text-[24px] font-extrabold md:text-[42px]">Berita</p>
        <hr className="w-[75%] border-primary-500 rounded-xl border-[3px]" />
      </div>

      <div>
        <p
          className="text-primary-500 text-[14px] font-semibold text-right md:text-[20px] md:pb-5"
          data-aos="fade-down"
        >
          Ikuti berita terbaru tentang pencapaian, acara, perkembangan, dan hal
          lainnya.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center md:gap-y-8 space-y-5 md:flex md:flex-row md:flex-wrap md:justify-between md:space-y-0 md:items-center md:pb-5">
        <div data-aos="fade-right">
          <BeritaCard
            image={FakultiInformatik}
            title="Selamat & Sukses Atas Pembukaan Program Studi Baru: S1-Sains Data"
            desc="Pengumuman ucapan selamat dan sukses atas pembukaan program studi baru, yaitu S1-Sains Data. Program ini diharapkan akan memberikan kontribusi signifikan dalam menghasilkan lulusan yang kompeten di bidang ilmu data."
          />
        </div>

        <div data-aos="fade-up">
          <BeritaCard
            image={FakultiInformatik}
            title="Dekan FIK UPNVJ Sharing Pengalaman pada Mahasiswa Riset di Pusat NAv6, USM Malaysia"
            desc="Dekan Fakultas Ilmu Komputer (FIK) Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ) berbagi pengalaman dengan mahasiswa riset di Pusat NAv6, Universiti Sains Malaysia (USM). Kegiatan ini merupakan bagian dari upaya kolaborasi dan peningkatan pengetahuan antar institusi pendidikan."
          />
        </div>

        <div data-aos="fade-left">
          <BeritaCard
            image={FakultiInformatik}
            title="Pelaksanaan Ujian Akhir Semester (UAS) Genap TA. 2023/2024 FIK UPNVJ"
            desc="Pengumuman mengenai pelaksanaan Ujian Akhir Semester (UAS) Genap Tahun Akademik 2023/2024 di Fakultas Ilmu Komputer (FIK) Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ). Ujian ini merupakan evaluasi akhir dari proses pembelajaran yang telah dilalui oleh para mahasiswa selama semester genap."
          />
        </div>

        <div className="hidden md:block w-full md:flex md:justify-center md:pt-5">
          <Button
            text="Berita lainnya"
            path="/berita"
            bgColor="primary-500"
            variant="whiteWithPrimaryBorder"
            width="427px"
          />
        </div>

        <div className="block md:hidden w-full md:flex md:justify-center md:pt-5">
          <Button
            text="Berita lainnya"
            path="/berita"
            bgColor="primary-500"
            variant="whiteWithPrimaryBorder"
            width="100%"
          />
        </div>
      </div>
    </section>
  );
}

export default Berita;
