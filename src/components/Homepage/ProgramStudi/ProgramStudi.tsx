import React from "react";
import S1Informatika from "../../../../public/icons/S1Informatika.webp"
import S1Sisfor from "../../../../public/icons/S1Sisfor.webp"
import D3Sisfor from "../../../../public/icons/D3Sisfor.webp"
import S1SainsData from "../../../../public/icons/S1SainsData.webp"

import ProgramStudiCard from "@/components/ui/ProgramStudiCard/ProgramStudiCard";
export default function ProgramStudi() {
  return (
    <section className="px-4 py-8 min-h-screen space-y-3 md:px-[116px] md:flex md:flex-col md:justify-center md:space-y-8">
      <div className="flex flex-row items-center justify-between">
        <p className="text-[24px] font-extrabold md:text-[42px]">
          Fakultas Ilmu Komputer UPNVJ
        {/* <Image src={line} alt="line" width={135} height={0}/> */}
        </p>
        <hr className="min-w-[40%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]"/>
      </div>
      <div>
        <p className="text-primary-500 text-[14px] font-semibold md:text-[20px]">
        Program studi Fakultas Ilmu Komputer UPN Veteran Jakarta menawarkan jalur pendidikan yang terstruktur untuk membangun keterampilan dan pengetahuan di bidang yang diminati.
        </p>
      </div>

      <div className="space-y-4 flex flex-col md:flex-row md:space-x-6 md:space-y-0 md:items-center md:justify-between">
        <ProgramStudiCard icon={S1Informatika} programStudi="S1 Informatika" deskripsi="Pelajari dasar-dasar komputasi dan pemrograman untuk mengembangkan solusi inovatif di dunia teknologi."/>

        <ProgramStudiCard icon={S1Sisfor} programStudi="S1 Sistem Informasi" deskripsi="Menggabungkan teknologi dan manajemen untuk mengoptimalkan solusi informasi di organisasi."/>

        <ProgramStudiCard icon={D3Sisfor} programStudi="D3 Sistem Informasi" deskripsi="Dapatkan keterampilan praktis untuk mendukung dan mengelola sistem informasi dalam berbagai lingkungan bisnis."/>

        <ProgramStudiCard icon={S1SainsData} programStudi="S1 Sains Data" deskripsi="Kuasai analisis data untuk mengubah data menjadi wawasan berharga bagi pengambilan keputusan."/>
      </div>
    </section>
  );
}
