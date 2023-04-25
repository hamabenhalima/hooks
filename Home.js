import React from "react";
import { Link } from "react-router-dom";
import movies from "./movies";

function Home() {
  return (
    <div>
      <h1>Movie App</h1>
      <div className="movies">
        {movies.map((movie) => (
          <Link to={`/trailer/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
                <p>{movie.releaseYear}</p>
                <p>Rating: {movie.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;