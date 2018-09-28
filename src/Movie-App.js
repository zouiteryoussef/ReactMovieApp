import React, { Component } from "react";
import SearchFilter from "./SearchFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList.js";

const inception = {
  id: "movie1",
  title: "Inception",
  rating: 5,
  image: "https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg",
  year: 2010
};

const shawshank = {
  id: "movie2",
  title: "The Lullaby",
  rating: 3,
  image:
    "https://horrornews.net/wp-content/uploads/2018/02/The-Lullaby-2018-movie-Darrell-Roodt-2.jpg",
  year: 2018
};

const shaw = {
  id: "movie3",
  title: "laraider",
  rating: 4,
  image: "http://www.laraider.com/films/filmtr3/promo/affiche3.jpg",
  year: 2016
};

const moviesToDisplay = [inception, shawshank, shaw];
class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 2,
      movies: moviesToDisplay,
      titleFilter: ""
    };
  }

  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    });
  }

  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title
          .toLowerCase()
          .includes(this.state.titleFilter.toLowerCase().trim())
    );
  }

  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <SearchFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={newRating => {
              this.setState({
                minRatingFilter: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-main" />
        <MovieList
          movies={this.getVisibleMovies()}
          onAddMovie={newMovie => this.addNewMovie(newMovie)}
        />
      </div>
    );
  }
}

export default MovieApp;
