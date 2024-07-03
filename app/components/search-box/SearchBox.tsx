"use client"
import React, { useContext, useState } from "react";
import MovieDBContext from "../../context/moviedb-context/context";
import { setSearchTerm } from "../../context/actions/actions";
import useDebounce from "../../hooks/useDebounce";
import './SearchBox.css';

const SearchBox: React.FC = () => {
    const { state, dispatch } = useContext(MovieDBContext);
    const [term, setTerm] = useState(state.searchTerm);

    const debouncedSetSearchTerm = useDebounce((term: string) => {
        dispatch(setSearchTerm(term));
    }, 300);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
        debouncedSetSearchTerm(e.target.value);
    };

    return (
        <div className="search-box" aria-label="Search Box">
            <input
                type="text"
                value={term}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
                aria-label="Search Input"
            />
        </div>
    );
};

export default SearchBox;

