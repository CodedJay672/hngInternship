import React, { useState, useEffect } from "react";
import Hero from "./HeroSection/Hero";
import Featured from "./FeaturedSection/Featured";
import Footer from "./FooterSection/Footer";

export default function App() {
  const [movies, setMovies] = useState(new Array(10).fill({}));
  const APIKey = "261b34855ce740d5613d726a1dd68fe2";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}`, {
        headers: {
          Accept: 'application/json'
        }
      })
      const data = await response.json();
      setMovies(c => data.results);
    }

    fetchMovies();
  }, [])

  return (
    <>
      <div className="heroSection">
        <Hero />
      </div>
      <div className="featuresSection">
        <Featured movies={movies} />
      </div>
      <div className="footerSection">
        <Footer />
      </div>
    </>
  )
}
