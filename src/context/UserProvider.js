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

  const signupHandler = (email, password) => {
    const createUser = (id, email) => {
      const send = async () => {
        const { error } = await supabase
          .from("user")
          .insert([{ id, email, name: email.split("@").shift() }]);
        if (error) console.log(error);
      };
      send();
    };

    const authUser = async () => {
      let { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (user) {
        createUser(user.id, user.email);
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

  const signoutHandler = () => setIsLoggedIn(false);

  const userCtx = {
    isLoggedIn: localStorage.getItem("user") ? true : isLoggedIn,
    loginHandler,
    signupHandler,
    signoutHandler,
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
