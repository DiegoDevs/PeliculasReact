//Home
import { useState, useEffect } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";

function Home() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        loadMovies(page);
    }, [page]);

    async function loadMovies(pageNum) {
        try {
            setLoading(true);
            const newMovies = await getPopularMovies(pageNum);
                setMovies(prev => {
  const allMovies = [...prev, ...newMovies];
  return allMovies.filter(
    (movie, index, self) =>
      index === self.findIndex(m => m.id === movie.id)
  );
});
        } catch (err) {
            setError(`Hubo problemas al cargar las peliculas: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <h1>Peliculas Populares</h1>
            <MovieList movies={movies}/>

            {loading && <p>Cargando más...</p>}
            {error && <p>{error}</p>}

            <button onClick={() => setPage(p => p+1)} disabled={loading}>
                Ver mas peliculas
            </button>
        </main>
    );
}

export default Home;