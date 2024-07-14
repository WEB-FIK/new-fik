import AgendaCard from "@/components/ui/AgendaCard/AgendaCard";
import React from "react";
import RektoratUPN2 from "../../../../public/images/RektoratUPN2.webp";
import Button from "@/components/ui/Button/Button";
function Agenda() {
  return (
    <section className="px-4 py-8 min-h-screen space-y-5 md:px-[116px] md:flex md:flex-col md:justify-center md:space-y-8">
      <div className="flex flex-row-reverse items-center justify-between">
        <p className="text-[24px] font-extrabold md:text-[42px]">Agenda</p>
        <hr className="w-[65%] border-primary-500 rounded-xl border-[3px]" />
      </div>

      <div>
        <p className="text-primary-500 text-[14px] font-semibold text-right md:text-[20px]">
          Jelajahi jadwal kegiatan dan acara terbaru yang diselenggarakan oleh
          Fakultas Ilmu Komputer UPN Veteran Jakarta
        </p>
      </div>

      <div className="space-y-5 w-full md:gap-y-8 md:flex md:flex-wrap md:justify-between md:space-y-0 md:items-center ">
        <AgendaCard
          image={RektoratUPN2}
          AgendaDate="25"
          AgendaMonth="Feb"
          AgendaTitle="Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7"
          AgendaHour="10:00 WIB - 16:00 WIB"
          AgendaLocation="Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta
"
        />

        <AgendaCard
          image={RektoratUPN2}
          AgendaDate="25"
          AgendaMonth="Feb"
          AgendaTitle="Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7"
          AgendaHour="10:00 WIB - 16:00 WIB"
          AgendaLocation="Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta
"
        />

        <AgendaCard
          image={RektoratUPN2}
          AgendaDate="25"
          AgendaMonth="Feb"
          AgendaTitle="Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7"
          AgendaHour="10:00 WIB - 16:00 WIB"
          AgendaLocation="Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta
"
        />
      </div>
      <div className="w-full md:flex md:justify-center">
        <Button
          text="Agenda lainnya"
          path="/agenda"
          bgColor="primary-500"
          width="120%"
        />
      </div>
    </section>
  );
}

export default Agenda;
