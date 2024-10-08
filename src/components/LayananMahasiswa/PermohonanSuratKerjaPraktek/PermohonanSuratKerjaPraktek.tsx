import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { dataPermohonanSuratKerjaPraktek } from "@/data/dataFormLayananMahasiswa";
import LayananMahasiswaCard from "@/components/ui/LayananMahasiswaCard/LayananMahasiswaCard"; 

const PermohonanSuratKerjaPraktek: React.FC = () => {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Permohonan Surat Kerja Praktek (KP)"
        subtitle="Pengajuan surat terkait kegiatan kerja praktek mahasiswa."
        textAlign="right"
      />
      <div className="flex justify-center items-center md:pt-8">
      <LayananMahasiswaCard data={dataPermohonanSuratKerjaPraktek} />
      </div>
    </section>
  );
};

export default PermohonanSuratKerjaPraktek;
