import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import icons from '../../assets/icons/BayBook-icons.png'
export default function Navbar() {

  return (
    <div className="nav">
      <div className="nav-left">
        <img src={icons} alt=" icon not work." />
        <ul>
          <li className="lists">
            <Link to="./Home">Home</Link>
            <Link to="./About">About</Link>
            <Link to="./Blogs">Blogs</Link>
            <Link to="./Shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="log-in">Log in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </div>
  );
}
