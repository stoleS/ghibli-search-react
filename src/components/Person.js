import React, { Component } from "react";
import "../App.css";
import { Col, Table } from "reactstrap";

class Person extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <Col md="12">
        <Table responsive dark hover className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Movie</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Eye color</th>
              <th>Hair color</th>
            </tr>
          </thead>
          <tbody>
            {this.props.people.map((person, i) => {
              const movie = this.props.movies.filter(
                movie => movie.url === person.films[0]
              );
              return (
                <tr key={person.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{person.name}</td>
                  <td>{movie[0].title}</td>
                  <td>{person.gender}</td>
                  <td>{person.age}</td>
                  <td>{person.eye_color}</td>
                  <td>{person.hair_color}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}

export default Person;
