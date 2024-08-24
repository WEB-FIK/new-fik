"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import {
  dekanatDetails,
  kaprodiDetails,
  koorTUDetails,
  kepalaLabDetails,
} from "@/data/manajemenDetails";
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import FilterStafPengajarMenu from "@/components/ui/FilterStafPengajarMenu/FilterStafPengajarMenu";
import Pagination from "@/components/ui/Pagination/Pagination";
import { useStafPengajar } from "@/hooks//useStafPengajar/useStafPengajar";

function StafPengajarList() {
  const allData = [
    ...dekanatDetails,
    ...kaprodiDetails,
    ...koorTUDetails,
    ...kepalaLabDetails,
  ];

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
          handleFilterMenu={() => setFilterOpen()}
          setSelectedStatus={setSelectedStatus}
        />

        <div className="w-full md:w-3/4 md:space-y-10">
          <div className="w-full mb-8">
            <input
              type="text"
              placeholder="Cari Staf Pengajar..."
              className="p-4 w-full rounded-lg border-2 border-primary-500 bg-white focus:outline-primary-500 focus:ring-2 focus:ring-primary-500 font-bold"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <p className="font-bold">Sort: </p>
              <select
                className="p-2 border-2 border-primary-500 rounded-lg bg-white focus:outline-primary-500 focus:ring-2 focus:ring-primary-500 font-bold"
                onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              >
                <option value="asc">A to Z</option>
                <option value="desc">Z to A</option>
              </select>
            </div>
          </div>
          {currentItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {currentItems.map((item, index) => (
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
          ) : (
            <p className="text-center text-lg font-semibold text-gray-500">
              Data tidak tersedia
            </p>
          )}
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default StafPengajarList;
