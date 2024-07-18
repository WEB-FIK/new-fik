import React from 'react';
import ListLaboratoriumCard from "@/components/ui/ListLaboratoriumCard/ListLaboratoriumCard";
import { LabDetail } from "@/data/labData";

interface LabCardWrapperProps {
    labDetails: LabDetail[];
  }
const LabCardWrapper = ({ labDetails }: LabCardWrapperProps) => {
  return labDetails.map((lab, index: number) => (
    <div
      key={lab.LabName}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      className="md:flex md:justify-center md:items-center"
    >
      <ListLaboratoriumCard {...lab} />
    </div>
  ));
};

export default LabCardWrapper;