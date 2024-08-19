"use client";

import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { kepalaLabDetails } from "@/data/manajemenDetails";
import { useAOS } from "@/hooks/useAOS";

const StrukturKepalaLab = () => {
  useAOS();
  const [bottomPerson, ...topPeople] = kepalaLabDetails;

  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Laboratorium"
        subtitle="Susunan Kepala Laboratorium di Fakultas Ilmu komputer UPNVJ."
        textAlign="left"
      />
      <div className="w-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
        {kepalaLabDetails[0].role === "Kepala Lab" &&
          topPeople.map((person, index: number) => (
            <div
              className="md:flex justify-center"
              key={person.name}
              data-aos="fade-up"
            >
              <StrukturManajemenCard {...person} showMenu />
            </div>
          ))}
      </div>
      <div className="w-full flex justify-center mb-5 md:mb-0">
        <div className="md:flex justify-center" data-aos="fade-down">
          <StrukturManajemenCard {...bottomPerson} showMenu />
        </div>
      </div>
    </section>
  );
};

export default StrukturKepalaLab;
