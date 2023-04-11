import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Masonry from 'react-masonry-css';
import '../App.css';

const MovieGallery = ({ movies, genres }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    const getYear = (dateString) => {
        return new Date(dateString).getFullYear();
    };

    const getGenres = (genreIds) => {
        return genreIds
            .map((id) => {
                const genre = genres.find((genre) => genre.id === id);
                return genre ? genre.name : '';
            })
            .join(', ');
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {movies.map((movie) => (
                <Card key={movie.id} className="movie-card">
                    <Image
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : `${process.env.PUBLIC_URL}/comingsoon.webp`
                        }
                        alt={`${movie.title} poster`}
                        wrapped
                        ui={false}
                    />
                    <div className="movie-details">
                        <Card.Header className="movie-title">{movie.title}</Card.Header>
                        <Card.Meta>
                            <span className="date">{getYear(movie.release_date)}</span>
                            <span className="dot">•</span>
                            <span className="genres">{getGenres(movie.genre_ids)}</span>
                        </Card.Meta>
                        <Card.Content extra>
                            <Rating
                                icon="star"
                                defaultRating={Math.round(movie.vote_average / 2)}
                                maxRating={5}
                                clearable
                                onRate={(e, { rating }) =>
                                    setTimeout(() => {
                                        e.target.parentNode.setAttribute("aria-checked", "false");
                                        e.target.parentNode.parentNode.parentNode.childNodes.forEach((star, index) => {
                                            if (index < Math.round(movie.vote_average / 2)) {
                                                star.setAttribute("aria-checked", "true");
                                            } else {
                                                star.setAttribute("aria-checked", "false");
                                            }
                                        });
                                    }, 100)
                                }
                            />
                            <span className="votes">({movie.vote_count} votes)</span>
                        </Card.Content>
                    </div>
                </Card>
            ))}
        </Masonry>
    );
};

export default MovieGallery;
