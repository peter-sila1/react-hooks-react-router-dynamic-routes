import React,{useState} from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
 const renderMovies = movies.map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Movies List</h2>
      <ul>{renderMovies}</ul>
    </div>
  );
}

export default MoviesList;