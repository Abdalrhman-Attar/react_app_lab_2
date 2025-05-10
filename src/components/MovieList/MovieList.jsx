import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "838492db2acad970f15371cb95ec89f8";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
      {movies.map((movie) => (
        <Link to={`/movieDetails/${movie.id}`} key={movie.id} style={{ textDecoration: "none", color: "inherit", width: "200px", textAlign: "center" }}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} style={{ width: "100%", borderRadius: "10px" }} />
          <h5>{movie.title}</h5>
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
