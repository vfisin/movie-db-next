"use client"
import './HomePage.css'

import React, { useEffect, useContext, useCallback } from "react";
import {
    loadMoviesInProgress,
    loadMoviesFailure,
    loadMoviesSuccess,
    pageChange,
    setSearchTerm,
} from "../../context/actions/actions";

import { getMoviesCollection } from "../../services/movies-service/moviesService";
import MovieDBContext from "../../context/moviedb-context/context";
import { MovieListResponse } from "../../context/moviedb-context/types";
import PageLoadingSpinner from "../../components/page-loading-spinner/PageLoadingSpinner";
import ErrorModal from "../../components/modals/error-modal/ErrorModal";
import MoviesGallery from "../../features/movies-gallery/MoviesGallery";
import { DefaultContent } from "../../utils/constants/text-consts";
import Button from "../../components/button/Button";
import PageNavigation from "../../components/page-navigation/PageNavigation";

const HomePage: React.FC = () => {
    console.log('env', process.env.MOVIE_DB_API_KEY);
    const { state, dispatch } = useContext(MovieDBContext);
    const {
        data,
        isLoading,
        apiError,
        pageNum,
        searchTerm,
        totalResults
    } = state;

    const getMoviesSearchData = async () => {
        try {
            dispatch(loadMoviesInProgress());
            const moviesData: MovieListResponse = await getMoviesCollection(pageNum, searchTerm);
            dispatch(
                loadMoviesSuccess({
                    data: moviesData.results,
                    pageNum: pageNum,
                    totalPages: moviesData.total_pages,
                    totalResults: moviesData.total_results
                })
            );
        } catch (e) {
            dispatch(loadMoviesFailure(e));
        }
    };

    const handlePageChange = useCallback(
        (pNum: number) => {
            if (pNum !== pageNum) {
                dispatch(pageChange(pNum));
            }
        },
        [pageNum, dispatch]
    );

    useEffect(() => {
        if (pageNum !== undefined) {
            void getMoviesSearchData();
        }
    }, [pageNum, searchTerm]);

    const handleFetchMoviesClick = () => {
        dispatch(setSearchTerm(DefaultContent.defaultSearchTerm));
    };

    return (
        <div className="home-page-container">
            {!data?.length ? (
                <Button
                    name={DefaultContent.fetchMoviesButton}
                    clickHandler={handleFetchMoviesClick}
                    disabled={isLoading}
                    aria-label="Fetch Movies Button"
                />
            ) : null}

            {isLoading ? <PageLoadingSpinner /> : null}
            {apiError ? <ErrorModal /> : null}
            {data?.length ? <MoviesGallery /> : null}
            {totalResults ? <PageNavigation handlePageChange={handlePageChange} /> : null}
        </div>
    );
};

export default HomePage;
