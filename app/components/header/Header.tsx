"use client"
import React from "react";
import "./Header.css";
import { useContext } from "react";
import MovieDBContext from "../../context/moviedb-context/context";
import { DefaultContent } from "../../utils/constants/text-consts";
import movieDBLogo from "../../assets/moviedb-logo.svg";

const Header: React.FC = () => {
    const { state } = useContext(MovieDBContext);
    const { pageTitle } = state;

    return (
        <header className="header" aria-label="Main Header">
            <div className="header-left">
                <img
                    src={movieDBLogo.src}
                    alt={DefaultContent.movieDBLogoAltText}
                    className="header-logo"
                    aria-label="Movie DB Logo"
                />
            </div>
            <div className="header-right">
                <h1>{pageTitle}</h1>
                <h3 aria-label="Header Text">{DefaultContent.headerText}</h3>
            </div>
        </header>
    );
};

export default Header;
