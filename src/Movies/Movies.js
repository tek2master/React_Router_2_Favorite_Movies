// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import movieAPI from "./movieAPI";
// Import React Components
import movie from "./movie";
import MovieList from "./MovieList";

class movies extends React.Component {
  rendermovie = props => {
    const { id } = props.match.params;
    // const id = props.match.params.id
    console.log("id: ", id);
    const movie = movieAPI.getOne(id);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return <movie name={movie.name} species={movie.species} />;
    }
  };

  renderMovieList = () => {
    const movies = movieAPI.getAll();
    return <MovieList movies={movies} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.rendermovie} />
        </Switch>
      </div>
    );
  }
}
export default movies;
