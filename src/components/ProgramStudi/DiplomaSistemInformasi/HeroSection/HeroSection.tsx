import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
function HeroSection() {
  return (
    <section className="min-h-[360px] md:min-h-[480px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px]">
      <SectionHeader
        title="Program Studi Diploma
Sistem Informasi"
        subtitle="Mengenal lebih lanjut gambaran umum  Fakultas komputer UPNVJ."
        textAlign="left"
      />

      <div className="flex flex-col space-y-5 text-justify text-[14px] font-medium md:text-[24px]">
        <p>
          Program Studi DIII Sistem Informasi pada kampus Bela Universitas
          Pembangunan Nasional Jakarta Negara menawarkan pendidikan berkualitas
          yang menggabungkan pemahaman mendalam tentang sistem informasi dengan
          keterampilan praktis dalam pemrograman, analisis data, dan bisnis
          analisis. Kurikulumnya didukung oleh pendekatan praktis dan proyek
          kolaboratif, mempersiapkan lulusan untuk menjadi programmer
          profesional yang mahir dalam pengembangan perangkat lunak, data analis
          yang terampil dalam menganalisis data untuk menghasilkan wawasan yang
          berharga, serta bisnis analis yang memiliki pemahaman mendalam tentang
          kebutuhan bisnis dan kemampuan untuk menghubungkan teknologi informasi
          dengan tujuan bisnis organisasi. Lulusan program ini dilengkapi dengan
          keterampilan komunikasi yang kuat dan kesadaran akan tanggung jawab,
          profesional, berintegritas menjadikan mereka siap untuk menghadapi
          tantangan di dunia industri teknologi informasi yang dinamis.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
