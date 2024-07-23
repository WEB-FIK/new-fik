import Image, { StaticImageData } from "next/image";
import React from "react";
import LocationIcon from "../../../components/Icons/LocationIcon";
import FlagIcon from "@/components/Icons/FlagIcon";
interface ListLaboratoriumCardProps {
  image: StaticImageData;
  LabName: string;
  LabHead: string;
  LabLocation: string;
  LabDesc: string;
  LabFunctions: string[];
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}


function ListLaboratoriumCard({ image, LabName, LabHead, LabLocation, LabDesc, LabFunctions }: ListLaboratoriumCardProps) {

  const truncatedDesc = truncateText(LabDesc, 15);
  return (
    <div className="w-full min-h-[800px] flex flex-col justify-between border border-[#D4D2E3] rounded-[16px] p-5 space-y-5 md:w-[600px]">
      <div>
        <Image src={image} alt="image" className="rounded-[16px] h-[288px] w-full md:h-[471px]" />
      </div>
      <div>
        <p className="text-primary-500 text-[24px] font-bold">{LabName}</p>
      </div>
      <div>
        <p className="text-[20px] text-[#6B7280] italic font-bold">
          Lab Head: {LabHead}
        </p>
      </div>
      <div className="w-full flex items-center text-[18px] text-[#6B7280] space-x-4">
        <LocationIcon />
        <p>{LabLocation}</p>
      </div>

        <div>
            <p className="font-semibold text-[16px] text-[#6B7280] text-justify">{truncatedDesc}</p>
        </div>

      <div className="w-full space-y-5">
        <ul className="space-y-5 ">
          {LabFunctions.map((func, index) => (
            <div key={index} className="w-full flex gap-x-4 items-center text-[16px] text-[#6B7280] font-semibold">
                <FlagIcon/>
                {func}
            </div>
             ))}
        </ul>
      </div>
    </div>
  );
}

export default ListLaboratoriumCard;
