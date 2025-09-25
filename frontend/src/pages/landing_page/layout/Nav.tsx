import style from "./Nav.module.css";
import logo1 from "../../../assets/images/logos/logo1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setRole, setAuthMode } from "../../../store/slices/authReducer";
import type { AppDispatch } from "../../../store/store";
import { useState } from "react";

const Nav: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);

  const handleRoleClick = (role: string) => {
    dispatch(setRole(role));
    dispatch(setAuthMode("register"));
    setIsOpen(false); // close menu after click
  };

  const handLogin = (role: string) => {
    dispatch(setRole(role));
    dispatch(setAuthMode("login"));
    setIsOpen(false); // close menu after click
  };

  return (
    <>
      <div className={style.navContainer}>
        {/* Logo */}
        <Link to="/">
          <div className={style.logoContainer} id="flexCenter">
            <img src={logo1} alt="logo" />
          </div>
        </Link>

        {/* Hamburger Icon (visible on mobile) */}
        <div
          className={style.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          style={!isOpen ? {color: "#1771B7"} : {color: "white"}}
        >
          {!isOpen ? "☰" : "X"}
        </div>

        {/* Nav list (desktop visible, mobile toggle) */}
        <ul
          className={`${style.navList} ${isOpen ? style.showMenu : ""}`}
        >
          {/* Close button (mobile only) */}
          {/* <li className={style.closeBtn}>
            
          </li> */}

          <li>
            <Link to="/" id="mediumText" className={style.Link} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#HowItWorks"
              id="mediumText"
              className={style.Link}
              onClick={() => setIsOpen(false)}
            >
              How it works
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#Features"
              id="mediumText"
              className={style.Link}
              onClick={() => setIsOpen(false)}
            >
              Features
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#FAQs"
              id="mediumText"
              className={style.Link}
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#Contact"
              id="mediumText"
              className={style.Link}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </HashLink>
          </li>

          {/* CTA buttons */}
          <div className={style.ctaContainer} id="flexCenter">
            <Link to="/Auth" className={style.Link}>
              <button onClick={() => handleRoleClick("patient")} id="mediumText">
                Sign Up
              </button>
            </Link>
            <Link to="/Auth">
              <button
                className={style.signIn}
                onClick={() => handLogin("patient")}
                id="mediumText"
              >
                Sign In
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Nav;
