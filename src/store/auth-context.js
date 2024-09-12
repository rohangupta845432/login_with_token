import React, { useState, createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let loginToken = null;
  const loginTokenSetTime = localStorage.getItem("loginTokenSetTime");
  if ((loginTokenSetTime - Date.now()) / 60000 <= 5) {
    loginToken = localStorage.getItem("loginToken");
  } else {
    localStorage.setItem("loginToken", "");
    localStorage.setItem("loginTokenSetTime", "");
  }

  const [token, setToken] = useState(loginToken);

  const userIsLoggedin = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("loginToken", token);
    localStorage.setItem("loginTokenSetTime", Date.now());
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.setItem("loginToken", "");
    localStorage.setItem("loginTokenSetTime", "");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
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
