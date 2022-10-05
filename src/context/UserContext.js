import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  signupHandler: (email, password) => {},
  signoutHandler: () => {},
  data: {},
  dataHandler: (newData) => {},
  error: false,
});

export default UserContext;
