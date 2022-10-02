import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  data: {},
  error: false,
});

export default UserContext;
