import styles from "./SidebarMenu.module.css";
import { GrUserSettings } from "react-icons/gr";
import { RiUserReceived2Line } from "react-icons/ri";
import MediaQuery from "react-responsive";

import { useState } from "react";

import Auth from "./Auth";
import Logout from "./Logout";
import Account from "./Account";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";

const SidebarMenu = (props) => {
  const user = useSelector((state) => state.user);

  const [auth, toggleAuth] = useState(false);
  const authToggleHandler = () => toggleAuth(!auth);

  return (
    <div
      className={`${styles.sidebarMenu} ${
        props.account ? styles.account : ""
      }`}>
      {auth && !user.isAuth && <Auth onClose={authToggleHandler} />}

      {user.isAuth && !props.account && (
        <GrUserSettings onClick={props.onAccount} />
      )}

      {!user.isAuth && (
        <MediaQuery maxWidth={600}>
          <RiUserReceived2Line onClick={authToggleHandler} />
        </MediaQuery>
      )}
      {!user.isAuth && (
        <MediaQuery minWidth={600}>
          <span>Have an account?</span>
          <Button onClick={authToggleHandler}>Login / Signup</Button>
        </MediaQuery>
      )}
      {props.account && user.isAuth && <Account />}

      {props.account && user.isAuth && (
        <>
          <Logout onAccount={props.onAccount} />
        </>
      )}
    </div>
  );
};

export default SidebarMenu;
