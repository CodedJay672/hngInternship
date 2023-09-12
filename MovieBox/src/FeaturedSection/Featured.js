import React from "react";
import "./Featured.css";
import MovieCard from '../MovieCard/MovieCard';

export default function Featured({ movies }) {
  return (
    <div className="featuredMovies">
      <div className="title">
        <h1>Featured Movie</h1>
        <i>See more</i>
      </div>
      <MovieCard movies={movies} />
    </div>
  )
}