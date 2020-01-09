import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { Button } from "./Button";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
        <Link to="/">
          <img src={logo} alt="Store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <div class="col-xs-6 col-md-4 ml-50 px-15">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              id="txtSearch"
            />
            <div class="input-group-btn">
              <button class="btn btn-primary" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <Link to="/cart" className="ml-auto">
          <Button>
            <span>
              <i className="fa fa-cart-plus"></i>
            </span>
            My Cart
          </Button>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
