import React, { Component } from "react";
import "../App.css";
import {
  Col,
  Card,
  CardImg,
  CardText,
  Badge,
  Popover,
  PopoverBody
} from "reactstrap";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    const id = this.props.movie.id;
    const title = this.props.movie.title;
    const score = this.props.movie.rt_score;
    const releaseDate = this.props.movie.release_date;
    const description = this.props.movie.description;
    const director = this.props.movie.director;
    const producer = this.props.movie.producer;
    return (
      <Col
        md="3"
        sm="4"
        xs="6"
        lg="2"
        id={`tooltip-${id}`}
        className="mb-3 card-container rounded"
      >
        <Card className="h-100" onClick={this.toggle}>
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
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target={`tooltip-${id}`}
          toggle={this.toggle}
        >
          <PopoverBody>
            <p className="popover-title">{title}</p>
            <p className="popover-subtitle text-muted">{releaseDate}</p>
            <p className="popover-description">{description}</p>
            <p className="popover-description" style={{ marginBottom: "0" }}>
              <b>Director:</b> {director}
            </p>
            <p className="popover-description" style={{ marginBottom: "0" }}>
              <b>Producer:</b> {producer}
            </p>
          </PopoverBody>
        </Popover>
      </Col>
    );
  }
}

export default Movie;
