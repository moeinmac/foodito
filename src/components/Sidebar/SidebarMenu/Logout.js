import React, { useState } from "react";

import styles from "./SidebarMenuItem.module.css";

import Button from "../../../UI/Button";

import { GrCheckmark } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

import supabase from "../../../supabase";
import { useDispatch } from "react-redux";
import { userAction } from "../../../store/userSlice";

const Logout = (props) => {
  const [logout, setLogout] = useState(false);
  const logoutConfirmHandler = () => setLogout(!logout);

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    let { error } = await supabase.auth.signOut();
    dispatch(userAction.signOutUser());
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
