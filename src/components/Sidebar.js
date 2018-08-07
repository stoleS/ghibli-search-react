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

const sortItems = [
  {
    name: "Year asc.",
    arrow: "arrow-up",
    checkedName: "yearAsc"
  },
  {
    name: "Year desc.",
    arrow: "arrow-down",
    checkedName: "yearDesc"
  },
  {
    name: "Rating asc.",
    arrow: "arrow-up",
    checkedName: "ratingAsc"
  },
  {
    name: "Rating Desc.",
    arrow: "arrow-down",
    checkedName: "ratingDesc"
  }
];

class Sidebar extends Component {
  render() {
    return (
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
              <Badge className="movie-counter-badge">
                {this.props.peoplesNumber}
              </Badge>
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
              <Badge className="movie-counter-badge">
                {this.props.locationsNumber}
              </Badge>
            </NavLink>
          </NavItem>
          <DropdownItem divider />
          <FormGroup>
            <Label
              for="exampleCheckbox"
              className={this.props.isDisabled === true ? "text-muted" : ""}
            >
              Sort by:
            </Label>
            {sortItems.map(sortItem => (
              <FormGroup key={sortItem.name} check>
                <Label
                  check
                  className={this.props.isDisabled === true ? "text-muted" : ""}
                >
                  <Input
                    type="radio"
                    name="radio2"
                    checked={
                      this.props.checked === sortItem.checkedName
                        ? "checked"
                        : ""
                    }
                    onChange={() =>
                      this.props.handleChecked(sortItem.checkedName)
                    }
                    disabled={this.props.isDisabled}
                  />{" "}
                  {sortItem.name} <FontAwesomeIcon icon={sortItem.arrow} />
                </Label>
              </FormGroup>
            ))}
          </FormGroup>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
