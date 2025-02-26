import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2U5MTk2ZDUwMWZiM2E4YTk4YmZhNDUwMWU2M2Q1NSIsIm5iZiI6MTc0MDQxNDA4OC43NTAwMDAyLCJzdWIiOiI2N2JjOWM4OGEyMzkyOWFjMjhiZjEzMDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pRmQHw7agpfQVtFaSwr8hAzW5HvzttlkKGuU9ackrMY";
  const API_KEY = '87e9196d501fb3a8a98bfa4501e63d55'
const KEY = {
  params: {api_key: API_KEY}
}

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
  
    const response = await axios.get('/trending/movie/day',{
      params: {api_key: API_KEY}
    })
  return response.data.results
  
}

export const fetchMovie = async () => {
  const response = await axios.get('/search/movie', {KEY})
  return response.data.results
}












