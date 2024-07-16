import React from "react";
import Image, { StaticImageData } from "next/image";
import ClockIcon from "../../../components/Icons/Clock";
import LocationIcon from "../../../components/Icons/Location";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface AgendaProps {
  image: StaticImport | StaticImageData;
  AgendaDate: string;
  AgendaMonth: string;
  AgendaTitle: string;
  AgendaHour: string;
  AgendaLocation: string;
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}
function AgendaCard({
  image,
  AgendaDate,
  AgendaMonth,
  AgendaTitle,
  AgendaHour,
  AgendaLocation,
}: AgendaProps) {
  const truncatedAgendaTitle = truncateText(AgendaTitle, 10);
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
          <p className="text-[18px] font-semibold">{truncatedAgendaTitle}</p>
          <div className="flex items-center space-x-2">
            <ClockIcon />
            <p className="text-[14px] text-[#6B7280] font-semibold">
              {AgendaHour}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <LocationIcon />
            <p className="text-[14px] text-[#6B7280] font-semibold pl-1">
              {AgendaLocation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendaCard;
