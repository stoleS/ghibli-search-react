import React, { Component } from "react";
import "../App.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidebar extends Component {
  render() {
    return (
      <Nav className="col-md-2 d-none d-md-block bg-dark-blue sidebar">
        <div className="sidebar-sticky">
          <Nav className="flex-column">
            <NavItem>
              <NavLink active href="#" className="mint-text">
                <FontAwesomeIcon icon="film" />
                All movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="mint-text">
                <FontAwesomeIcon icon="users" />
                People
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="mint-text">
                <FontAwesomeIcon icon="map-marker-alt" />
                Locations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="mint-text">
                <FontAwesomeIcon icon="kiwi-bird" />
                Species
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="mint-text">
                <FontAwesomeIcon icon="car" />
                Vehicles
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Nav>
    );
  }
}

export default Sidebar;
