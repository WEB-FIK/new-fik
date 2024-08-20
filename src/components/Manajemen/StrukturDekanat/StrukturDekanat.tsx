"use client";

import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { dekanatDetails } from "@/data/manajemenDetails";
import { useAOS } from "@/hooks/useAOS";
import { useFilteredRoles } from "@/hooks/useFilteredRoles";

const StrukturDekanat: React.FC = () => {
  useAOS();

  const dekanatPeople = useFilteredRoles(dekanatDetails, "Dekanat");
  const dekanatTopPerson = dekanatPeople[0];
  const dekanatBottomPerson = dekanatPeople.slice(1);
  const sectionClasses =
    "min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]";
  const flexCenterClasses = "flex justify-center";

  return (
    <section className={sectionClasses}>
      <SectionHeader
        title="Struktur Dekanat FIK"
        subtitle="Susunan organisasi dan peran-peran yang ada di dalam dekanat Fakultas komputer UPNVJ."
        textAlign="right"
      />

      <div className={`${flexCenterClasses} mb-5 md:mb-0`}>
        <div className={flexCenterClasses} data-aos="fade-down">
          {dekanatTopPerson && (
            <StrukturManajemenCard {...dekanatTopPerson} showMenu />
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
        {dekanatBottomPerson.map((person) => (
          <div
            className={flexCenterClasses}
            key={person.name}
            data-aos="fade-up"
          >
            <StrukturManajemenCard {...person} showMenu />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrukturDekanat;
