import styles from "./EditProfile.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import GetProfile from "../Sidebar/GetProfile";
import { useState } from "react";


const EditProfile = (props) => {
  const editProfileHandler = () => {

  }
  return (
    <div className={styles.profile} onClick={editProfileHandler}>
      <GetProfile
        user={props.user}
        id={styles["edit-profile"]}
        text={props.text}
      >
        <MdOutlineModeEdit className={styles.icon} />
      </GetProfile>
    </div>
  );
};

export default EditProfile;
