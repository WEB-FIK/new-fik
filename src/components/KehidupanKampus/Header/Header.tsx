"use client";

import React from "react";
import Image from "next/image";
import KehidupanKampusHeaderMobile from "../../../../public/images/KehidupanKampusHeaderMobile.png";
import KehidupanKampusHeaderDesktop from "../../../../public/images/KehidupanKampusHeaderDesktop.png";
import { useAOS } from "@/hooks/useAOS";

const ResponsiveHeaderContent = () => {
  return (
    <>
      <div className="relative w-full h-[279px] block md:hidden">
        <Image
          src={KehidupanKampusHeaderMobile}
          alt="Kehidupan Kampus Fakultas Ilmu Komputer Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-white text-right px-4">
          <div
            className="w-[90%] font-bold text-[29px] space-y-2 text-left"
            data-aos="fade-right"
          >
            <p>
              Kehidupan Kampus <br />
              Fakultas Ilmu Komputer
            </p>
            <p className="font-bold text-[18px] text-left" data-aos="fade-up">
              UPN Veteran Jakarta
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[550px] hidden md:block">
        <Image
          src={KehidupanKampusHeaderDesktop}
          alt="Kehidupan Kampus Fakultas Ilmu Komputer Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end text-white text-right px-24">
          <div className="w-full md:w-auto md:flex md:flex-col md:items-end">
            <div
              className="w-[100%] font-bold text-[60px] space-y-2 text-left"
              data-aos="fade-right"
            >
              <p>
                Kehidupan Kampus <br />
                Fakultas Ilmu Komputer
              </p>
              <p className="font-bold text-[18px] text-left" data-aos="fade-up">
                UPN Veteran Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const KehidupanKampusHeader = () => {
  useAOS();

  return (
    <section>
      <ResponsiveHeaderContent />
    </section>
  );
};

export default KehidupanKampusHeader;
