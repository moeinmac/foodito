import styles from "./Profile.module.css";

import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import GetProfile from "./GetProfile";

import { GrClose } from "react-icons/gr";

const Profile = (props) => {
  const user = useContext(UserContext);
m 
  return (
    <div className={`${styles.profile} ${props.account ? styles.account : ""}`}>
      {user.isLoggedIn && <GetProfile user={user.data} />}
      {!user.isLoggedIn && <h1 className={styles.title}>Welcome to Foodito</h1>}
      {props.account && user.isLoggedIn && (
        <GrClose className={styles.close} onClick={props.onAccount} />
      )}
    </div>
  );
};

export default React.memo(Profile);
