import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { AccordionProgramStudi } from "@/components/ui/Accordion/AccordionProgramStudi";
function LamaStudi() {
  return (
    <section className="bg-[#EDEDED] min-h-[200px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Lama Studi"
        subtitle=" Mengetahui lebih lanjut lama masa studi program sarjana sistem informasi  Fakultas komputer UPNVJ."
        textAlign="right"
      />

      <div className="flex flex-col space-y-5 text-justify text-[14px] font-medium">
        <p className="text-[14px] font-medium md:text-[24px]">
          Program Studi Sarjana Sistem Informasi di Fakultas Ilmu Komputer UPNVJ
          mencakup proses pembelajaran setara dengan 144 satuan kredit semester
          (SKS) yang dapat diselesaikan dalam waktu empat tahun. Mahasiswa
          berhak menyandang gelar Sarjana Ilmu Komputer (S.Kom.) setelah
          memperoleh minimum 144 SKS sesuai persyaratan kurikulum yang
          ditetapkan.
        </p>
      </div>
    </section>
  );
}

export default LamaStudi;
