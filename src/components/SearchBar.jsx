// SeacrhBar.jsx
import { forwardRef } from "react";

const SearchBar = forwardRef(function SearchBar({
  value,
  onChange,
  onSearch,
  onClear,
}, ref) {
  return (
    <form onSubmit={onSearch} className="search-bar">
      <input
        ref={ref}
        type="text"
        placeholder="Buscar peliculas por titulo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button className="sub" type="submit" disabled={!value}>
        Buscar
      </button>
      <button className="clr" onClick={onClear} disabled={!value}>
        Limpiar
      </button>
    </form>
  );
});

export default SearchBar;
