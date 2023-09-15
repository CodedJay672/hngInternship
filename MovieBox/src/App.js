import React, { useState, useEffect } from "react";
import Hero from "./HeroSection/Hero";
import Loading from "./LoadingSection/Loading";
import Featured from "./FeaturedSection/Featured";
import Footer from "./FooterSection/Footer";

export default function App() {
  const [movies, setMovies] = useState(new Array(10).fill({}));
  const [loading, setLoading] = useState(true);
  const APIKey = "261b34855ce740d5613d726a1dd68fe2";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}`, {
          headers: {
            Accept: 'application/json'
          }
        })
        const data = await response.json();
        const results = data.results.slice(0, 10);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        throw new Error("Error fetching movies " + error);
      } 
    }

    fetchMovies();
  }, [])

  return (
    <>
      <div className="heroSection">
        <Hero />
      </div>
      <div className="featuresSection">
        {!loading ? <Featured movies={movies} /> : <Loading />}
      </div>
      <div className="footerSection">
        <Footer />
      </div>
    </>
  )
}
