import styles from "./Profile.module.css";
import { useEffect, useState } from "react";

const GetProfile = (props) => {
  const [userProfile, setUserProfile] = useState(false);

  useEffect(() => {
    if (props.user) setUserProfile(props.user);
  }, [props.user]);

  return (
    userProfile && (
      <>
        <div className={styles["profile-img"]}>
          <img src={userProfile[0].profile} alt="profile" />
        </div>
        <div className={styles["profile-detail"]}>
          <p>Hello</p>
          <span>{userProfile[0].name}</span>
        </div>
      </>
    )
  );
};

export default GetProfile;
