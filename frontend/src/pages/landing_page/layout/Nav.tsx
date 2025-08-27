import style from "./Nav.module.css";
import logo1 from "../../../assets/images/logos/logo1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setRole, setAuthMode } from "../../../store/slices/authReducer";
import type { AppDispatch } from "../../../store/store"; // Make sure this type exists

const Nav: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRoleClick = (role: string) => {
    dispatch(setRole(role));
    dispatch(setAuthMode("register"));
  };

  const handLogin = (role: string) => {
    dispatch(setRole(role));
    dispatch(setAuthMode("login"));
  };

  return (
    <>
      <div className={style.navContainer} id="flexSpaceBetween">
        <Link to="/">
          <div className={style.logoContainer} id="flexCenter">
            <img src={logo1} alt="logo" />
          </div>
        </Link>

        <ul className={style.navList} id="flexCenter">
          <li>
            <Link to="/" id="mediumText" className={style.Link}>
              Home
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#HowItWorks"
              id="mediumText"
              className={style.Link}
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
            >
              Features
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#FAQs" id="mediumText" className={style.Link}>
              FAQs
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#Contact"
              id="mediumText"
              className={style.Link}
            >
              Contact Us
            </HashLink>
          </li>
        </ul>

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
      </div>
    </>
  );
};

export default Nav;
