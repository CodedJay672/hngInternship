import React from "react";
import './MovieCrew.css';
import Photo from '../assets/Rectangle 37.png';

export default function MovieCrew() {
  return (
    <>
      <div className="btn-wrapper">
        <button className="btn btn-primary">See Showtimes</button>
        <button className="btn btn-secondary">More Watch Options</button>
        <div className="photo">
          <img src={Photo} alt="crew photo" width="200" />
        </div>
      </div>
    </>
  )
}