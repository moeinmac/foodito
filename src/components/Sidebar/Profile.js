import styles from "./Profile.module.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = (props) => {
  const user = useContext(UserContext);
  return (
    <div className={styles.profile}>
      {user.isLoggedIn && (
        <>
          <div className={styles["profile-img"]}>
            <img
              src="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/sign/profile/profile.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlL3Byb2ZpbGUucG5nIiwiaWF0IjoxNjY0MzU5MDYxLCJleHAiOjE5Nzk3MTkwNjF9.AoIE3I0zzvPwTYeIPCf6tMKYLwOg59MUDXsBH6XUI-E"
              alt="profile"
            />
          </div>
          <div className={styles["profile-detail"]}>
            <p>Hello</p>
            <span>Moein</span>
          </div>
        </>
      )}
      {!user.isLoggedIn && <h1 className={styles.title}>Welcome to Foodito</h1>}
    </div>
  );
};

export default Profile;
