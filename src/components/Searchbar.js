import React, { Component } from "react";
import "../App.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          expand="md"
          className="navbar-dark fixed-top bg-imperial flex-md-nowrap p-0 shadow"
        >
          <NavbarBrand href="/" className="col-sm-3 col-md-2 mr-0">
            <FontAwesomeIcon icon="search" /> Ghibli Search
          </NavbarBrand>
          <Input
            type="text"
            className="form-control form-control-dark w-100"
            placeholder="Search"
            aria-label="Search"
            onChange={e => this.props.onSearch(e)}
          />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/stoleS">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;
