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
          Program Studi Sarjana Sistem Informasi pada kampus Bela Universitas
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

        <p>
          The DIII Information Systems Study Program at the Bela campus of the
          Jakarta Negara National Development University offers quality
          education that combines a deep understanding of information systems
          with practical skills in programming, data analysis, and business
          analysis. The curriculum is supported by a practical approach and
          collaborative projects, preparing graduates to become professional
          programmers skilled in software development, data analysts skilled in
          analyzing data to generate valuable insights, as well as business
          analysts who have a deep understanding of business needs and the
          ability to connect technology information with the organization’s
          business objectives. Graduates of this program are equipped with
          strong communication skills and an awareness of responsibility,
          professionalism, and integrity, making them ready to face challenges
          in the dynamic world of the information technology industry.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
