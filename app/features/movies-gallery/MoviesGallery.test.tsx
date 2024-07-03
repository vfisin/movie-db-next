import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesGallery from './MoviesGallery';
import { MoviesDBState } from '../../context/moviedb-context/types';
import MovieDBContext from '../../context/moviedb-context/context';
import {DefaultContent} from "../../utils/constants/text-consts";

// Mock data for testing
const mockState: MoviesDBState = {
    isLoading: false,
    data: [
        {
            adult: false,
            backdrop_path: 'inception-backdrop.jpg',
            genre_ids: ['28', '12', '878'],
            id: '1',
            name: 'Movie 1',
            original_language: 'en',
            original_title: 'Inception',
            overview: 'A mind-bending thriller',
            popularity: 80.0,
            poster_path: 'inception.jpg',
            release_date: '2010-07-16',
            title: 'Inception',
            video: false,
            vote_average: 8.8,
            vote_count: 21000,
        },
        {
            adult: false,
            backdrop_path: 'matrix-backdrop.jpg',
            genre_ids: ['28', '878'],
            id: '2',
            name: 'Movie 2',
            original_language: 'en',
            original_title: 'The Matrix',
            overview: 'A science fiction classic',
            popularity: 90.0,
            poster_path: 'matrix.jpg',
            release_date: '1999-03-31',
            title: 'The Matrix',
            video: false,
            vote_average: 8.7,
            vote_count: 17000,
        },
    ],
    pageNum: 1,
    totalPages: 1,
    totalResults: 2,
    searchTerm: '',
    apiError: false,
    pageTitle: DefaultContent.headerTitle,
};

describe('MoviesGallery Component', () => {
    it('renders movies when data is available', () => {
        render(
            <MovieDBContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
                <MoviesGallery />
            </MovieDBContext.Provider>
        );

        // Check if each movie card is rendered
        expect(screen.getByText('Inception')).toBeInTheDocument();
        expect(screen.getByText('The Matrix')).toBeInTheDocument();

        // Check if "No data available" message is not rendered
        expect(screen.queryByText('No data available')).not.toBeInTheDocument();
    });

    it('renders "No data available" when data is empty', () => {
        // Modify context state to simulate empty data
        const emptyState = { ...mockState, data: [] };

        render(
            <MovieDBContext.Provider value={{ state: emptyState, dispatch: jest.fn() }}>
                <MoviesGallery />
            </MovieDBContext.Provider>
        );

        // Check if "No data available" message is rendered
        expect(screen.getByText('No data available')).toBeInTheDocument();

        // Check if no movie cards are rendered
        expect(screen.queryByText('Inception')).not.toBeInTheDocument();
        expect(screen.queryByText('The Matrix')).not.toBeInTheDocument();
    });
});
