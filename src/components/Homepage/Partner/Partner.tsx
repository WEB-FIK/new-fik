import { PartnersSlider } from "@/components/ui/PartnersSlider/PartnersSlider";
import React from "react";
import CNPlus from "../../../../public/images/CNPlus.webp";
import amdocs from "../../../../public/images/amdocs.webp";
import ECCouncil from "../../../../public/images/ECCouncil.webp";
import MaxyAcademy from "../../../../public/images/MaxyAcademy.webp";
import Multimatics from "../../../../public/images/Multimatics.webp";
import UnivBinaDarma from "../../../../public/images/UnivBinaDarma.webp"; // Corrected image path

function Partner() {
  const partnerImagesTop = [
    CNPlus,
    amdocs,
    ECCouncil,
    MaxyAcademy,
    Multimatics,
    UnivBinaDarma,
  ];

  return (
    <section className="min-h-screen space-y-5 md:min-h-[600px] bg-[#EDEDED]">
      <div className="px-4 py-8 md:px-[116px] md:flex md:flex-col md:justify-center md:space-y-8">
        <div className="flex flex-row-reverse items-center justify-between">
          <p className="text-[24px] font-extrabold md:text-[42px]">Mitra</p>
          <hr className="w-[75%] border-primary-500 rounded-xl border-[3px]" />
        </div>

        <div>
          <p className="text-primary-500 text-[14px] font-semibold text-right md:text-[20px] md:pb-5">
            Mitra kolaborasi guna memperkaya pengembangan akademik dan
            profesional mahasiswa.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-5"> {/* Center the slider */}
        <PartnersSlider images={partnerImagesTop} />
        <PartnersSlider images={partnerImagesTop} direction="right"/>
      </div>
    </section>
  );
}

export default Partner;
