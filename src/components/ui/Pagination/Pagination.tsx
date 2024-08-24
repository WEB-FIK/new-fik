import React from "react";
import { usePagination } from "../../../hooks/usePagination";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showFirstLastButtons?: boolean;
  showPreviousNextButtons?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  showFirstLastButtons = false,
  showPreviousNextButtons = false,
}) => {
  const { pageNumbers, handlePageChange, hasPrevious, hasNext } = usePagination(
    { totalPages, currentPage, onPageChange }
  );

  const getButtonStyle = (isActive: boolean) =>
    `px-4 py-2 border rounded-lg ${
      isActive ? "bg-primary-500 text-white" : "bg-white text-primary-500"
    }`;

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {showFirstLastButtons && (
        <button
          onClick={() => handlePageChange(1)}
          disabled={!hasPrevious}
          className={getButtonStyle(currentPage === 1)}
        >
          {"<<"}
        </button>
      )}
      {showPreviousNextButtons && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={!hasPrevious}
          className={getButtonStyle(false)}
        >
          {"<"}
        </button>
      )}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={getButtonStyle(currentPage === page)}
        >
          {page}
        </button>
      ))}
      {showPreviousNextButtons && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!hasNext}
          className={getButtonStyle(false)}
        >
          {">"}
        </button>
      )}
      {showFirstLastButtons && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={!hasNext}
          className={getButtonStyle(currentPage === totalPages)}
        >
          {">>"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
