import axios from 'axios';

const key = 'c7163b9141bc9e7fbaf6a1918610a8f0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export function getTrendingMovies() {
  return axios.get(`trending/all/week?api_key=${key} `).then(resp => resp.data);
}

export function getMovieById(id) {
  return axios
    .get(`movie/${id}?api_key=${key}&language=en-US`)
    .then(resp => resp.data);
}

export function getMovieCast(id) {
  return axios
    .get(`movie/${id}/credits?api_key=${key}&language=en-US `)
    .then(resp => resp.data);
}

export function getMovieReviews(id) {
  return axios
    .get(`movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
    .then(resp => resp.data);
}

export function getMovieByName(query) {
  return axios
    .get(`search/movie?api_key=${key}&language=en-US&page=1&query=${query}`)
    .then(resp => resp.data);
}
