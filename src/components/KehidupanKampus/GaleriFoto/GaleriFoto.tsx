import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";
import { dataGaleriFoto } from "@/data/kehidupanMahasiswa";
import GaleriFotoCard from "@/components/ui/GaleriFotoCard/GaleriFotoCard";
function GaleriFoto() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 gap-x-3 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Galeri Foto FIK UPNVJ"
        subtitle="Susunan organisasi dan peran-peran yang ada di dalam dekanat Fakultas Ilmu Komputer UPNVJ."
        textAlign="right"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataGaleriFoto.map((data) => (
          <GaleriFotoCard data={data} key={data.description} />
        ))}
      </div>
    </section>
  );
}

export default GaleriFoto;
