import { useMemo } from "react";

interface UsePaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: UsePaginationProps) => {
  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return {
    pageNumbers,
    handlePageChange,
    hasPrevious: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
};
