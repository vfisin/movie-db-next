import { render, screen } from '@testing-library/react';
import {DefaultContent} from "../../utils/constants/text-consts";
import Header from "./Header";
import {MovieDBDataProvider} from "../../context/moviedb-context/provider";

const renderWithContext = () => {
    return render(
        <MovieDBDataProvider>
            <Header />
        </MovieDBDataProvider>
    );
};

describe('Header Component', () => {
    it('renders the logo with correct alt text', () => {
        renderWithContext();
        const logo = screen.getByAltText(DefaultContent.movieDBLogoAltText);
        expect(logo).toBeInTheDocument();
    });


    it('renders the page title', () => {
        renderWithContext();
        const siteTitle = screen.getByText(DefaultContent.headerTitle);
        expect(siteTitle).toBeInTheDocument();
    });


});