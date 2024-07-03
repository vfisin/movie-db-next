import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_IN_PROGRESS,
  LOAD_MOVIES_FAILURE,
  PAGE_CHANGE,
  CLOSE_ERROR_MODAL, SET_SEARCH_TERM,
} from "../actions/actions";
import { MoviesDBState, Action } from "../moviedb-context/types";

const moviesReducer = (state: MoviesDBState, action: Action): MoviesDBState => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MOVIES_SUCCESS: {
      const { data, totalPages, totalResults } = payload.data;
      return {
        ...state,
        isLoading: false,
        data: data,
        apiError: false,
        totalPages: totalPages,
        totalResults: totalResults,
      };
    }
    case LOAD_MOVIES_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        apiError: true,
      };
    case PAGE_CHANGE:
      return {
        ...state,
        pageNum: payload,
        data: []
      };
    case CLOSE_ERROR_MODAL:
      return {
        ...state,
        apiError: false,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      };

    default: {
      return state;
    }
  }
};

export default moviesReducer;
