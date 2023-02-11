import styles from "./SidebarMenu.module.css";
import { RiUserReceived2Line } from "react-icons/ri";
import { CgHomeAlt, CgShoppingBag, CgLogOut } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import MediaQuery from "react-responsive";

import { useState } from "react";

import Auth from "./Auth";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";

const SidebarMenu = (props) => {
  const user = useSelector((state) => state.user);

  const [auth, toggleAuth] = useState(false);
  const authToggleHandler = () => toggleAuth(!auth);

  return (
    <nav className={`${styles.sidebarMenu}`}>
      {auth && !user.isAuth && <Auth onClose={authToggleHandler} />}

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
      {props.sidebar && (
        <ul>
          <li>
            <CgHomeAlt className={styles["sidebarMenu-icon"]} />
            <span>Home</span>
          </li>
          <li>
            <RiUser3Line className={styles["sidebarMenu-icon"]} />
            <span>Account</span>
          </li>
          <li>
            <CgShoppingBag className={styles["sidebarMenu-icon"]} />
            <span>Orders</span>
          </li>
          <li>
            <CgLogOut className={styles["sidebarMenu-icon"]} />
            <span>Logout</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default SidebarMenu;
