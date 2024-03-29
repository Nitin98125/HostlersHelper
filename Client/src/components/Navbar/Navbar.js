import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import NavProfile from "./navprofile";
import { NavToolbar } from "./navprofile";

const Navbar = () => {
  const { auth } = useAuth();

  const [clickedbar, setclickedbar] = useState(0);
  const clicked = () => {
    setclickedbar(!clickedbar);
  };

  const [toolbar, setToolbar] = useState(0);
  const menuref = useRef();
  const profref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        !menuref.current.contains(e.target) &&
        profref.current &&
        !profref.current.contains(e.target)
      ) {
        setToolbar(0);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

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
          <label id="logo" style={{ fontSize: 30}}>
            <span style={{ fontWeight: 900 }}>Mess</span>Server
          </label>
        </Link>
        <ul id="navbar" className={clickedbar ? "#navbar active" : "#navbar"}>
          <NavToolbar
            menuref={menuref}
            toolbar={toolbar}
            setToolbar={setToolbar}
          />
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
              <NavProfile
                profref={profref}
                toolbar={toolbar}
                setToolbar={setToolbar}
              />
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
