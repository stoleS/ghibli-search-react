import React, { Component } from "react";
import "../App.css";
import {
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  Badge,
  Input,
  FormGroup,
  Label
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidebar extends Component {
  render() {
    return (
      <Nav className="col-md-2 d-none d-md-block bg-dark-blue sidebar">
        <div className="sidebar-sticky pt-5">
          <Nav className="flex-column">
            <NavItem>
              <NavLink
                href="#"
                className={`mint-text ${
                  this.props.selected === "all" ? "active" : ""
                }`}
                onClick={() => this.props.handleMenu("all")}
              >
                <FontAwesomeIcon icon="film" />
                All movies
                <Badge className="movie-counter-badge">
                  {this.props.moviesNumber}
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={`mint-text ${
                  this.props.selected === "people" ? "active" : ""
                }`}
                onClick={() => this.props.handleMenu("people")}
              >
                <FontAwesomeIcon icon="users" />
                People
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={`mint-text ${
                  this.props.selected === "locations" ? "active" : ""
                }`}
                onClick={() => this.props.handleMenu("locations")}
              >
                <FontAwesomeIcon icon="map-marker-alt" />
                Locations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={`mint-text ${
                  this.props.selected === "species" ? "active" : ""
                }`}
                onClick={() => this.props.handleMenu("species")}
              >
                <FontAwesomeIcon icon="kiwi-bird" />
                Species
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={`mint-text ${
                  this.props.selected === "vehicles" ? "active" : ""
                }`}
                onClick={() => this.props.handleMenu("vehicles")}
              >
                <FontAwesomeIcon icon="car" />
                Vehicles
              </NavLink>
            </NavItem>
            <DropdownItem divider />
            <FormGroup>
              <Label for="exampleCheckbox">Sort by:</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Year{" "}
                  <FontAwesomeIcon icon="arrow-up" />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Year{" "}
                  <FontAwesomeIcon icon="arrow-down" />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Rating{" "}
                  <FontAwesomeIcon icon="arrow-up" />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Rating{" "}
                  <FontAwesomeIcon icon="arrow-down" />
                </Label>
              </FormGroup>
            </FormGroup>
          </Nav>
        </div>
      </Nav>
    );
  }
}

export default Sidebar;
