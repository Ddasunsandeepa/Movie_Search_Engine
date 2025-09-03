import React from "react";

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
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={handleFavClick}>
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-releaseDate">{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
