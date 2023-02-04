import styles from "./SidebarMenu.module.css";
import { GrUserSettings } from "react-icons/gr";
import { RiUserReceived2Line } from "react-icons/ri";
import MediaQuery from "react-responsive";

import { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";

import Auth from "./Auth";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import Logout from "./Logout";
import Account from "./Account";
import Button from "../../../UI/Button";

const SidebarMenu = (props) => {
  const user = useContext(UserContext);

  const [auth, toggleAuth] = useState(false);
  const authToggleHandler = () => toggleAuth(!auth);

  const [editProfile, setEditProfile] = useState(false);
  const editProfileHandler = () => setEditProfile(!editProfile);

  return (
    <div
      className={`${styles.sidebarMenu} ${
        props.account ? styles.account : ""
      }`}>
      {auth && !user.isLoggedIn && <Auth onClose={authToggleHandler} />}

      {user.isLoggedIn && !props.account && (
        <GrUserSettings onClick={props.onAccount} />
      )}

      {!user.isLoggedIn && (
        <MediaQuery maxWidth={600}>
          <RiUserReceived2Line onClick={authToggleHandler} />
        </MediaQuery>
      )}
      {!user.isLoggedIn && (
        <MediaQuery minWidth={600}>
          <span>Have an account?</span>
          <Button onClick={authToggleHandler}>Login / Signup</Button>
        </MediaQuery>
      )}
      {props.account && user.isLoggedIn && !editProfile && <Account />}

      {props.account && user.isLoggedIn && (
        <>
          <EditProfile onEdit={editProfileHandler} edit={editProfile} />
          <ChangePassword />
          <Logout onAccount={props.onAccount} />
        </>
      )}
    </div>
  );
};

export default SidebarMenu;
