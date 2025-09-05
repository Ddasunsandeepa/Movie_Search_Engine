import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

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
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      {movies.map(
        (movie) =>
          movie.title.toLowerCase().startsWith(searchQuery) && (
            <MovieCard key={movie.id} movie={movie} />
          )
      )}
    </div>
  );
};

export default Home;
