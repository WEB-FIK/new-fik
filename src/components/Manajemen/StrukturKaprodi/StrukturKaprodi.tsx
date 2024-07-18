import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import { kaprodiDetails } from "@/data/manajemenDetails";

function StrukturKaprodi() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col space-y-5 justify-center md:px-[100px] md:min-h-[400px]">
      <div
        className="flex flex-row-reverse items-center justify-between space-x-1"
        data-aos="fade-down"
      >
        <p className="w-[70%] text-[24px] font-extrabold text-right md:text-[48px]">
          Ketua Program Studi
        </p>
        <hr className="w-[30%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p
          className="text-primary-500 text-[16px] text-right font-semibold md:text-[24px]"
          data-aos="fade-down"
        >
          Susunan Ketua Program Studi di Fakultas Ilmu komputer UPNVJ.
        </p>
      </div>

      <div className="md:grid md:grid-cols-3 space-y-5 md:space-y-0 md:pt-5">
        {kaprodiDetails.map((person, index) => (
          <div
            className="flex flex-col items-center justify-center md:flex-row"
            key={index}
            data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
          >
            <StrukturManajemenCard
              image={person.image}
              name={person.name}
              position={person.position}
              profileRoute={person.profileRoute}
              lhkpnRoute={person.lhkpnRoute}
              showMenu
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default StrukturKaprodi;
