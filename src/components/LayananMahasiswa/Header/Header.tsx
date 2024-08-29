import React from "react";
import Image from "next/image";
import LayananMahasiswaHeaderDesktop from "../../../../public/images/LayananMahasiswaHeaderDesktop.png";
import LayananMahasiswaHeaderMobile from "../../../../public/images/LayananMahasiswaHeaderMobile.jpg";

function Header() {
  return (
    <div>
      <div>
        <div className="relative w-full h-[279px] block md:hidden">
          <Image
            src={LayananMahasiswaHeaderMobile}
            alt="Laboratorium Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-left">
            <div className="font-bold text-[29px] space-y-2">
              <p>
                Layanan Mahasiswa <br />
                Fakultas Ilmu Komputer
              </p>
              <p className="font-bold text-[18px] text-left">
                UPN Veteran Jakarta
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[550px] hidden md:block">
          <Image
            src={LayananMahasiswaHeaderDesktop}
            alt="Laboratorium Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-end text-white text-right md:px-8 lg:px-12 xl:px-16">
            <div className="w-full md:w-auto md:flex md:flex-col md:items-end">
              <div className="font-bold text-[29px] md:text-[60px] space-y-2 text-left">
                <p>
                  Layanan Mahasiswa <br />
                  Fakultas Ilmu Komputer
                </p>
                <p className="font-bold text-[18px] text-left">
                  UPN Veteran Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
