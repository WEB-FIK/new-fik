import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
function HeroSection() {
  return (
    <section className="min-h-[360px] md:min-h-[480px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px]">
      <SectionHeader
        title="Program Studi Sarjana
Sistem Informasi"
        subtitle="Mengenal lebih lanjut gambaran umum  Fakultas komputer UPNVJ."
        textAlign="left"
      />

      <div className="flex flex-col space-y-5 text-justify text-[14px] font-medium md:text-[24px]">
        <p>
          Program Studi Sistem Informasi Program Sarjana, Fakultas Ilmu Komputer
          UPN “Veteran” Jakarta adalah salah satu Program Studi yang
          melaksanakan penyelenggaraan pendidikan Sarjana (S-1) dan telah
          memperoleh pengesahan akreditasi BAN-PT berdasarkan keputusan BAN-PT
          No: 2277/SK/BAN-PT/Akred/S/VII/2019 dengan peringkat “B”, status
          akreditasi ini akan berakhir pada bulan Juli 2024.
        </p>

        <p>
          Program Sarjana Sistem Informasi (SI) adalah program pendidikan tinggi
          yang memadukan teknologi informasi dengan konsep manajemen bisnis.
          Program ini bertujuan untuk menghasilkan lulusan yang memiliki
          pemahaman mendalam tentang bagaimana teknologi informasi dapat
          digunakan secara efektif untuk mendukung tujuan bisnis dan organisasi.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
