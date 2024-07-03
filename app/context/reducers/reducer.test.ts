import moviesReducer from './reducer';
import * as actions from '../actions/actions';
import initialState from '../moviedb-context/initialState';

describe('Test Reducers', () => {
    it('should handle LOAD_MOVIES_IN_PROGRESS', () => {
        expect(moviesReducer(initialState, actions.loadMoviesInProgress())).toEqual({
            ...initialState,
            isLoading: true
        });
    });

    it('should handle LOAD_MOVIES_FAILURE', () => {
        const errorPayload = 'error';
        expect(moviesReducer(initialState, actions.loadMoviesFailure(errorPayload))).toEqual({
            ...initialState,
            isLoading: false,
            apiError: true
        });
    });

    it('should handle CLOSE_ERROR_MODAL', () => {
        expect(moviesReducer(initialState, actions.closeErrorModal())).toEqual({
            ...initialState,
            apiError: false
        });
    });

    it('should handle PAGE_CHANGE', () => {
        const pageNum = 1;
        expect(moviesReducer(initialState, actions.pageChange(pageNum))).toEqual({
            ...initialState,
            pageNum: pageNum,
            data: [] // Ensure data is reset correctly
        });
    });

    it('should handle LOAD_MOVIES_SUCCESS', () => {
        const testData = { data: [], totalPages: 0, totalResults: 0 }; // Example data structure
        expect(moviesReducer(initialState, actions.loadMoviesSuccess(testData))).toEqual({
            ...initialState,
            isLoading: false,
            data: testData.data,
            apiError: false,
            totalPages: testData.totalPages,
            totalResults: testData.totalResults
        });
    });

    it('should handle SET_SEARCH_TERM', () => {
        const searchTerm = 'test';
        expect(moviesReducer(initialState, actions.setSearchTerm(searchTerm))).toEqual({
            ...initialState,
            searchTerm: searchTerm
        });
    });

    it('should return the current state for unknown action', () => {
        let unknownAction = { type: 'UNKNOWN_ACTION' };
        expect(moviesReducer(initialState, unknownAction)).toEqual(initialState);
    });
});
