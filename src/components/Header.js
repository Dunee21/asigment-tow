import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiPower } from "react-icons/fi";

const Header = () => {
  return (
    <header id="navbar">
      <h1 id="logo">EXPENSE TRACKER</h1>
      <ul>
        <li>
          <Link to="/profile">
            <FiUser size={35} />
          </Link>
        </li>
        { <li>
          <Link to="/logout">
            <FiPower size={35} />
          </Link>
        </li> }
      </ul>
    </header>
  );
};

export default Header;
