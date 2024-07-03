import { useContext } from "react";
import MovieDBContext from "../../context/moviedb-context/context";
import { MovieListDetails } from "../../context/moviedb-context/types";
import ThumbnailCard from "../../components/cards/thumbnail-card/ThumbnailCard";
import "./MoviesGallery.css";

const MoviesGallery: React.FC = () => {
    const { state } = useContext(MovieDBContext);
    const { data } = state;

    return (
        <div className="gallery-container" aria-label="Movies Gallery">
            {data && data.length > 0 ? (
                <>
                    {data.map((movie: MovieListDetails) => (
                        <ThumbnailCard
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            title={movie.title}
                            year={movie.release_date}
                            extract={movie.overview}
                            thumbnail={movie.poster_path}
                        />
                    ))}
                    <p>Total Results: {state.totalResults}</p>
                </>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default MoviesGallery;
