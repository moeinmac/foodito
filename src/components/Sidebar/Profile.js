import styles from "./Profile.module.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import GetProfile from "./GetProfile";

const Profile = (props) => {
  const user = useContext(UserContext);
  return (
    <div className={styles.profile}>
      {user.isLoggedIn && <GetProfile user={user.data} />}
      {!user.isLoggedIn && <h1 className={styles.title}>Welcome to Foodito</h1>}
    </div>
  );
};

export default Profile;
