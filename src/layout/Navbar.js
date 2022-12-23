import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid p-4 my-1 border">
          <Link className="navbar-brand " to="/">
            Employee System
          </Link>
          
          <div className="btn-group btn-group-md">
            <button
              className="btn btn-outline-secondary btn-lg dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link className="btn" to="/addEmployee">
                  Add Employee
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-item">
                <Link className = "btn" to="/">Employee List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
