import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const graduateProfiles = [
  {
    id: "PL01",
    title: "Sikap",
    content:
      " Lulusan memiliki sikap tanggung jawab dan nilai-nilai dasar Universitas berdasarkan nilai agama, moral, etika akademik dan semangat kewirausahan",
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

      <div className="flex flex-col justify-center items-center space-y-5 text-[14px] font-medium md:flex-row md:space-y-0 md:grid-cols-4 md:justify-between">
        {graduateProfiles.map((graduateProfile) => (
          <div
            key={graduateProfile.id}
            className="w-[300px] min-h-[350px] border rounded-[16px] p-5 flex flex-col justify-center items-center gap-y-4"
          >
            <div className="text-[32px] flex items-center justify-center font-semibold gap-x-1 text-primary-500">
              <p>{graduateProfile.id}</p>
            </div>
            <span className="font-bold text-center text-[24px] ">
              {graduateProfile.title}
            </span>
            <p className="text-center text-[18px] text-[#6B7280]">{graduateProfile.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfilLulusan;
