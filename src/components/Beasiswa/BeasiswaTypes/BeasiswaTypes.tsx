import BeasiswaCardList from "@/components/ui/BeasiswaCard/BeasiswaCardList";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";

function JenisBeasiswa() {
  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Jenis Beasiswa"
        subtitle="Fakultas Ilmu Komputer menyediakan beberapa jenis beasiswa"
        textAlign="left"
      />

      <div>
        <BeasiswaCardList />
      </div>
    </section>
  );
}

export default JenisBeasiswa;
