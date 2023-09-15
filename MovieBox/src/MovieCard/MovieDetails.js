import React, { useState, useEffect } from "react";
import Loading from "../LoadingSection/Loading";
import MovieDetailSet from './MovieDetailSet';
import { Link, useParams } from "react-router-dom";
import tv from "../assets/tv.png";
import './MovieDetails.css';

export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api_key = "261b34855ce740d5613d726a1dd68fe2";
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`, {
          headers: {
            Accept: "application/json"
          }
        })
        const result = await response.json();
        setDetails(result);
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    }

    getDetails();
  }, [])

  return (
    <div className="movie-detail-card">
      <div className="sidebar">
        <div className="header">
          <img src={tv} alt="logo" /><span>MovieBox</span>
        </div>
        <div className="sidebar-menu">
          <ul>
            <Link to="/home"><li><ion-icon name="home-outline"></ion-icon> Home</li></Link>
            <Link to="/movies">
              <li className="active"><ion-icon name="videocam-outline"></ion-icon> Movies</li>
            </Link>
            <Link to="/tv_series"><li><ion-icon name="tv-outline"></ion-icon> TV Series</li></Link>
            <Link to="/upcoming"><li><ion-icon name="calendar-outline"></ion-icon> Upcoming</li></Link>
          </ul>
        </div>
        <div className="ad">
          <h3>Play movie quizes and earn free tickets</h3>
          <p>50k people are playing now</p>
          <button>start playing</button>
        </div>
        <div className="logout">
        <ion-icon name="log-in"></ion-icon> <span>Logout</span>
        </div>
      </div>
      <div className="main">
        {isLoading ? <Loading /> : <MovieDetailSet details={details} />}
      </div>
    </div>
  )
}