import React from "react";

function AboutLaboratorium() {
  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <div
        className="flex flex-row items-center justify-between space-x-1"
        data-aos="fade-down"
      >
        <p className="w-[70%] text-[24px] font-extrabold md:text-[48px]">
          Tentang Laboratorium Komputer
        </p>
        <hr className="w-[20%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p
          className="text-primary-500 text-[16px] font-semibold md:text-[24px]"
          data-aos="fade-down"
        >
          Laboratorium Komputer yang ada di dalam Fakultas Ilmu Komputer UPNVJ.
        </p>
      </div>

      <div className="text-[18px] font-semibold space-y-5 text-justify">
        <p>
        Laboratorium kami terdiri dari 8 ruangan yang dirancang khusus untuk mendukung proses belajar mengajar di Fakultas ilmu komputer. Setiap ruangan dilengkapi dengan fasilitas komputer canggih dan perangkat lunak terbaru yang dapat digunakan oleh mahasiswa untuk berbagai kegiatan akademik, seperti praktikum, penelitian, dan pengembangan proyek.</p>
        <p>Laboratorium komputer ini dapat digunakan oleh mahasiswa Fakultas Ilmu Komputer untuk berbagai keperluan akademik. Jadwal penggunaan laboratorium diatur secara sistematis agar semua mahasiswa mendapatkan kesempatan yang sama untuk menggunakan fasilitas ini.
        </p>
      </div>
    </section>
  );
}

export default AboutLaboratorium;
