import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import supabase from "../supabase";

const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setUserData] = useState({});
  const [error, setUserError] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user"))
      setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  const loginHandler = (email, password) => {
    const authUser = async () => {
      let { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (user) {
        setUserData(user);
        localStorage.setItem("user", JSON.stringify({ id: user.id }));
        setIsLoggedIn(true);
      }
      if (error) {
        setUserError(error);
        setIsLoggedIn(false);
      }
    };
    authUser();
  };
  const userCtx = {
    isLoggedIn: localStorage.getItem("user") ? true : isLoggedIn,
    loginHandler,
    data,
    error,
  };

  return (
    <UserContext.Provider value={userCtx}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
