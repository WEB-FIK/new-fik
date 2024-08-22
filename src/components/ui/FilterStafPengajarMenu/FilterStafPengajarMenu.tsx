import React from "react";

interface FilterMenuProps {
  filterOpen: boolean;
  handleFilterMenu: () => void;
  setSelectedStatus: (status: string | null) => void;
}

const FilterStafPengajarMenu: React.FC<FilterMenuProps> = ({
  filterOpen,
  handleFilterMenu,
  setSelectedStatus,
}) => (
  <div className="w-full md:w-1/4 mb-8 md:mb-0">
    <ul className="space-y-2 font-bold text-black">
      <button
        onClick={handleFilterMenu}
        className="flex items-center p-3 border-b-4 border-b-primary-700 w-full text-left "
      >
        <span>{filterOpen ? "✖" : "☰"}</span>
        <span className="ml-2 text-xl">Filter Staf Pengajar</span>
      </button>
      <div
        className={`${
          filterOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transform transition-all duration-300 ease-in-out`}
      >
        <button
          className="w-full text-left border-b-2 transform transition-all duration-300 ease-in-out border-b-primary-500 p-3 hover:bg-primary-500 hover:text-white"
          onClick={() => setSelectedStatus(null)}
        >
          Semua Staf Pengajar
        </button>
        <button
          className="w-full text-left border-b-2 transform transition-all duration-300 ease-in-out border-b-primary-500 p-3 hover:bg-primary-500 hover:text-white"
          onClick={() => setSelectedStatus("Pengajar Tetap")}
        >
          Staf Pengajar Tetap
        </button>
        <button
          className="w-full text-left border-b-2 transform transition-all duration-300 ease-in-out border-b-primary-500 p-3 hover:bg-primary-500 hover:text-white"
          onClick={() => setSelectedStatus("Pengajar Tidak Tetap")}
        >
          Staf Pengajar Tidak Tetap
        </button>
        <button
          className="w-full text-left border-b-2 transform transition-all duration-300 ease-in-out border-b-primary-500 p-3 hover:bg-primary-500 hover:text-white"
          onClick={() => setSelectedStatus("Pengajar In Memoriam")}
        >
          Staf Pengajar In Memoriam
        </button>
      </div>
    </ul>
  </div>
);

export default FilterStafPengajarMenu;
