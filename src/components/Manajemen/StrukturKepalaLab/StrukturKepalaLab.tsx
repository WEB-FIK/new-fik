import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import { kepalaLabDetails } from "@/data/manajemenDetails";

function StrukturKepalaLab() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <div className="flex flex-row-reverse items-center justify-between space-x-1" data-aos="fade-down">
        <p className="w-[70%] text-[24px] font-extrabold text-right md:text-[48px]">
          Laboratorium
        </p>
        <hr className="w-[60%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p className="text-primary-500 text-[16px] text-right font-semibold md:text-[24px]" data-aos="fade-down">
          Susunan Kepala Laboratorium di Fakultas Ilmu komputer UPNVJ.
        </p>
      </div>

      <div className="w-full flex flex-col items-center space-y-5 md:pt-5 md:grid md:grid-cols-3 md:gap-4">
        {kepalaLabDetails.map((person, index) => (
          <div className={`md:col-span-${index === 3 ? "3" : "1"} md:flex justify-center`} key={person.name} data-aos={index > 2 ? "fade-up" : "fade-down"}>
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

export default StrukturKepalaLab;
