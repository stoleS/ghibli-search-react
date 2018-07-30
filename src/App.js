import React, { Component } from "react";
import update from "immutability-helper";
import SearchBar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Movie from "./components/Movie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container, Row, Col } from "reactstrap";
import {
  faFilm,
  faUsers,
  faMapMarkerAlt,
  faKiwiBird,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faFilm, faUsers, faMapMarkerAlt, faKiwiBird, faCar);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterMovies: [],
      search: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({ movies: data, filterMovies: data, isLoading: false })
      )
      .then(() =>
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
      );
  }

  onSearch = e =>
    this.setState({
      search: e.target.value,
      movies: this.state.filterMovies.filter(movie =>
        new RegExp(e.target.value, "i").exec(movie.title)
      )
    });

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <Container fluid>
          <Row>
            <Sidebar />
            <Col role="main" className="col-md-10 ml-sm-auto px-4">
              <Row className="pt-4">
                {this.state.movies.map(movie => {
                  return <Movie key={movie.id} movie={movie} />;
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
