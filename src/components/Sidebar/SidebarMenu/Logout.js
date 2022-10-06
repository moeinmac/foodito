import React, { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";

import styles from "./SidebarMenuItem.module.css";

import Button from "../../../UI/Button";

import { GrCheckmark } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

import supabase from "../../../supabase";

const Logout = (props) => {
  const [logout, setLogout] = useState(false);
  const logoutConfirmHandler = () => setLogout(!logout);

  const user = useContext(UserContext);

  const logoutHandler = async () => {
    let { error } = await supabase.auth.signOut();
    user.signoutHandler();
    props.onAccount();
  };

  if (logout) {
    return (
      <div className={styles.logout}>
        <p>Are You Sure ?</p>
        <div className={styles["logout-check"]}>
          <Button className={styles["logout-confirm"]} onClick={logoutHandler}>
            Yes <GrCheckmark />
          </Button>
          <Button
            className={styles["logout-cancel"]}
            onClick={logoutConfirmHandler}>
            No <GrClose />
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles["sidebar-menuitem"]} onClick={logoutConfirmHandler}>
      Logout
    </div>
  );
};

export default React.memo(Logout);
