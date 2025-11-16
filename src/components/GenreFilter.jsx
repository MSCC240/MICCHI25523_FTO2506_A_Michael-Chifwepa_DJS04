// src/components/GenreFilter.jsx
import React from "react";

/**
 * GenreFilter component
 * @param {{genres: Array, selected: number[], onToggle: (id:number)=>void}} props
 */
export default function GenreFilter({ genres, selected = [], onToggle }) {
  return (
    <div className="genre-filter">
      <label>Genres:</label>
      <div className="genre-options">
        {genres.map((g) => {
          const active = selected.includes(g.id);
          return (
            <button
              key={g.id}
              type="button"
              className={`genre-btn ${active ? "active" : ""}`}
              onClick={() => onToggle(g.id)}
            >
              {g.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
