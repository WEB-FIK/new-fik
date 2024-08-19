import GaleriFoto from "@/components/KehidupanKampus/GaleriFoto/GaleriFoto";
import KehidupanKampusHeader from "@/components/KehidupanKampus/Header/Header";
import KehidupanKampusMahasiswa from "@/components/KehidupanKampus/KehidupanKampusMahasiswa/KehidupanKampusMahasiswa";
import KepanitiaanMahasiswa from "@/components/KehidupanKampus/KepanitiaanMahasisiwa/KepanitiaanMahasisiwa";
import OrganisasiMahasiswa from "@/components/KehidupanKampus/OrganisasiMahasiswa/OrganisasiMahasiswa";
import Testimonial from "@/components/KehidupanKampus/Testimonial/Testimonial";
import React from "react";

function page() {
  return (
    <div>
      <KehidupanKampusHeader />
      <KehidupanKampusMahasiswa />
      <OrganisasiMahasiswa />
      <KepanitiaanMahasiswa />
      <GaleriFoto />
      <Testimonial />
    </div>
  );
}

export default page;
