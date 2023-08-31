import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "A River Runs Through It" },
    { id: 2, title: "Se7en" },
    { id: 3, title: "Inception" }
  ]);

  return (
    <div>
      <NavBar />
      <MoviesList movies={movies}/>
      <Switch>
        <Route exact path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route path="/movies/:paramMovieId">
          <MovieShow movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
