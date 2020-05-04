import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllMovies from "./components/AllMovies";
import AddChoose from "./components/AddChoose";
import AddMovieForm from "./components/form/AddMovieForm";
import SearchImdb from "./components/imdb/SearchImdb";
import Dashboard from "./components/dashboard/Dashboard";
import EditTemplate from "./components/dashboard/EditTemplate";
import MovieProfile from "./components/MovieProfile";
import ChooseMovie from "./components/imdb/ChooseMovie";

import "./App.scss";

function App() {
  return (
    <Router>
      <nav>
        <h1 className="main-title">
          <Link to="/">Quarantine Stream</Link>
        </h1>
        <p className="main-subtitle">Currated by Dave Francese</p>
      </nav>
      <Switch>
        <Route exact path="/">
          <AllMovies />
        </Route>
        <Route
          exact
          path="/movie/:id"
          render={props => <MovieProfile {...props} />}
        />
        <Route exact path="/addmovieform">
          <AddChoose />
        </Route>
        <Route
          exact
          path="/choosemovie/:imdbID"
          render={props => <ChooseMovie {...props} />}
        />
        <Route exact path="/addmoviemanually">
          <AddMovieForm />
        </Route>
        <Route exact path="/addmoviewithimdb">
          <SearchImdb />
        </Route>
        <Route exact path="/mymoviedashboard">
          <Dashboard />
        </Route>
        <Route
          exact
          path="/dashboard/:movie"
          render={props => <EditTemplate {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
