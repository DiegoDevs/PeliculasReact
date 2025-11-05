const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(page = 1) {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX&page=${page}`);
    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
    const data = await res.json();
    return data.results;
}

export async function searchMovies(query, page = 1) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-MX&query=${encodeURIComponent(query)}&page=${page}`);
  if (!res.ok) throw new Error("Error al buscar películas");
  const data = await res.json();
  return data.results;
}