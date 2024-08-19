import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";

function KehidupanKampusMahasiswa() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 gap-x-3 md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Kehidupan Mahasiswa Fasilkom UPNVJ"
        subtitle="Mengetahui Kehidupan Mahasiswa yang ada di dalam Fakultas Ilmu Komputer UPNVJ."
        textAlign="left"
      />

      <div className="text-[14px] md:text-[24px] font-medium space-y-5 text-justify">
        <p>
          Fasilkom UPNVJ adalah tempat berkumpulnya individu-individu kreatif
          dan berprestasi dari seluruh Indonesia. Suasana di Fasilkom UPNVJ kaya
          akan tradisi, mencakup pengembangan ilmu, kreativitas, dan
          kepemimpinan. Ini tercermin dalam berbagai kegiatan organisasi
          mahasiswa dan acara yang diorganisir oleh mahasiswa di kampus.
        </p>
        <p>
          Selain itu, Fasilkom UPNVJ menawarkan berbagai program dan fasilitas
          yang mendukung perkembangan akademis dan non-akademis mahasiswa.
          Berbagai seminar, workshop, dan kegiatan ekstrakurikuler rutin
          diadakan untuk meningkatkan keterampilan dan wawasan mahasiswa. Dosen
          dan staf pengajar di Fasilkom UPNVJ juga sangat mendukung dan berperan
          aktif dalam membimbing mahasiswa untuk mencapai potensi terbaik
          mereka. Keberagaman latar belakang dan pengalaman mahasiswa memperkaya
          interaksi dan kolaborasi, menciptakan lingkungan belajar yang dinamis
          dan inspiratif.
        </p>
      </div>
    </section>
  );
}

export default KehidupanKampusMahasiswa;
