// src/components/SearchBar.jsx
import React from "react";

/**
 * SearchBar component
 * @param {{value: string, onChange: (v:string) => void}} props
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        type="search"
        placeholder="Search podcasts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search podcasts"
      />
    </div>
  );
}
