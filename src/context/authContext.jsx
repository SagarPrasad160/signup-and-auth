import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const isLoggedIn = !!token;

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")) || null);
  }, []);

  const handleLogIn = (token) => {
    setToken(token);
  };
  const handleLogOut = () => {
    setToken(null);
  };

  return (
    <authContext.Provider
      value={{ token, isLoggedIn, handleLogIn, handleLogOut }}
    >
      {children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default authContext;
