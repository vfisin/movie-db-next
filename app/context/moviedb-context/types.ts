export type Action = {
  type: string;
  payload?: any;
};


export type MovieListDetails = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

};

export type MovieListResponse = {
  results: MovieListDetails[];
  page: number;
  total_pages: number;
  total_results: number;
};


export type MoviesDBState = {
  isLoading: boolean;
  data: MovieListDetails[];
  pageNum: number;
  totalPages: number;
  totalResults: number;
  apiError: boolean;
  pageTitle: string;
  searchTerm: string
};
