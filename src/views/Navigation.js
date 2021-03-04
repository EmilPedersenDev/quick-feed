import React, { useState } from "react";
import "../assets/style/navigation.scss";
import { Link } from "react-router-dom";
import LogoutModal from "../components/modal/LogoutModal";
import { useSelector } from "react-redux";
import AdProvider from "../services/AdProvider";

function Navigation({ login }) {
  const AzureAdProvider = new AdProvider();
  const isLoggedIn = useSelector((state) => state.authReducer.isAuthenticated);
  const [isShowing, setIsShowing] = useState(false);

  function showModal() {
    setIsShowing(true);
  }

  function closeModal(e) {
    setIsShowing(false);
  }

  function submitModal() {
    AzureAdProvider.logout();
  }

  return (
    <nav>
      <ul className="nav-container">
        {isLoggedIn && (
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
        )}
        {isLoggedIn && (
          <li className="nav-item">
            <Link to="/clients">Clients</Link>
          </li>
        )}
        <li className="nav-item">
          {!isLoggedIn ? (
            <button onClick={login}>Login</button>
          ) : (
            <button onClick={showModal}>Logout</button>
          )}
        </li>
        {isLoggedIn && (
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
        )}
      </ul>
      <LogoutModal
        isShowing={isShowing}
        onClose={closeModal}
        onSubmit={submitModal}
      ></LogoutModal>
    </nav>
  );
}

export default Navigation;
