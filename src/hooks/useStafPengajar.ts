import { useState, useMemo } from "react";
import { manajemenDetail } from "@/data/manajemenDetails";

export function useStafPengajar(allData: manajemenDetail[]) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Example: 9 items per page
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    let filtered = allData;

    if (selectedStatus) {
      filtered = filtered.filter((item) => item.status === selectedStatus);
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [allData, selectedStatus, searchQuery, sortOrder]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, filteredData]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentItems,
    totalPages,
    currentPage,
    filterOpen,
    setFilterOpen,
    setSortOrder,
    setSearchQuery,
    handlePageChange,
    setSelectedStatus,
  };
}
