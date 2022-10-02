import styles from "./Profile.module.css";
import supabase from "../../supabase";
import { useEffect, useState } from "react";

const GetProfile = (props) => {
  const [userProfile, setUserProfile] = useState(false);
  useEffect(() => {
    const send = async () => {
      let { data } = await supabase
        .from("user")
        .select("*")
        .eq("id", props.user.id);
      if (data) setUserProfile(data);
    };
    send();
  }, []);

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
