// MovieList.jsx
import MovieCard from "./MovieCard";

function MovieList({ movies }){
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard key={`${movie.id}-${index}`} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;