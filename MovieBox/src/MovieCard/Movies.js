import React from "react";
import './Movies.css';

export default function Movies({ movie }) {
  return (
    <div data-testid="movie-card" className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="250"
        height="370"
        data-testid="movie-poster"
      />
      <div className="movieInfo">
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">{movie.release_date}</p>
      </div>
    </div>
  )
}