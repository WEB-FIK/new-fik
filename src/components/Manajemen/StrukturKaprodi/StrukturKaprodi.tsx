"use client";

import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { kaprodiDetails } from "@/data/manajemenDetails";
import { useAOS } from "@/hooks/useAOS";
import { useFilteredRoles } from "@/hooks/useFilteredRoles";

const getAosType = (index: number) => {
  const aosTypes = ["fade-right", "fade-up", "fade-left"];
  return aosTypes[index % aosTypes.length];
};

const StrukturKaprodi = () => {
  useAOS();

  const filteredKaprodi = useFilteredRoles(kaprodiDetails, "Kaprodi");

  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Ketua Program Studi"
        subtitle="Susunan Ketua Program Studi di Fakultas Ilmu komputer UPNVJ."
        textAlign="left"
      />
      <div className="md:grid md:grid-cols-3 space-y-5 md:space-y-0 md:pt-5">
        {filteredKaprodi.map((person, index) => (
          <div
            className="flex flex-col items-center justify-center md:flex-row"
            key={person.name}
            data-aos={getAosType(index)}
          >
            <StrukturManajemenCard
              image={person.image}
              name={person.name}
              position={person.position}
              role={person.role}
              profileRoute={person.profileRoute}
              showMenu
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrukturKaprodi;
