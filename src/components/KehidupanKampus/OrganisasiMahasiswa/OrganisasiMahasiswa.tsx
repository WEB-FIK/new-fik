import KehidupanMahasiswaCard from "@/components/ui/KehidupanMahasiswaCard/KehidupanMahasiswaCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";
import { dataOrganisasiMahasiswa } from "@/data/kehidupanMahasiswa";

const OrganisasiMahasiswa: React.FC = () => {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 gap-x-3 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Organisasi Mahasiswa"
        subtitle="Kumpulan Organisasi Mahasiswa yang ada di dalam Fakultas Ilmu Komputer UPNVJ."
        textAlign="right"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataOrganisasiMahasiswa.map((org) => (
          <KehidupanMahasiswaCard key={org.title} data={org} />
        ))}
      </div>
    </section>
  );
};

export default OrganisasiMahasiswa;
