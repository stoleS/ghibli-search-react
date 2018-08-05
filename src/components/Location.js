import React, { Component } from "react";
import "../App.css";
import { Col, Table } from "reactstrap";

class Location extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    return (
      <Col md="12">
        <Table responsive dark hover className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Climate</th>
              <th>Terrain</th>
              <th>Water surface</th>
              <th>Movies</th>
            </tr>
          </thead>
          <tbody>
            {this.props.locations.map((location, i) => {
              const movie = this.props.movies.filter(
                movie => movie.url === location.films[0]
              );
              return (
                <tr key={location.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{location.name}</td>
                  <td>{location.climate}</td>
                  <td>{location.terrain}</td>
                  <td>{location.surface_water}</td>
                  <td>{movie[0].title}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}

export default Location;
