import React from "react";
import PeminatanCardItem from "@/components/ui/PeminatanCard/PeminatanCardItem";
import { PeminatanProgramStudi } from "@/data/peminatanProgramStudi";

interface PeminatanCardProps {
  data: PeminatanProgramStudi[];
}

const PeminatanCard: React.FC<PeminatanCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((peminatan) => (
        <PeminatanCardItem
          key={peminatan.id}
          title={peminatan.title}
          subtitle={peminatan.subtitle}
        />
      ))}
    </div>
  );
};

export default PeminatanCard;
