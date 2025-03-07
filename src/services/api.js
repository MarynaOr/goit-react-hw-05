import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDQ0ZTQ4YmQzNmMwMGM5ZjFkYjcxYzEwMTkxZGYxOSIsIm5iZiI6MTc0MDQxNDA4OC43NTAwMDAyLCJzdWIiOiI2N2JjOWM4OGEyMzkyOWFjMjhiZjEzMDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tg7RUDXJSE97dn_A7VlPEFjCuG9LFFtNcceq8uiXmf0";
const API_KEY = "6d44e48bd36c00c9f1db71c10191df19";
const KEY = {
  params: { api_key: API_KEY },
};

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const fetchUrl = async () => {
  const response = await axios.get("/trending/movie/day", KEY);
  return response.data.results;
};

export const fetchMovie = async (query) => {
  const response = await axios.get("/search/movie", {
    ...options,
    params: { query: query },
  });
  return response.data.results;
};

export const fetchMovieId = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, KEY);
  // console.log('info:', response.data);

  return response.data;
};

export const fetchCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, KEY);
  // console.log('info:', response.data);

  return response.data;
};

