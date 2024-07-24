import React from "react";
import FooterLocationIcon from "@/components/Icons/FooterLocationIcon";
import FooterMailIcon from "@/components/Icons/FooterMailIcon";
import FooterPhoneIcon from "@/components/Icons/FooterPhoneIcon";

const ContactInfo = () => (
  <div className="px-6 flex flex-col gap-y-6 w-full">
    <p className="font-bold text-[18px] md:text-[24px]">Terhubung dengan Kami</p>
    <div className="min-w-[300px] flex flex-col space-y-6 text-[#F6F5F5]">
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
);

export default ContactInfo;