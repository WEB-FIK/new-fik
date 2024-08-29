import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const graduateProfiles = [
  {
    id: "PL01",
    title: "Sikap",
    content:
      "Lulusan memiliki sikap tanggung jawab dan nilai-nilai dasar Universitas berdasarkan nilai agama, moral, etika akademik dan semangat kewirausahan",
  },
  {
    id: "PL02",
    title: "Keterampilan Umum",
    content:
      "Lulusan memiliki kemampuan berpikir kritis, analitis, inovatif, mampu bekerja dalam tim, memiliki kemampuan manajerial tim, dan memiliki keterampilan komunikasi yang baik untuk menyelesaikan permasalahan bisnis",
  },
  {
    id: "PL03",
    title: "Pengetahuan",
    content:
      "Lulusan memiliki kemampuan menganalisis, merancang, membuat, dan melakukan evaluasi sistem informasi yang selaras dengan tujuan organisasi. (IS2020)",
  },
  {
    id: "PL04",
    title: "Keterampilan Khusus",
    content:
      "Lulusan memiliki kemampuan memahami, menerapkan dan mengintegrasikan model sistem, menggunakan metode dan berbagai teknik peningkatan bisnis proses yang mendatangkan suatu nilai untuk organisasi. (IS2020)",
  },
];

function ProfilLulusan() {
  return (
    <section className="min-h-[400px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Profil Lulusan"
        subtitle="Profil yang dimiliki lulusan Fakultas Ilmu Komputer UPNVJ."
        textAlign="right"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {graduateProfiles.map((graduateProfile) => (
          <div
            key={graduateProfile.id}
            className="w-full min-h-80 border rounded-[16px] p-5 flex flex-col items-center text-center"
          >
            <div className="text-[32px] font-semibold text-primary-500 mb-4">
              {graduateProfile.id}
            </div>
            <span className="font-bold text-[24px] mb-4">
              {graduateProfile.title}
            </span>
            <p className="text-[18px] text-[#6B7280]">
              {graduateProfile.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfilLulusan;
