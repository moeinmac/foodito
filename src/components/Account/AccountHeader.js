import styles from "./AccountHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";

import MediaQuery from "react-responsive";
import HeaderCartButton from "../Main/Header/HeaderCartButton";
import EditProfile from "./EditProfile";

const AccountHeader = (props) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const backClickHandler = () => {
    navigate(props.back || "/");
  };

  return (
    <header className={styles.accountHeader}>
      <div className={styles.accountHeader__container}>
        <button onClick={backClickHandler}>
          <IoReturnUpBackOutline />
          back
        </button>
        <h1>{props.header}</h1>
        <RiUser6Line className={styles.icon} />
        <HeaderCartButton />
      </div>
      <MediaQuery minWidth={600}>
        <EditProfile user={user} text={"Tehran , Iran"} />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <EditProfile user={user} />
      </MediaQuery>
    </header>
  );
};

export default AccountHeader;
