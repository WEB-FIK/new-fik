import React from "react";

function Partner() {
  return (
    <section className="min-h-screen space-y-5 md:min-h-[600px]">
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
      <div className="w-full bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 p-4 space-y-5 flex flex-col md:space-y-0 lg:min-h-[500px] md:text-center md:justify-evenly md:items-center"></div>
    </section>
  );
}

export default Partner;
