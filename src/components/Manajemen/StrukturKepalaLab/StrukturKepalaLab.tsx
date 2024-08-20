"use client";

import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { kepalaLabDetails } from "@/data/manajemenDetails";
import { useAOS } from "@/hooks/useAOS";
import { useFilteredRoles } from "@/hooks/useFilteredRoles";

const StrukturKepalaLab = () => {
  useAOS();

  const topPeople = useFilteredRoles(kepalaLabDetails, "Kepala Lab");

  const [bottomPerson, ...otherTopPeople] = topPeople;

  const renderCard = (
    person: (typeof kepalaLabDetails)[0],
    index: number,
    aosType: string
  ) => (
    <div
      className="md:flex justify-center"
      key={person.name}
      data-aos={aosType}
    >
      <StrukturManajemenCard {...person} showMenu />
    </div>
  );

  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Laboratorium"
        subtitle="Susunan Kepala Laboratorium di Fakultas Ilmu komputer UPNVJ."
        textAlign="left"
      />
      <div className="w-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
        {otherTopPeople.map((person, index) =>
          renderCard(person, index, "fade-up")
        )}
      </div>
      {bottomPerson && (
        <div className="w-full flex justify-center mb-5 md:mb-0">
          {renderCard(bottomPerson, 0, "fade-down")}
        </div>
      )}
    </section>
  );
};

export default StrukturKepalaLab;
