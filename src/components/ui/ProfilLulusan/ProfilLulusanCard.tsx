import React from "react";

interface GraduateProfileCardProps {
  id: string;
  title: string;
  content: string;
}

const GraduateProfileCard: React.FC<GraduateProfileCardProps> = ({
  id,
  title,
  content,
}) => {
  return (
    <div className="w-full min-h-80 border rounded-[16px] p-5 flex flex-col items-center text-center">
      <div className="text-[32px] font-semibold text-primary-500 mb-4">
        {id}
      </div>
      <span className="font-bold text-[24px] mb-4">{title}</span>
      <p className="text-[18px] text-[#6B7280]">{content}</p>
    </div>
  );
};

export default GraduateProfileCard;
