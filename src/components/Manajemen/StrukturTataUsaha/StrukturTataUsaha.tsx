"use client";

import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { koorTUDetails } from "@/data/manajemenDetails";
import { useAOS } from "@/hooks/useAOS";

const StrukturTataUsaha = () => {
  useAOS();
  return (
    <section className="min-h-[400px] w-full px-4 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Sub Bagian Tata Usaha"
        subtitle="Susunan Sub Bagian Tata Usaha di Fakultas Ilmu komputer UPNVJ."
        textAlign="right"
      />
      <div className="w-full flex flex-col items-center space-y-5 md:pt-5 md:grid md:gap-4 md:space-y-0">
        {koorTUDetails[0].role === "Tata Usaha" &&
          koorTUDetails.map((person, index: number) => (
            <div
              className={`md:col-span-${
                index === 0 ? 3 : 1
              } md:flex justify-center`}
              key={person.name}
              data-aos={index === 0 ? "fade-down" : "fade-up"}
            >
              <StrukturManajemenCard {...person} showMenu />
            </div>
          ))}
      </div>
    </section>
  );
};

export default StrukturTataUsaha;
