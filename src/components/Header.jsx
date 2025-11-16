export default function Header({
  searchTerm,
  onSearch,
  sortOption,
  onSortChange,
  selectedGenre,
  onGenreChange,
  genres
}) {
  return (
    <header className="app-header">
      <h1 className="logo">🎙️ PodcastApp</h1>

      <div className="header-controls">
        {/* Search input */}
        <input
          type="text"
          className="search-input"
          placeholder="Search podcasts..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
