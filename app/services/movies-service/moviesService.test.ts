import apiClient from '../apiClient';
import { getMoviesCollection } from './moviesService';

// Mock apiClient module
jest.mock('../apiClient', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('getMoviesCollection function', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    it('calls apiClient with correct URL and options', async () => {
        const page = 1;
        const searchTerm = 'avatar';
        const expectedUrl = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&page=${page}&include_adult=false&language=en-US`;

        // Mock apiClient response
        const mockResponse = { data: 'mock data' };
        (apiClient as jest.Mock).mockResolvedValue(mockResponse);

        // Call the function under test
        await getMoviesCollection(page, searchTerm);

        // Assert that apiClient was called with the correct URL and options
        expect(apiClient).toHaveBeenCalledWith(expectedUrl, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: expect.any(String), // Check for any string Authorization header
            },
        });
    });

    it('returns data from apiClient', async () => {
        const page = 1;
        const searchTerm = 'avatar';
        const mockResponse = { data: 'mock data' };
        (apiClient as jest.Mock).mockResolvedValue(mockResponse);

        // Call the function under test
        const result = await getMoviesCollection(page, searchTerm);

        // Assert that the function returns the correct data
        expect(result).toEqual(mockResponse);
    });

    it('handles errors from apiClient', async () => {
        const page = 1;
        const searchTerm = 'avatar';
        const errorMessage = 'Error fetching data';
        (apiClient as jest.Mock).mockRejectedValue(new Error(errorMessage));

        // Call the function under test
        await expect(getMoviesCollection(page, searchTerm)).rejects.toThrow(errorMessage);
    });
});
