//Home
import { useState, useEffect, useRef } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  async function loadMovies(pageNum) {
    try {
      setLoading(true);
      const newMovies = await getPopularMovies(pageNum);
      setMovies((prev) => {
        const allMovies = [...prev, ...newMovies];
        const unique = allMovies.filter((m, idx, self) => 
            idx === self.findIndex(x => x.id === m.id));
        return unique;
      });
    } catch (err) {
      setError(`Hubo problemas al cargar las peliculas: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  const normalized = searchTerm.trim().toLowerCase();
  const filteredMovies = normalized 
  ? movies.filter(movie => {
    const title = (movie.title || "").toLowerCase();
    const original = (movie.original_title || "").toLowerCase();
    return title.includes(normalized) || original.includes(normalized);
  })
  : movies;

  function handleClear() {
    setSearchTerm("");
    inputRef.current?.focus();
  }

  return (
    <main> 
      <h1>Peliculas Populares</h1>

      <div className="search-bar">
        <input 
        ref={inputRef} 
        type="text" 
        placeholder="Buscar peliculas por titulo" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        onKeyDown={e => {
            if (e.key === "Escape") handleClear();
        }}
        />

        <button onClick={handleClear} disabled={!searchTerm}>
            Limpiar
        </button>
      </div>

      {loading && movies.length === 0 && <p>Cargando más...</p>}
      {error && <p className="error">{error}</p>}

      <MovieList movies={filteredMovies} />

      {loading && movies.length > 0 && <p>Cargando más...</p>}

      {!searchTerm && (
      <div className="btn">
        <button className="mas" onClick={() => setPage((p) => p + 1)} disabled={loading}>
          Ver mas peliculas
        </button>
      </div>
      )}
    </main>
  );
}

export default Home;
