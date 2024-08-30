// components/ProfilLulusan.tsx
import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import GraduateProfileCard from "@/components/ui/ProfilLulusan/ProfilLulusanCard";
import { dataProfilLulusan } from "@/data/dataProfilLulusan";

function ProfilLulusan() {
  return (
    <section className="min-h-[400px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Profil Lulusan"
        subtitle="Profil yang dimiliki lulusan Fakultas Ilmu Komputer UPNVJ."
        textAlign="right"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {dataProfilLulusan.map((profile) => (
          <GraduateProfileCard
            key={profile.id}
            id={profile.id}
            title={profile.title}
            content={profile.content}
          />
        ))}
      </div>
    </section>
  );
}

export default ProfilLulusan;
