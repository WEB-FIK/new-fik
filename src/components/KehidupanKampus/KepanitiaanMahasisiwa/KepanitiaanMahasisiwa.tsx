import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";
import { dataKepanitiaanMahasisiwa } from "@/data/kehidupanMahasiswa";
import KehidupanMahasiswaCard from "@/components/ui/KehidupanMahasiswaCard/KehidupanMahasiswaCard";
function KepanitiaanMahasiswa() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 gap-x-3 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Kepanitiaan Mahasiswa"
        subtitle="Kepanitiaan Mahasiswa yang terdapat di dalam  Fakultas Ilmu Komputer UPNVJ."
        textAlign="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataKepanitiaanMahasisiwa.map((org) => (
          <KehidupanMahasiswaCard key={org.title} data={org} />
        ))}
      </div>
    </section>
  );
}

export default KepanitiaanMahasiswa;
