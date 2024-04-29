import React from "react";
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

function MovieCard({ result: movie }) {
    const navigate = useNavigate();

    const goToMoviePage = () => {
        navigate(`/${movie.imdbID}`, { state: movie });
    };

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/400'; // Fallback image
    };

    return (
        <article className="movie">
            <header>
                <p>Year: {movie.Year}</p>
            </header>
            <div onClick={goToMoviePage}>
                <img 
                    src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'}
                    alt={`${movie.Title} poster`} 
                    onError={handleImageError}
                />
            </div>
            <footer className="bottom-part">
                <span>{movie.Type} - {movie.Title}</span>
            </footer>
        </article>
    );
}

export default MovieCard;
