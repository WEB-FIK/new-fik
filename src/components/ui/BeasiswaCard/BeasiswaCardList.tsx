import React, { useMemo } from "react";
import { dataBeasiswa, dataBeasiswaProps } from "@/data/dataBeasiswa";
import BeasiswaCardItem from "./BeasiswaCardItem";

const BeasiswaCardList: React.FC = () => {
  const memoizedItems = useMemo(() => {
    return dataBeasiswa.map((beasiswa: dataBeasiswaProps) => (
      <BeasiswaCardItem key={beasiswa.id} beasiswa={beasiswa} />
    ));
  }, [dataBeasiswa]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {memoizedItems}
    </div>
  );
};

export default BeasiswaCardList;
