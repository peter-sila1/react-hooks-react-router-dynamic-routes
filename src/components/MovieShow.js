import React from "react";
import { useParams } from "react-router-dom";


function MovieShow({ movies }) {
  const { movieId, paramMovieId } = useParams(); 
  const movie = movies.find((movie) => movie.id === parseInt(paramMovieId));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>Title: {movie.title}</h3>
      <p>Movie ID: {movie.id}</p>
    </div>
  );
}

export default MovieShow;
