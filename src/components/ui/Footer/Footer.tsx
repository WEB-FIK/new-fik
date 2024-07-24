import React from "react";
import Link from "next/link";
import upnvj from "../../../../public/icons/UPNVJ.png";
import Image from "next/image";
import FooterLocationIcon from "@/components/Icons/FooterLocationIcon";
import FooterMailIcon from "@/components/Icons/FooterMailIcon";
import FooterPhoneIcon from "@/components/Icons/FooterPhoneIcon";

function Footer() {
  return (
    <section className="w-full flex flex-col min-h-[800px] md:min-h-[720px] bg-black text-white p-6 space-y-10 md:flex-row">
      <div className="flex flex-col space-y-10 md:w-[50%] md:space-y-40 md:px-8">
        <div className="flex items-center space-x-4 md:pt-9">
          <Link href="/" className="border-r-4 pr-4 border-r-primary-500">
            <Image src={upnvj} alt="logo" width={64} height={64} />
          </Link>
          <div className="space-y-2 font-bold text-[18px] text-primary-500">
            <p>FAKULTAS ILMU KOMPUTER</p>
            <p>UPN VETERAN JAKARTA</p>
          </div>
        </div>

        <div className="px-6 flex flex-col gap-y-6 w-full">
          <p className="font-bold text-[18px] md:text-[24px]">Terhubung dengan Kami</p>

          <div className="min-w-[300px] flex flex-col space-y-6 text-[#F6F5F5] md:">
            <div className="flex items-center space-x-10">
              <FooterLocationIcon />
              <p className="text-[#CCCCCC] text-[14px] font-bold md:text-[20px]">
                Jl. RS. Fatmawati, Pondok Labu, Jakarta Selatan, 12450
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <FooterMailIcon />
              <p className="text-[#CCCCCC] text-[14px] font-bold md:text-[20px]">
                upnvj@upnvj.ac.id
              </p>
            </div>

            <div className="flex items-center space-x-9">
              <FooterPhoneIcon />
              <p className="text-[#CCCCCC] text-[14px] font-bold md:text-[20px]">
                (021)7656971
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 space-y-9 w-full flex flex-col text-white md:w-[50%] md:flex-row md:space-y-0 md:space-x-32">
        <div className="w-full space-y-5 md:w-[287px]">
          <p className="font-bold text-[18px] border-b-4 pb-2 border-b-primary-500 md:text-[28px]">
            Akademik
          </p>
          <p className="text-[14px] md:text-[20px]">Sarjana Informatika</p>
          <p className="text-[14px] md:text-[20px]">Sarjana Sains Data</p>
          <p className="text-[14px] md:text-[20px]">Sarjana Sistem Informasi</p>
          <p className="text-[14px] md:text-[20px]">Diploma Sistem Informasi</p>
        </div>

        <div className="w-full space-y-5 md:w-[287px]">
          <p className="font-bold text-[18px] border-b-4 pb-2 border-b-primary-500 md:text-[28px]">
            Tentang
          </p>
          <div className="flex flex-col space-y-5 font-normal">
            <Link href="/tentang-fik" className="text-[14px] md:text-[20px]">
              Tentang FIK
            </Link>
            <Link href="/manajemen" className="text-[14px] md:text-[20px]">
              Manajemen
            </Link>
            <Link href="/staf-pengajar" className="text-[14px] md:text-[20px]">
              Staf Pengajar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
