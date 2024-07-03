import apiClient from "../apiClient";

const BASE_URL =
    "https://api.themoviedb.org/3/search/movie";
const defaultQueryParams = '&include_adult=false&language=en-US'


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:  process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY

  }
};

export const getMoviesCollection = async (page: number = 1, searchTerm: string = '') => {
  return apiClient(`${BASE_URL}?query=${searchTerm}&page=${page}${defaultQueryParams}`, options);
};