import React from "react";
import './Movies.css';
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { Link } from "react-router-dom";

export default function Movies({ movie }) {
  const hrefPath = `/movies/${movie.id}`;
  return (
    <Link to={hrefPath} data-testid="movie-card" className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="250"
        height="370"
        data-testid="movie-poster"
      />
      <div className="movieInfo">
        <p data-testid="movie-release-date">Realesed: {movie.release_date}</p>
        <h2 data-testid="movie-title">{movie.title}</h2>
        <div className="rating">
            <figure>
              <img src={imdb} alt="IMDb" />
              <figcaption>{movie.vote_average * 10}.0/100</figcaption>
            </figure>
            <figure>
              <img src={tomato} alt="Rotten Tomatoes" />
              <figcaption>97%</figcaption>
            </figure>
          </div>
      </div>
    </Link>  
  )
}