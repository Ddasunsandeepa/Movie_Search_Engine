import { API_KEY, BASE_URL } from "../../utils";

// const API_KEY = "27bb3d3330ab942d1c2218da7af989fe";
// const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  console.log(API_KEY, BASE_URL);
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      //Makes sure the query text is safe for a URL (handles spaces, special characters).
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
