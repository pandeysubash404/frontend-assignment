// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul
        className="nav nav-tabs align-items-center"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <li style={{ backgroundColor: "#2B4EFF" }}>
          <Link className="nav-link text-bg-primary" to="/">
            <h4>Online-Store</h4>
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link" to="/search">
            Search
          </Link>
        </li>
        <style>
          {`
      .nav-item:hover {
        background-color: #FFFFFF;
      }
      `}
        </style>
      </ul>
    );
  }
}

export default NavBar;
