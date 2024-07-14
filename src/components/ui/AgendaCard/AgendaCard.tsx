import React from "react";
import Image, { StaticImageData } from "next/image";
import Clock from "../../../../public/icons/Clock.svg"
import Location from "../../../../public/icons/Location.svg"

interface AgendaProps {
  image: StaticImageData;
  AgendaDate: string;
  AgendaMonth: string;
  AgendaTitle: string;
  AgendaHour: string;
  AgendaLocation: string;
}
function AgendaCard({
  image,
  AgendaDate,
  AgendaMonth,
  AgendaTitle,
  AgendaHour,
  AgendaLocation,
}: AgendaProps) {
  return (
    <div className="w-[358px] min-h-[486px] border border-[#D4D2E3] rounded-[16px] px-5 py-7 space-y-[22px]">
      <div>
        <Image className="rounded-[8px]" src={image} alt="agenda" />
      </div>
      <div className="flex space-x-4 justify-between">
        <div className="flex flex-col border-r-primary-500 pr-4 border-r-[3px] w-[76px] h-[78px] items-center justify-center">
          <p className="text-primary-500 text-[40px] font-bold">{AgendaDate}</p>
          <p className="font-bold text-[18px] mb-2">{AgendaMonth}</p>
        </div>

        <div className="space-y-3">
          <p className="text-[18px] font-semibold">{AgendaTitle}</p>
          <div className="flex items-center space-x-2">
            <Image src={Clock} alt="agenda" />
            <p className="text-[14px] text-[#6B7280] font-semibold">{AgendaHour}</p>
          </div>

          <div className="flex items-center space-x-2">
            <Image src={Location} alt="agenda" />
            <p className="text-[14px] text-[#6B7280] font-semibold pl-1">{AgendaLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendaCard;
