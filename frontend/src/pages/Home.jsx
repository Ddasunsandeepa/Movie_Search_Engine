import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, url: "hello", title: "hello", releaseDate: "2004" },
    { id: 2, url: "default.jpg", title: "Unknown", releaseDate: "2010" },
    { id: 3, url: "default.jpg", title: "hello world", releaseDate: "2002" },
    {
      id: 4,
      url: "default.jpg",
      title: "hello sri lanka",
      releaseDate: "2010",
    },
  ];
  return (
    <div>
      {movies.map((movie) => {
        <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Home;
