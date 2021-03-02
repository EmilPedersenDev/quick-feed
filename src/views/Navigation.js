import React from "react";
import "../assets/style/navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/manager/id">
            <p>Manager</p>
          </Link>
          <ul className="nav-sub-list">
            <li className="nav-sub-list-item">
              <Link to="/manager/id">
                <img src="profile.svg" alt="" />
                <span>Emil</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/clients">Clients</Link>
        </li>
        <li className="nav-item">
          <button>Logout</button>
        </li>
        <li className="nav-item">
          <Link to="/team">
            <p>Team</p>
          </Link>
          <ul className="nav-sub-list">
            <li className="nav-sub-list-item">
              <Link to="/team">
                <img src="profile.svg" alt="" />
                <span>Nisse</span>
              </Link>
            </li>
            <li className="nav-sub-list-item">
              <Link to="/team">
                <img src="profile.svg" alt="" />
                <span>Nisse</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
