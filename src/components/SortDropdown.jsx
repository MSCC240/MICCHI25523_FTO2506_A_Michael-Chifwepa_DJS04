// src/components/SortDropdown.jsx
import React from "react";

/**
 * Sort dropdown for podcasts
 * @param {{value: string, onChange: (v:string)=>void}} props
 */
export default function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-dropdown">
      <label>
        Sort:
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="az">Title A - Z</option>
          <option value="za">Title Z - A</option>
        </select>
      </label>
    </div>
  );
}
