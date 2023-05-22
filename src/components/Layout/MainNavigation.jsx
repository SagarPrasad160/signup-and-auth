import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import authContext from "../../context/authContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const { isLoggedIn, handleLogOut } = useContext(authContext);

  const navigate = useNavigate();

  const handleClick = () => {
    handleLogOut();
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={handleClick}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
