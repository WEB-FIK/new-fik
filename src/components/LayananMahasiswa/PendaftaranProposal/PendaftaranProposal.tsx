import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { dataPendaftaranProposal } from "@/data/PermohonanSuratAkademik";
import LayananMahasiswaCard from "@/components/ui/LayananMahasiswaCard/LayananMahasiswaCard"; 

const PendaftaranProposal: React.FC = () => {
  return (
    <section className="w-full px-4 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Pendaftaran Proposal"
        subtitle="Pendaftaran sidang dan pembimbing untuk proposal penelitian mahasiswa."
        textAlign="left"
      />
      <div className="flex justify-center items-center md:pt-8">
      <LayananMahasiswaCard data={dataPendaftaranProposal   } />
      </div>
    </section>
  );
};

export default PendaftaranProposal;
