import React from "react";

interface FilterOption {
  label: string;
  value: string | null;
}

interface FilterMenuProps {
  filterOpen: boolean;
  handleFilterMenu: () => void;
  setSelectedStatus: (status: string | null) => void;
}

const FilterStafPengajarMenu: React.FC<FilterMenuProps> = ({
  filterOpen,
  handleFilterMenu,
  setSelectedStatus,
}) => {
  const filterOptions: FilterOption[] = [
    { label: "Semua Staf Pengajar", value: null },
    { label: "Staf Pengajar Tetap", value: "Pengajar Tetap" },
    { label: "Staf Pengajar Tidak Tetap", value: "Pengajar Tidak Tetap" },
    { label: "Staf Pengajar In Memoriam", value: "Pengajar In Memoriam" },
  ];

  const buttonBaseClasses =
    "w-full text-left border-b-2 transform transition-all duration-300 ease-in-out p-3 hover:bg-primary-500 hover:text-white";

  return (
    <div className="w-full md:w-1/4 mb-8 md:mb-0">
      <ul className="space-y-2 font-bold text-black">
        <button
          onClick={handleFilterMenu}
          className="flex items-center p-3 border-b-4 border-b-primary-700 w-full text-left"
        >
          <span>{filterOpen ? "✖" : "☰"}</span>
          <span className="ml-2 text-xl">Filter Staf Pengajar</span>
        </button>
        <div
          className={`${
            filterOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transform transition-all duration-300 ease-in-out`}
        >
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`${buttonBaseClasses} border-b-primary-500`}
              onClick={() => setSelectedStatus(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default FilterStafPengajarMenu;
