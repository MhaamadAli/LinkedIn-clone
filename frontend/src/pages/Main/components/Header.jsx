import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcase,
  faHouse,
  faMessage,
  faSearch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import linkedLogo from "../../../assets/linked-logo.png";
import profile from "../../../assets/nouser.jpeg";
import "../styles/header.css";

const Header = () => {
  const navigateTo = useNavigate();

  const handleNavigation = (path) => {
    navigateTo(path);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={linkedLogo} alt="LinkedIn" />
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="links">
        <ul>
          <li>
            <button onClick={() => handleNavigation("/home")}>
              <FontAwesomeIcon icon={faHouse} />
              Home
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faUsers} />
              My Network
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/jobs")}>
              <FontAwesomeIcon icon={faBriefcase} />
              Jobs
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faMessage} />
              Messaging
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faBell} />
              Notifications
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/profile")}>
              <img src={profile} alt="Profile" />
              Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
