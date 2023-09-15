import React from "react";
import MovieCrew from './MovieCrew';
import './MovieDetailSet.css';

export default function MovieDetailSet({ details }) {
  const {
    title,
    release_date,
    runtime,
    overview,
    backdrop_path,
    genres,
    vote_average,
    vote_count
  } = details;
  const backdrop_img = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const release_year = new Date(release_date).getUTCFullYear();
  const rating = (vote_average * 10).toFixed(2);


  return (
    <>
      <div className="play-thriller">
        <div className="thriller-container">
          <ion-icon name="play-outline"></ion-icon>
          <img src={backdrop_img} alt="backdrop image" width="680" /></div>
        <div className="wrapper">
          <div>
            <span data-testid="movie-title">{title} - </span>
            <span data-testid="movie-release-date">{release_year} - </span>
            <span data-testid="movie-runtime">{runtime} min - </span>
            <span className="genre">{genres && genres.map(genre => genre.name).join(", ")}</span>
          </div>
          <div className="likes">
            <ion-icon name="thumbs-up-outline"></ion-icon> <span> {rating} Likes </span> | <span> {vote_count} votes</span>
          </div>
        </div>
      </div>
      <div className="movie-data">
        <div className="overview">
          <div className="crew">
            <p data-testid="movie-overview">{overview}</p>          
            <p>Director: <span className="diff-col">Joseph Kosinski</span></p>
            <p>Writers :  <span className="diff-col">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
            <p>Stars: <span className="diff-col">Tom Cruise, Jennifer Connelly, Val Kilmer</span></p>
          </div>
          <MovieCrew />
        </div>
      </div>
    </>
  )
}