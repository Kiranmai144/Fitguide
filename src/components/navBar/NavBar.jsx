import { useState, useEffect, memo } from "react";
import { Link as LinkRouter, NavLink } from "react-router-dom";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.webp";
import navLinks from "../../data/navLinks";
import "./navBar.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const NavBar = memo(function NavBar() {
  const [isShown, setIsShown] = useState(false);

  useBodyOverflow(isShown);

  function handleClick() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      setIsShown((prevIsShown) => !prevIsShown);
    }
  }

  useEffect(() => {
    function windowResize() {
      setIsShown(false);
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <LinkRouter className="nav__logo" to="/">
            <img className="nav__img" src={logo} alt="landing page image" />
          </LinkRouter>
          <div
            className={`nav__overlay ${isShown ? "nav__overlay--show" : ""}`}
            onClick={handleClick}
          ></div>
          <ul className={`nav__menu ${isShown ? "nav__menu--show" : ""}`}>
            {navLinks.map((navLink, index) => {
              return (
                <li className="nav__list" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link nav__link--active" : "nav__link"
                    }
                    to={navLink.path}
                    onClick={() => setIsShown(false)}
                  >
                    {navLink.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div >
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div
            className="nav__burger"
            onClick={handleClick}
            onKeyDown={handleEnter}
            tabIndex={0}
          >
            <FaBars
              className={`nav__open ${isShown ? "nav__open--hide" : ""}`}
            />
            <FaTimes
              className={`nav__close ${!isShown ? "nav__close--hide" : ""}`}
            />
          </div>
        </nav>
      </div>
    </header>
  );
});

export default NavBar;
