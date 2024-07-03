import React from "react";
import "./HomeLayoutStyle.css";
import Header from "../../components/header/Header";
import reactLogo from "../../assets/React-icon.png";
import SearchBox from "../../components/search-box/SearchBox";

type HomeLayoutProps = {
    children: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div className="main-layout" aria-label="Main Layout">
            <header className="header-container" aria-label="Header Container">
                <Header />
                <SearchBox aria-label="Search Box" />
            </header>
            <main className="main-content-container" aria-label="Main Content">
                {children}
            </main>
            <footer className="footer-container" aria-label="Footer Container">
                Powered by React 18
                <img src={reactLogo.src} alt="React Logo" className="footer-logo" />
                Developed by Viktor Fisin
            </footer>
        </div>
    );
};

export default HomeLayout;
