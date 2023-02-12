import styles from "./Profile.module.css";
import GetProfile from "./GetProfile";

import React from "react";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.profile}>
      {user.isAuth && (
        <GetProfile
          user={user.user}
          text={props.text}
          className={props.className}
        />
      )}
      {!user.isAuth && <h1 className={styles.title}>Welcome to Foodito</h1>}
      {!user.isAuth && (
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
      {props.account && user.isAuth && (
        <GrClose className={styles.close} onClick={props.onAccount} />
      )}
    </div>
  );
};

export default React.memo(Profile);
