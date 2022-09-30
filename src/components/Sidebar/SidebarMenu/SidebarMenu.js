import styles from "./SidebarMenu.module.css";
import { GrUserSettings } from "react-icons/gr";
import { RiUserReceived2Line } from "react-icons/ri";

import { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import Auth from "./Auth";

const SidebarMenu = (props) => {
  const user = useContext(UserContext);
  const [auth, toggleAuth] = useState(false);

  const authToggleHandler = () => toggleAuth(!auth);

  return (
    <div className={styles.sidebarMenu}>
      {auth && <Auth onClose={authToggleHandler} />}
      {user.isLoggedIn && (
        <GrUserSettings className={styles["sidebarMenu-icon"]} />
      )}
      {!user.isLoggedIn && (
        <RiUserReceived2Line
          className={styles["sidebarMenu-icon"]}
          onClick={authToggleHandler}
        />
      )}
    </div>
  );
};

export default SidebarMenu;
