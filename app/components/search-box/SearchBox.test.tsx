import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBox from './SearchBox';
import MovieDBContext from '../../context/moviedb-context/context';
import { setSearchTerm } from '../../context/actions/actions';

jest.mock('../../hooks/useDebounce', () => {
    return (fn: Function, delay: number) => {
        const debouncedFn = (...args: any) => fn(...args);
        debouncedFn.cancel = jest.fn();
        return debouncedFn;
    };
});

jest.mock('../../context/actions/actions', () => ({
    setSearchTerm: jest.fn(),
}));

describe('SearchBox Component', () => {
    let dispatch: jest.Mock;

    beforeEach(() => {
        dispatch = jest.fn();
    });

    const renderWithContext = (state: any) => {
        render(
            <MovieDBContext.Provider value={{ state, dispatch }}>
                <SearchBox />
            </MovieDBContext.Provider>
        );
    };

    it('should render the search box', () => {
        const state = { searchTerm: '' };

        renderWithContext(state);

        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('should update the input value and call debouncedSetSearchTerm on input change', async () => {
        const state = { searchTerm: '' };

        renderWithContext(state);

        const input = screen.getByPlaceholderText('Search...');
        fireEvent.change(input, { target: { value: 'Inception' } });

        expect(input).toHaveValue('Inception');

        await waitFor(() => {
            expect(setSearchTerm).toHaveBeenCalledWith('Inception');
        });
    });

    it('should set the initial input value from context state', () => {
        const state = { searchTerm: 'Interstellar' };

        renderWithContext(state);

        const input = screen.getByPlaceholderText('Search...');
        expect(input).toHaveValue('Interstellar');
    });

});
