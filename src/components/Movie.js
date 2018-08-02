import React, { Component } from "react";
import "../App.css";
import { Col, Card, CardImg, CardText, Badge } from "reactstrap";

class Movie extends Component {
  render() {
    const title = this.props.movie.title;
    const score = this.props.movie.rt_score;
    const releaseDate = this.props.movie.release_date;
    const director = this.props.movie.director;
    return (
      <Col md="3" sm="4" xs="6" lg="2" className="mb-3 card-container rounded">
        <Card className="h-100">
          <CardImg
            top
            width="100%"
            src={this.props.movie.image}
            alt="Card image cap"
            className="shadow-sm rounded"
          />
          <Badge pill className="rating-badge">
            {score}
          </Badge>
          <CardText className="movie-title">{title}</CardText>
          <CardText className="movie-title movie-subtitle text-muted">
            {releaseDate}, {director}
          </CardText>
        </Card>
      </Col>
    );
  }
}

export default Movie;
