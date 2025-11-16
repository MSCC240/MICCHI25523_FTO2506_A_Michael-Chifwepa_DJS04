// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import PodcastGrid from "./components/PodcastGrid.jsx";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import { genres } from "./data.js";
import { fetchPodcasts } from "./api/fetchPodcasts.js";
import Pagination from "./components/Pagination.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI state for DSJ04
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [selectedGenre, setSelectedGenre] = useState("all"); // SINGLE dropdown
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [selectedPodcast, setSelectedPodcast] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  /** PROCESSING PIPELINE */
  const processed = useMemo(() => {
    let list = Array.isArray(podcasts) ? podcasts.slice() : [];

    // 1) SEARCH
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(lower));
    }

    // 2) GENRE FILTER (single)
    if (selectedGenre !== "all") {
      const g = Number(selectedGenre);
      list = list.filter((p) => p.genres.includes(g));
    }

    // 3) SORT
   if (sortOption === "newest") {
  list.sort((a, b) => new Date(b.updated) - new Date(a.updated));
} else if (sortOption === "oldest") {
  list.sort((a, b) => new Date(a.updated) - new Date(b.updated));
} else if (sortOption === "az") {
  list.sort((a, b) => a.title.localeCompare(b.title));
} else if (sortOption === "za") {
  list.sort((a, b) => b.title.localeCompare(a.title));
}


    // 4) PAGINATION
    const totalResults = list.length;
    const totalPages = Math.max(1, Math.ceil(totalResults / itemsPerPage));
    const safePage = Math.min(currentPage, totalPages);

    const start = (safePage - 1) * itemsPerPage;
    const paginated = list.slice(start, start + itemsPerPage);

    return { paginated, totalPages, totalResults, currentPage: safePage };
  }, [podcasts, searchTerm, selectedGenre, sortOption, currentPage]);

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        genres={genres}
      />
      <FilterBar
  searchTerm={searchTerm}
  onSearch={setSearchTerm}
  sortOption={sortOption}
  onSortChange={setSortOption}
  selectedGenre={selectedGenre}
  onGenreChange={setSelectedGenre}
  genres={genres}
/>


      <main>
        {loading && (
          <div className="message-container">
            <p>Loading podcasts...</p>
          </div>
        )}
        {error && (
          <div className="message-container">
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <PodcastGrid
              podcasts={processed.paginated}
              genres={genres}
              onSelectPodcast={(p) => setSelectedPodcast(p)}
            />

            <Pagination
              currentPage={processed.currentPage}
              totalPages={processed.totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>

      <Modal
        podcast={selectedPodcast}
        onClose={() => setSelectedPodcast(null)}
        genres={genres}
      />
    </>
  );
}
