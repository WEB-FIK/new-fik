"use client";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React, { useState } from "react";
import AgendaCard from "@/components/ui/AgendaCard/AgendaCard";
import Pagination from "@/components/ui/Pagination/Pagination";
import { agendaItems } from "@/data/dataAgenda";

function AllAgenda() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(agendaItems.length / itemsPerPage);

  const currentItems = agendaItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px] overflow-x-scroll">
      <SectionHeader title="Semua Agenda" subtitle="" textAlign="right" />
      <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agendaItems.map((item, index) => (
          <AgendaCard
            key={index}
            image={item.imageSrc}
            AgendaDate={item.AgendaDate}
            AgendaMonth={item.AgendaMonth}
            AgendaTitle={item.AgendaTitle}
            AgendaHour={item.AgendaHour}
            AgendaLocation={item.AgendaLocation}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        showPreviousNextButtons
        showFirstLastButtons
      />
    </section>
  );
}

export default AllAgenda;
