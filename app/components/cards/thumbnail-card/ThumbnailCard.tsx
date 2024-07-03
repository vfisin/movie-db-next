import React, { useCallback } from "react";
import "./ThumbnailCard.css";
import Button from "../../button/Button";
import { FaImage } from "react-icons/fa6";
import useLocalStorage from "../../../hooks/useLocalStorage";

interface ThumbnailCardProps {
    name: string;
    title: string;
    year?: string;
    extract: string;
    detailsLink?: string;
    thumbnail?: string;
    id: number;
}

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({
                                                         name,
                                                         title,
                                                         year,
                                                         extract,
                                                         detailsLink,
                                                         thumbnail,
                                                         id,
                                                     }: ThumbnailCardProps) => {
    const [owned, setOwned] = useLocalStorage<number[]>("ownedMovies", []);

    const handleSaveClick = useCallback(() => {
        if (!owned.includes(id)) {
            setOwned([...owned, id]);
        } else {
            setOwned(owned.filter((movieId) => movieId !== id));
        }
    }, [id, owned, setOwned]);

    return (
        <section
            className={`card ${owned.includes(id) ? "owned" : ""}`}
            aria-label={`${name} Thumbnail Card`}
        >
            <div className="card-content">
                <div
                    data-testid="card-img-container"
                    className="card-img-container"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_MOVIE_DB_THUMB_MEDIUM_URL}${thumbnail})`,
                        backgroundSize: "cover",
                    }}
                    aria-label={`${name} Thumbnail`}
                >
                    {!thumbnail && <FaImage className="missing-img" aria-hidden="true" />}
                </div>
                <div className="card-body">
                <div className="card-text">
                    <h2>{name}</h2>
                    <h3>{title}</h3>
                    {year && <h4>{year}</h4>}
                    <p>{extract}</p>
                    {/*<div className="card-actions card-link">*/}
                    {/*    <Button*/}
                    {/*        name={owned.includes(id) ? "Owned" : "Save"}*/}
                    {/*        clickHandler={handleSaveClick}*/}
                    {/*        aria-label={owned.includes(id) ? "Mark as Owned" : "Save to My Movies"}*/}
                    {/*        className={owned.includes(id) ? "owned-button" : ""}*/}
                    {/*    />*/}
                    {/*    {detailsLink && (*/}
                    {/*        <a*/}
                    {/*            data-testid="details-link"*/}
                    {/*            href={detailsLink}*/}
                    {/*            aria-label={`View details of ${name}`}*/}
                    {/*        >*/}
                    {/*            <Button name="Details Page" aria-label="Details Page Button" />*/}
                    {/*        </a>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </div>
                <div className="card-actions card-link">
                    <Button
                        name={owned.includes(id) ? "Owned" : "Save"}
                        clickHandler={handleSaveClick}
                        aria-label={owned.includes(id) ? "Mark as Owned" : "Save to My Movies"}
                        className={owned.includes(id) ? "owned-button" : ""}
                    />
                    {detailsLink && (
                        <a
                            data-testid="details-link"
                            href={detailsLink}
                            aria-label={`View details of ${name}`}
                        >
                            <Button name="Details Page" aria-label="Details Page Button" />
                        </a>
                    )}
                </div>
                </div>
            </div>
        </section>
    );
};

export default ThumbnailCard;
