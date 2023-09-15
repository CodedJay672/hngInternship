import React from "react";
import "./Hero.css";
import tv from "../assets/tv.png";
import Pagination from "../assets/Pagination Box.png";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="navbar">
        <div className="logo">
          <img src={tv} alt="logo" />
          <h1>MovieBox</h1>
        </div>
        <input type="search" placeholder="What do you want to watch?" />
        <div className="signin">
          <p>Sign in</p>
          <ion-icon name="log-in"></ion-icon>
        </div>
      </div>
      <div className="pagination">
        <div className="description">
          <h1>John Wick 3: Parabellum</h1>
          <div className="rating">
            <figure>
              <img src={imdb} alt="IMDb" />
              <figcaption>86.0/100</figcaption>
            </figure>
            <figure>
              <img src={tomato} alt="Rotten Tomatoes" />
              <figcaption>97%</figcaption>
            </figure>
          </div>
          <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <div className="watch">
            <ion-icon name="play-circle"></ion-icon>
            <p>WATCH TRAILER</p>
          </div>
        </div>
        <img src={Pagination} alt="pagination" />
      </div>
    </div>
  )
}