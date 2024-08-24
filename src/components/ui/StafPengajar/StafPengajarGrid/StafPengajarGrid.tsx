import React from "react";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";

interface StafPengajarGridProps {
  items: any[];
}

const StafPengajarGrid: React.FC<StafPengajarGridProps> = ({ items }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {items.map((item, index) => (
      <div key={index} className="w-full flex justify-center">
        <StrukturManajemenCard
          image={item.image}
          name={item.name}
          position={item.position}
          lhkpnRoute={item.lhkpnRoute}
          profileRoute={item.profileRoute}
          showMenu
        />
      </div>
    ))}
  </div>
);

export default StafPengajarGrid;
