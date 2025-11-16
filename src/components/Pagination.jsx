// src/components/Pagination.jsx
import React from "react";

/**
 * Pagination component
 * @param {{
 *  currentPage: number,
 *  totalPages: number,
 *  onPageChange: (p:number)=>void
 * }} props
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={p === currentPage ? "active" : ""}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
        Next
      </button>
    </nav>
  );
}
