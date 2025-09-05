import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log(popularMovies);
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch popular movies.");
      } finally {
        setLoading(false);
      }
    };
    fetchPopularMovies();
  }, []);
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleClick}>
        <input
          type="text"
          value={searchQuery}
          className="search-input"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search for a movie..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
