import React, { Component } from "react";
import update from "immutability-helper";
import SearchBar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Movie from "./components/Movie";
import Person from "./components/Person";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container, Row, Col } from "reactstrap";
import {
  faFilm,
  faUsers,
  faMapMarkerAlt,
  faKiwiBird,
  faCar,
  faSearch,
  faArrowUp,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(
  faFilm,
  faUsers,
  faMapMarkerAlt,
  faKiwiBird,
  faCar,
  faSearch,
  faArrowUp,
  faArrowDown
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterMovies: [],
      people: [],
      search: "",
      isLoading: false,
      menuChoice: "people"
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({ movies: data, filterMovies: data, isLoading: false })
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

  onSearch = e =>
    this.setState({
      search: e.target.value,
      movies: this.state.filterMovies.filter(movie =>
        new RegExp(e.target.value, "i").exec(movie.title)
      )
    });

  handleMenu = choice => {
    this.setState({ menuChoice: choice });
  };

  fetchPeople = () => {
    if (this.state.people.length === 0) {
      const people = "https://ghibliapi.herokuapp.com/people/";
      fetch(people)
        .then(res => res.json())
        .then(data => this.setState({ people: data }));
    }
  };

  render() {
    const isLoading = this.state.isLoading;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    const menu = this.state.menuChoice;
    let main;
    if (menu === "all") {
      main = this.state.movies.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      });
    } else if (menu === "people") {
      main = (
        <Person fetchPeople={this.fetchPeople} people={this.state.people} />
      );
    }

    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <Container fluid>
          <Row>
            <Sidebar
              selected={this.state.menuChoice}
              moviesNumber={this.state.filterMovies.length}
              handleMenu={this.handleMenu}
            />
            <Col role="main" className="col-md-10 ml-sm-auto main">
              <Row className="pt-4">{main}</Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
