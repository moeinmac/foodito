import styles from "./EditProfile.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import GetProfile from "../Sidebar/GetProfile";
import { useState } from "react";
import supabase from "../../supabase";
import { UpdateUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const EditProfile = (props) => {
  const dispatch = useDispatch()
  const [upload, setUpload] = useState();
  const editProfileHandler = async () => {

  };

  const uploadProfileHandler = async (event) => {
    const file = event.target.files[0];
    const { data, error } = await supabase.storage
      .from("profile")
      .upload(`${props.user.id}/avatar.png`, file, {
        cacheControl: "3600",
        upsert: true,
      });
    dispatch(UpdateUser(props.user.id,data.Key))
  };

  return (
    <div className={styles.profile} onClick={editProfileHandler}>
      <GetProfile
        user={props.user}
        id={styles["edit-profile"]}
        text={props.text}
      >
        <MdOutlineModeEdit className={styles.icon} />
      </GetProfile>
      <input type="file" onChange={uploadProfileHandler} />
    </div>
  );
};

export default EditProfile;
