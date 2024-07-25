import React from "react";
import FooterLocationIcon from "@/components/Icons/FooterLocationIcon";
import FooterMailIcon from "@/components/Icons/FooterMailIcon";
import FooterPhoneIcon from "@/components/Icons/FooterPhoneIcon";

const contactDetails = [
  {
    Icon: FooterLocationIcon,
    text: "Jl. RS. Fatmawati, Pondok Labu, Jakarta Selatan, 12450",
  },
  {
    Icon: FooterMailIcon,
    text: "upnvj@upnvj.ac.id",
  },
  {
    Icon: FooterPhoneIcon,
    text: "(021)7656971",
  },
];

const ContactInfo = () => (
  <div className="px-6 flex flex-col gap-y-6 w-full">
    <p className="font-bold text-[18px] md:text-[24px]">Terhubung dengan Kami</p>
    <div className="min-w-[300px] flex flex-col space-y-6 text-[#F6F5F5]">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-center space-x-6">
          <detail.Icon />
          <p className="text-footer text-[14px] font-bold md:text-[20px]">
            {detail.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfo;
