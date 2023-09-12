import React from 'react';
import { v4 as uuid4 } from 'uuid';
import Movies from './Movies';
import './MovieCard.css';

export default function MovieCard({ movies }) {
  return (
    <div className="movieCard">
      {movies.map((movie) => <Movies key={uuid4()} movie={movie} />)}
    </div>
  )
}