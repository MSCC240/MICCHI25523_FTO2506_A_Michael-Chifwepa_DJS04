export default function FilterBar({
  sortOption,
  onSortChange,
  selectedGenre,
  onGenreChange,
  genres
}) {
  return (
    <div className="filter-bar">
      {/* Sort dropdown */}
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-dropdown"
      >
        <option value="newest">Recently Updated</option>
        <option value="oldest">Oldest</option>
        <option value="az">A–Z</option>
        <option value="za">Z–A</option>
      </select>

      {/* Genre dropdown */}
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="genre-dropdown"
      >
        <option value="all">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>
    </div>
  );
}
