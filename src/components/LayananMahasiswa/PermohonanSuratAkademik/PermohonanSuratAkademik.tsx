import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { dataPermohonanSuratAkademik } from "@/data/dataFormLayananMahasiswa";
import LayananMahasiswaCard from "@/components/ui/LayananMahasiswaCard/LayananMahasiswaCard"; 

const PermohonanSuratAkademik: React.FC = () => {
  return (
    <section className="w-full px-4 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Permohonan Surat Akademik"
        subtitle="Pengajuan berbagai surat keterangan akademik untuk keperluan mahasiswa."
        textAlign="left"
      />
      <div className="flex justify-center items-center md:pt-8">
      <LayananMahasiswaCard data={dataPermohonanSuratAkademik} />
      </div>
    </section>
  );
};

export default PermohonanSuratAkademik;
