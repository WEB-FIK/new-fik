import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { dataAdministrasiSkripsi } from "@/data/dataFormLayananMahasiswa";
import LayananMahasiswaCard from "@/components/ui/LayananMahasiswaCard/LayananMahasiswaCard"; 

const AdministrasiSkripsi: React.FC = () => {
  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Administrasi Skripsi & Tugas Akhir"
        subtitle="Pengelolaan proses administrasi skripsi dan tugas akhir, termasuk pendaftaran sidang dan pembimbingan."
        textAlign="right"
      />
      <div className="flex justify-center items-center md:pt-8">
      <LayananMahasiswaCard data={dataAdministrasiSkripsi} />
      </div>
    </section>
  );
};

export default AdministrasiSkripsi;
