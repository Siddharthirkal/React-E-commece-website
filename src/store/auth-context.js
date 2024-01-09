import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    const expirationTime = new Date(new Date().getTime() + 5 * 60 * 1000); // 5 minutes
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime.toISOString());

    // Set up auto-logout timer
    const autoLogoutTimer = setTimeout(() => {
      logoutHandler();
    }, 5 * 60 * 1000); // 5 minutes

    // Save the timer ID to clear it on logout
    localStorage.setItem("autoLogoutTimer", autoLogoutTimer);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    // Clear the auto-logout timer
    const autoLogoutTimer = localStorage.getItem("autoLogoutTimer");
    clearTimeout(autoLogoutTimer);
    localStorage.removeItem("autoLogoutTimer");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedExpirationTime = localStorage.getItem("expirationTime");

    if (storedToken && storedExpirationTime) {
      const expirationTime = new Date(storedExpirationTime);
      if (expirationTime > new Date()) {
        // Token is still valid
        setToken(storedToken);

        // Set up auto-logout timer
        const autoLogoutTimer = setTimeout(() => {
          logoutHandler();
        }, expirationTime - new Date());

        // Save the timer ID to clear it on logout
        localStorage.setItem("autoLogoutTimer", autoLogoutTimer);
      } else {
        // Token has expired
        logoutHandler();
      }
    }
  }, []);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
