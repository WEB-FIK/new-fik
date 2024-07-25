import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const graduateProfiles = [
    {
        id: "PLO1",
        title: "Sikap",
        content: " Lulusan memiliki sikap tanggung jawab dan nilai-nilai dasar Universitas berdasarkan nilai agama, moral, etika akademik dan semangat kewirausahan"
    },
    {
        id: "PLO2",
        title: "Keterampilan Umum",
        content: "Lulusan memiliki kemampuan berpikir kritis, analitis, inovatif, mampu bekerja dalam tim, memiliki kemampuan manajerial tim, dan memiliki keterampilan komunikasi yang baik untuk menyelesaikan permasalahan bisnis"
    },
    {
        id: "PL03",
        title: "Pengetahuan",
        content: "Lulusan memiliki kemampuan menganalisis, merancang, membuat, dan melakukan evaluasi sistem informasi yang selaras dengan tujuan organisasi. (IS2020)"
    },
    {
        id: "PL04",
        title: "Keterampilan Khusus",
        content: "Lulusan memiliki kemampuan memahami, menerapkan dan mengintegrasikan model sistem, menggunakan metode dan berbagai teknik peningkatan bisnis proses yang mendatangkan suatu nilai untuk organisasi. (IS2020)"
    }
]

function ProfilLulusan() {
  return (
    <section className="min-h-[360px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Profil Lulusan"
        subtitle="Profil yang dimiliki lulusan Fakultas Ilmu Komputer UPNVJ."
        textAlign="right"
      />

      <div className="flex flex-col space-y-5 text-justify text-[14px] font-medium">
        {graduateProfiles.map((graduateProfile) => (
          <div key={graduateProfile.id}>
            <div className="flex items-center text-[18px] font-semibold gap-x-1">
              <p>{graduateProfile.id}</p>
              <span className="text-primary-500">({graduateProfile.title})</span>
            </div>
            <p>
              {graduateProfile.content}
            </p>
          </div> 
        ))}
      </div>
    </section>
  );
}

export default ProfilLulusan;
