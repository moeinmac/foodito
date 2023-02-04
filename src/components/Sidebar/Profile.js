import styles from "./Profile.module.css";
import GetProfile from "./GetProfile";

import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { GrClose } from "react-icons/gr";

const Profile = (props) => {
  const user = useContext(UserContext);
  return (
    <div className={`${styles.profile} ${props.account ? styles.account : ""}`}>
      {user.isLoggedIn && <GetProfile user={user.data} />}
      {!user.isLoggedIn && <h1 className={styles.title}>Welcome to Foodito</h1>}
      {!user.isLoggedIn && (
        <div className={styles.icon}>
          <div className={styles["icon-container"]}>
            <img
              src="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/icon.png"
              alt="Foodito"
            />
          </div>
          <div className={styles["icon-detail"]}>
            <h1>Foodito</h1>
            <p>Best Food Delivery App</p>
          </div>
        </div>
      )}
      {props.account && user.isLoggedIn && (
        <GrClose className={styles.close} onClick={props.onAccount} />
      )}
    </div>
  );
};

export default React.memo(Profile);
