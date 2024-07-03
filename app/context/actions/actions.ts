export const LOAD_MOVIES_IN_PROGRESS = "LOAD_MOVIES_IN_PROGRESS";
export const loadMoviesInProgress = () => ({
  type: LOAD_MOVIES_IN_PROGRESS,
});
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const loadMoviesSuccess = (data: any) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: { data },
});
export const LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE";
export const loadMoviesFailure = (error: any) => ({
  type: LOAD_MOVIES_FAILURE,
  payload: error,
});

export const PAGE_CHANGE = "PAGE_CHANGE";
export const pageChange = (pageNum: number) => ({
  type: PAGE_CHANGE,
  payload: pageNum,
});
export const CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL";
export const closeErrorModal = () => ({
  type: CLOSE_ERROR_MODAL,
});

export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

