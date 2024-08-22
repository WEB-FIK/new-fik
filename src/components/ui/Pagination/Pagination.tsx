import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => (
  <div className="flex justify-center space-x-4 mt-8">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`px-4 py-2 border rounded-lg ${
          currentPage === page
            ? "bg-primary-500 text-white"
            : "bg-white text-primary-500"
        }`}
      >
        {page}
      </button>
    ))}
  </div>
);

export default Pagination;
