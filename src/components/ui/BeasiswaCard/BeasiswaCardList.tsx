import React, { useMemo } from "react";
import { dataBeasiswa, dataBeasiswaProps } from "@/data/dataBeasiswa";
import BeasiswaCardItem from "./BeasiswaCardItem";

// Explicitly define props type
interface BeasiswaCardListProps {
  beasiswa: dataBeasiswaProps;
}

/**
 * BeasiswaCardList Component
 *
 * Renders a grid of scholarship cards based on the dataBeasiswa array.
 * Each scholarship is represented by a BeasiswaCardItem component.
 *
 * @returns {React.ReactElement} A grid of scholarship cards
 */
const BeasiswaCardList: React.FC<BeasiswaCardListProps> = () => {
  const scholarshipItems = useMemo(() => {
    if (!Array.isArray(dataBeasiswa) || dataBeasiswa.length === 0) {
      return <div>No scholarship data available.</div>;
    }

    return dataBeasiswa.map((beasiswa) => (
      <BeasiswaCardItem key={beasiswa.id} beasiswa={beasiswa} />
    ));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {scholarshipItems}
    </div>
  );
};

export default BeasiswaCardList;
