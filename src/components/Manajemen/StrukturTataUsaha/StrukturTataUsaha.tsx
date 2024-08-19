"use client";

import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { koorTUDetails } from "@/data/manajemenDetails";
import { useAOS } from "@/hooks/useAOS";
import { useFilteredRoles } from "@/hooks/useFilteredRoles";

const StrukturTataUsaha = () => {
  useAOS();

  const filteredKoorTUDetails = useFilteredRoles(koorTUDetails, "Tata Usaha");

  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Sub Bagian Tata Usaha"
        subtitle="Susunan Sub Bagian Tata Usaha di Fakultas Ilmu komputer UPNVJ."
        textAlign="right"
      />
      <div className="w-full flex flex-col items-center space-y-5 md:pt-5 md:grid md:gap-4 md:space-y-0">
        {filteredKoorTUDetails.map((person, index: number) => {
          // Abstracted variables for readability and flexibility
          const colSpan = index === 0 ? "md:col-span-3" : "md:col-span-1";
          const aosType = index === 0 ? "fade-down" : "fade-up";

          return (
            <div
              className={`${colSpan} md:flex justify-center`}
              key={person.name}
              data-aos={aosType}
            >
              <StrukturManajemenCard {...person} showMenu />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StrukturTataUsaha;
