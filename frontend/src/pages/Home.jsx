import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  const movies = [
    { id: 1, url: "hello", title: "hello", releaseDate: "2004" },
    { id: 2, url: "default.jpg", title: "Unknown", releaseDate: "2010" },
    { id: 3, url: "default.jpg", title: "hello world", releaseDate: "2002" },
  ];
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
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
