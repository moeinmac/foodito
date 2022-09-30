import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userLoginHandler = (value) => setIsLoggedIn(value);

  const userData = {
    isLoggedIn,
    userLoginHandler,
  };

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
