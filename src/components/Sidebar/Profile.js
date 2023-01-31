import styles from "./Profile.module.css";
import GetProfile from "./GetProfile";

import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { GrClose } from "react-icons/gr";
import MediaQuery from "react-responsive";

const Profile = (props) => {
  const user = useContext(UserContext);
  return (
    <div className={`${styles.profile} ${props.account ? styles.account : ""}`}>
      {user.isLoggedIn && <GetProfile user={user.data} />}
      {!user.isLoggedIn && <h1 className={styles.title}>Welcome to Foodito</h1>}
      {!user.isLoggedIn && (
        <h1 className={styles.title} id={styles.dTitle}>
          For complete your order create an account or login.
        </h1>
      )}
      {props.account && user.isLoggedIn && (
        <GrClose className={styles.close} onClick={props.onAccount} />
      )}
    </div>
  );
};

export default React.memo(Profile);
