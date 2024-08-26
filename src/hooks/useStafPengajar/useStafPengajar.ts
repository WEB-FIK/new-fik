import { useReducer, useMemo } from "react";
import {
  stafPengajarReducer,
  initialState,
  Action,
} from "./useStafPengajarReducer";
import { filterData, sortData } from "./stafPengajarUtils";
import { manajemenDetail } from "@/data/manajemenDetails";

export function useStafPengajar(allData: manajemenDetail[]) {
  const [state, dispatch] = useReducer(stafPengajarReducer, initialState);

  const filteredData = useMemo(() => {
    const filtered = filterData(
      allData,
      state.searchQuery,
      state.selectedStatus
    );
    return sortData(filtered, state.sortOrder);
  }, [allData, state.searchQuery, state.selectedStatus, state.sortOrder]);

  const totalPages = Math.ceil(filteredData.length / state.itemsPerPage);
  const currentItems = useMemo(() => {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    return filteredData.slice(startIndex, startIndex + state.itemsPerPage);
  }, [state.currentPage, state.itemsPerPage, filteredData]);

  return {
    currentItems,
    totalPages,
    currentPage: state.currentPage,
    filterOpen: state.filterOpen,
    setFilterOpen: () => dispatch({ type: "TOGGLE_FILTER" }),
    setSortOrder: (order: "asc" | "desc") =>
      dispatch({ type: "SET_SORT_ORDER", payload: order }),
    setSearchQuery: (query: string) =>
      dispatch({ type: "SET_SEARCH_QUERY", payload: query }),
    handlePageChange: (pageNumber: number) =>
      dispatch({ type: "SET_PAGE", payload: pageNumber }),
    setSelectedStatus: (status: string | null) =>
      dispatch({ type: "SET_SELECTED_STATUS", payload: status }),
  };
}
