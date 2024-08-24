import { manajemenDetail } from "@/data/manajemenDetails";

export function filterData(
  data: manajemenDetail[],
  searchQuery: string,
  selectedStatus: string | null
): manajemenDetail[] {
  return data.filter((item) => {
    const matchesStatus = selectedStatus
      ? item.status === selectedStatus
      : true;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });
}

export function sortData(
  data: manajemenDetail[],
  sortOrder: "asc" | "desc"
): manajemenDetail[] {
  return data.sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
}
