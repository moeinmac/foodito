import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  userLoginHandler: (value) => {},
});

export default UserContext;
