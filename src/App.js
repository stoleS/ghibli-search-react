import React, { Component } from "react";
import update from "immutability-helper";
import SearchBar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Movie from "./components/Movie";
import Person from "./components/Person";
import Location from "./components/Location";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container, Row, Col } from "reactstrap";
import {
  faFilm,
  faUsers,
  faMapMarkerAlt,
  faSearch,
  faArrowUp,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faFilm, faUsers, faMapMarkerAlt, faSearch, faArrowUp, faArrowDown);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterMovies: [],
      people: [],
      filterPeople: [],
      location: [],
      filterLocation: [],
      search: "",
      isLoading: false,
      menuChoice: "all",
      checked: "yearAsc",
      isDisabled: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          movies: data,
          filterMovies: data,
          isLoading: false
        })
      );
    /* .then(() =>
        this.state.movies.forEach((element, i) => {
          const urlImage = `https://kitsu.io/api/edge/anime?filter[text]=${
            element.title
          }&page[limit]=1`;
          fetch(urlImage)
            .then(res => res.json())
            .then(data =>
              this.setState({
                movies: update(this.state.movies, {
                  [i]: {
                    image: { $set: data.data[0].attributes.posterImage.small }
                  }
                }),
                filterMovies: update(this.state.filterMovies, {
                  [i]: {
                    image: { $set: data.data[0].attributes.posterImage.small }
                  }
                })
              })
            );
        })
      ); */
  }

  onSearch = e => {
    if (this.state.menuChoice === "all") {
      this.setState({
        search: e.target.value,
        movies: this.state.filterMovies.filter(movie =>
          new RegExp(e.target.value, "i").exec(movie.title)
        )
      });
    } else if (this.state.menuChoice === "people") {
      this.setState({
        search: e.target.value,
        people: this.state.filterPeople.filter(person =>
          new RegExp(e.target.value, "i").exec(person.name)
        )
      });
    } else if (this.state.menuChoice === "locations") {
      this.setState({
        search: e.target.value,
        location: this.state.filterLocation.filter(location =>
          new RegExp(e.target.value, "i").exec(location.name)
        )
      });
    }
  };

  handleMenu = choice => {
    this.setState({ menuChoice: choice });
    if (choice !== "all") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  };

  handleChecked = choice => {
    this.setState({ checked: choice });
    const sortedMovies = this.state.filterMovies;
    if (choice === "yearDesc") {
      sortedMovies.sort((a, b) => b.release_date - a.release_date);
      this.setState({
        filterMovies: sortedMovies,
        movies: this.state.filterMovies.filter(movie =>
          new RegExp(this.state.search, "i").exec(movie.title)
        )
      });
    } else if (choice === "yearAsc") {
      sortedMovies.sort((a, b) => a.release_date - b.release_date);
      this.setState({
        filterMovies: sortedMovies,
        movies: this.state.filterMovies.filter(movie =>
          new RegExp(this.state.search, "i").exec(movie.title)
        )
      });
    } else if (choice === "ratingAsc") {
      sortedMovies.sort((a, b) => a.rt_score - b.rt_score);
      this.setState({
        filterMovies: sortedMovies,
        movies: this.state.filterMovies.filter(movie =>
          new RegExp(this.state.search, "i").exec(movie.title)
        )
      });
    } else if (choice === "ratingDesc") {
      sortedMovies.sort((a, b) => b.rt_score - a.rt_score);
      this.setState({
        filterMovies: sortedMovies,
        movies: this.state.filterMovies.filter(movie =>
          new RegExp(this.state.search, "i").exec(movie.title)
        )
      });
    }
  };

  fetchPeople = () => {
    if (this.state.people.length === 0) {
      this.setState({ isLoading: true });
      const people = "https://ghibliapi.herokuapp.com/people/";
      fetch(people)
        .then(res => res.json())
        .then(data =>
          this.setState({ people: data, filterPeople: data, isLoading: false })
        );
    }
  };

  fetchLocation = () => {
    if (this.state.location.length === 0) {
      this.setState({ isLoading: true });
      const location = "https://ghibliapi.herokuapp.com/locations/";
      fetch(location)
        .then(res => res.json())
        .then(data =>
          this.setState({
            location: data,
            filterLocation: data,
            isLoading: false
          })
        );
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    const menu = this.state.menuChoice;
    let main, loading;
    console.log(isLoading);

    if (isLoading) {
      loading = <h1 className="display-1">Loading...</h1>;
    }

    if (menu === "all") {
      main = this.state.movies.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      });
    } else if (menu === "people") {
      main = (
        <Person
          fetchPeople={this.fetchPeople}
          people={this.state.people}
          movies={this.state.filterMovies}
        />
      );
    } else if (menu === "locations") {
      main = (
        <Location
          fetchLocation={this.fetchLocation}
          locations={this.state.location}
          movies={this.state.filterMovies}
        />
      );
    }

    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <Container fluid>
          <Row>
            <Sidebar
              selected={this.state.menuChoice}
              checked={this.state.checked}
              moviesNumber={this.state.movies.length}
              peoplesNumber={this.state.people.length}
              locationsNumber={this.state.location.length}
              handleMenu={this.handleMenu}
              handleChecked={this.handleChecked}
              isDisabled={this.state.isDisabled}
            />
            <Col role="main" className="col-md-10 ml-sm-auto main">
              <Row className="pt-4">
                {main}
                {loading}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
