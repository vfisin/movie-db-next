import { render, screen } from '@testing-library/react';
import ThumbnailCard from './ThumbnailCard';

describe('Testing Thumbnail Card Component', () => {
    it('should render card with all props', () => {
        render(

                <ThumbnailCard
                    id={54834}
                    name="Inception"
                    title="Sci-Fi Thriller"
                    year="2010"
                    extract="A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
                    detailsLink="https://www.example.com/inception"
                    thumbnail="inception.jpg"
                />

        );

        expect(screen.getByText('Inception')).toBeInTheDocument();
        expect(screen.getByText('Sci-Fi Thriller')).toBeInTheDocument();
        expect(screen.getByText('2010')).toBeInTheDocument();
        expect(screen.getByText('A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.')).toBeInTheDocument();

        const link = screen.getByTestId('details-link');
        expect(link).toHaveAttribute('href', 'https://www.example.com/inception');

        const cardImgContainer = screen.getByTestId('card-img-container');
        expect(cardImgContainer).toHaveStyle({
            backgroundImage: `url(${process.env.NEXT_PUBLIC_MOVIE_DB_THUMB_MEDIUM_URL}inception.jpg)`,
        });
    });

    it('should render card with no image', () => {
        render(

                <ThumbnailCard
                    id={78354}
                    name="Interstellar"
                    title="Epic Sci-Fi"
                    year="2014"
                    extract="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
                    detailsLink="https://www.example.com/interstellar"
                    thumbnail=""
                />

        );

        const cardImgContainer = screen.getByTestId('card-img-container');
        expect(cardImgContainer).not.toHaveStyle({
            backgroundImage: `url(${process.env.MOVIE_DB_THUMB_MEDIUM_URL}inception.jpg)`,
        });

        // Check for the missing image icon
        const missingImageIcon = screen.getByTestId('card-img-container').querySelector('svg');
        expect(missingImageIcon).toBeInTheDocument();
    });
});
