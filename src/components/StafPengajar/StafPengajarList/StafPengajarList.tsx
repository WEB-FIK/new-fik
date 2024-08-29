"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import FilterStafPengajarMenu from "@/components/ui/StafPengajar/FilterStafPengajarMenu/FilterStafPengajarMenu";
import Pagination from "@/components/ui/Pagination/Pagination";
import StafPengajarGrid from "@/components/ui/StafPengajar/StafPengajarGrid/StafPengajarGrid";
import NoDataMessage from "@/components/ui/StafPengajar/NoDataMessage/NoDataMessage";
import { useStafPengajar } from "@/hooks/useStafPengajar/useStafPengajar";
import { useStafPengajarData } from "@/hooks/useStafPengajar/useStafPengajarData";
const SORT_OPTIONS = {
  ASC: "asc",
  DESC: "desc",
};

const INPUT_CLASSES =
  "p-4 w-full rounded-lg border-2 border-primary-500 bg-white focus:outline-primary-500 focus:ring-2 focus:ring-primary-500 font-bold";

const StafPengajarList: React.FC = () => {
  const allData = useStafPengajarData();

  const {
    currentItems,
    totalPages,
    currentPage,
    filterOpen,
    setFilterOpen,
    setSortOrder,
    setSearchQuery,
    handlePageChange,
    setSelectedStatus,
  } = useStafPengajar(allData);

  const handleFilterMenuToggle = () => setFilterOpen();
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "asc" | "desc");
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col md:px-[100px] md:min-h-[400px]">
      <SectionHeader
        title="Staf Pengajar Fakultas Komputer"
        subtitle="Susunan staf pengajar yang ada di dalam Fakultas Ilmu Komputer UPNVJ."
        textAlign="left"
      />
      <div className="flex flex-col md:flex-row py-16 md:gap-x-16">
        <FilterStafPengajarMenu
          filterOpen={filterOpen}
          handleFilterMenu={handleFilterMenuToggle}
          setSelectedStatus={setSelectedStatus}
        />

        <div className="w-full md:w-3/4 md:space-y-10">
          <div className="w-full mb-8">
            <input
              type="text"
              placeholder="Cari Staf Pengajar..."
              className={INPUT_CLASSES}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <p className="font-bold">Sort: </p>
              <select
                className="p-2 border-2 border-primary-500 rounded-lg bg-white focus:outline-primary-500 focus:ring-2 focus:ring-primary-500 font-bold"
                onChange={handleSortChange}
              >
                <option value={SORT_OPTIONS.ASC}>A to Z</option>
                <option value={SORT_OPTIONS.DESC}>Z to A</option>
              </select>
            </div>
          </div>
          {currentItems.length > 0 ? (
            <StafPengajarGrid items={currentItems} />
          ) : (
            <NoDataMessage />
          )}
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              showFirstLastButtons
              showPreviousNextButtons
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default StafPengajarList;
