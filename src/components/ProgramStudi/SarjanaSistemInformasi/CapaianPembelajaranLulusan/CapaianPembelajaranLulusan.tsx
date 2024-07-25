import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { AccordionDemo } from "@/components/ui/Accordion/Accordion";
function CapaianPembelajaranLulusan() {
  return (
    <section className="min-h-[360px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Capaian Pembelajaran Lulusan"
        subtitle=" Mengetahui lebih lanjut Capaian Pembelajaran Lulusan  Fakultas komputer UPNVJ."
        textAlign="left"
      />

      <div className="flex flex-col space-y-5 text-justify text-[14px] font-medium">
        <AccordionDemo/>
      </div>
    </section>
  );
}

export default CapaianPembelajaranLulusan;
