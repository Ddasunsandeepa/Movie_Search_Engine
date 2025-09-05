import React from "react";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  if (!movie) {
    return <p>No movie data</p>;
  }
  function handleFavClick() {
    alert("clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/default.jpg"
          }
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavClick}>
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
