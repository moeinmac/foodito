import styles from "./EditProfile.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import GetProfile from "../Sidebar/GetProfile";
import { useState } from "react";
import supabase from "../../supabase";
import { UpdateUser } from "../../store/userSlice";
import { useDispatch,useSelector } from "react-redux";
import PanLoader from "../../UI/PanLoader";

const EditProfile = (props) => {
  const edit = useSelector((state) => state.edit);
  const [isLoading, setLoading] = useState();
  const dispatch = useDispatch();

  const uploadProfileHandler = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const { data, error } = await supabase.storage
      .from("profile")
      .upload(
        `${props.user.id}/${Math.floor(Math.random() * 1000)}.png`,
        file,
        {
          cacheControl: "3600",
          upsert: true,
        }
      );
    dispatch(UpdateUser(props.user.id, { profile: data.Key }));
    setLoading(false);
  };

  return (
    <>
      {isLoading && <PanLoader />}
      <label className={styles.profile} htmlFor="uploadInput">
        <GetProfile
          user={props.user}
          id={styles["edit-profile"]}
          text={props.text}
        >
          <MdOutlineModeEdit className={styles.icon} />
        </GetProfile>
        <input
          type="file"
          onChange={uploadProfileHandler}
          id="uploadInput"
          className={styles.uploadInput}
        />
      </label>
    </>
  );
};

export default EditProfile;
