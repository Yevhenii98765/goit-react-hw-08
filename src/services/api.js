import axios from "axios";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDFjYjg2MmMzODM2MmUwNTYxNjBkYTJjM2RjOTBhMSIsIm5iZiI6MTcxOTU2NjExMS45NjczMTUsInN1YiI6IjY2N2U3NjAzNWNiMDUxOGU3ZmRhOWIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hhwclpZTVC5W1G_oEZflL5gqoWegok3Q23dIp_15F0o";

axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export const fetchTrendMovies = async () => {
  const { data } = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get("3/search/movie", {
    params: {
      query,
    },
  });
  return data.results;
};

export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`3/movie/${id}`);
  return data;
};

export const fetchCreditsById = async (id) => {
  const { data } = await axios.get(`3/movie/${id}/credits`);
  return data;
};

export const fetchReviewsById = async (id) => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);
  return data;
};
