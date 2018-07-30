import React, { Component } from "react";
import "../App.css";
import { Col, Card, CardImg, CardFooter } from "reactstrap";

class Movie extends Component {
  render() {
    const title = this.props.movie.title;
    return (
      <Col md="3" sm="4" xs="6" className="mb-4">
        <Card className="h-100">
          <CardImg
            top
            width="100%"
            src={this.props.movie.image}
            alt="Card image cap"
          />
          <CardFooter className="text-muted">{title}</CardFooter>
        </Card>
      </Col>
    );
  }
}

export default Movie;
