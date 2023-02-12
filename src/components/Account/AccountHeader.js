import styles from "./AccountHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";
import GetProfile from "../Sidebar/GetProfile";

const AccountHeader = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const backClickHandler = () => {
    navigate("/");
  };

  return (
    <header className={styles.accountHeader}>
      <div className={styles.accountHeader__container}>
        <button onClick={backClickHandler}>
          <IoReturnUpBackOutline />
          back
        </button>
        <h1>Account</h1>
        <RiUser6Line className={styles.icon} />
      </div>
      <div className={styles.profile}>
        <GetProfile user={user} className={styles["profile-img"]} />
      </div>
    </header>
  );
};

export default AccountHeader;
