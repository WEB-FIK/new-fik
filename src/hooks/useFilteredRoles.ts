import { useMemo } from "react";
import { manajemenDetail } from "@/data/manajemenDetails";

export const useFilteredRoles = (details: manajemenDetail[], role: string) => {
  return useMemo(() => {
    return details.filter((person) => person.role === role);
  }, [details, role]);
};
