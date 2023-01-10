import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useAuth from '../../Hooks/useAuth'
import NavProfile from "./navprofile";

const Navbar = () => {
  const { auth } = useAuth();

  const [clickedbar, setclickedbar] = useState(0);
  const clicked = () => {
    setclickedbar(!clickedbar);
  };
  return (
    <>
      <nav className="navbar">
        <span className="bar" onClick={clicked}>
          {clickedbar ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </span>
        <Link id="logolink" to="/">
          <label id="logo" style={{ fontSize: 30, paddingLeft: 30 }}>
            <span style={{ fontWeight: 900 }}>Mess</span>Server
          </label>
        </Link>
        <ul id="navbar" className={clickedbar ? "#navbar active" : "#navbar"}>
          <li>
            <Link className="active" id="g_home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="g_about" to="/">
              About Me
            </Link>
          </li>
          <li>
            <Link id="g_feature" to="/">
              Features
            </Link>
          </li>
          <li>
            {auth?._id ? (
              <NavProfile />
            ) : (
              <Link to="/login" id="auth">
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
