//Home
import { useState, useEffect, useRef } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isSearching) loadMovies(page);
  }, [page]);

  async function loadMovies(pageNum) {
    try {
      setLoading(true);
      const newMovies = await getPopularMovies(pageNum);
      setMovies((prev) => {
        const allMovies = [...prev, ...newMovies];
        const unique = allMovies.filter(
          (m, idx, self) => idx === self.findIndex((x) => x.id === m.id)
        );
        return unique;
      });
    } catch (err) {
      setError(`Hubo problemas al cargar las peliculas: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);
      setIsSearching(true);
      const results = await searchMovies(searchTerm.trim());
      setMovies(results);
    } catch (err) {
      setError(`Error al buscar peliculas: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setSearchTerm("");
    setIsSearching(false);
    setMovies([]);
    setPage(1);
    loadMovies(1);
    inputRef.current?.focus();
  }

  return (
    <main>
      <h1>Peliculas React 😊</h1>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar peliculas por titulo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="sub" type="submit" disabled={!searchTerm}>
          Buscar
        </button>
        <button className="clr" onClick={handleClear} disabled={!searchTerm}>
          Limpiar
        </button>
      </form>

      {loading && movies.length === 0 && <p>Cargando más...</p>}
      {error && <p className="error">{error}</p>}

      {!isSearching && <h2>Peliculas Populares</h2>}

      <MovieList movies={movies} />

      {loading && movies.length > 0 && <p>Cargando más...</p>}

      {!isSearching && (
        <div className="btn">
          <button
            className="mas"
            onClick={() => setPage((p) => p + 1)}
            disabled={loading}
          >
            Ver mas peliculas
          </button>
        </div>
      )}
    </main>
  );
}

export default Home;
