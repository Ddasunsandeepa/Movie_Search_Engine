import { API_KEY, BASE_URL } from "../utils";

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
