import { Link } from "react-router-dom";
import styles from "./AccountControl.module.css";
import EditAccount from "./EditAccount";

import { RxCaretRight } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";

import Logout from "./Logout";
import MediaQuery from "react-responsive";

const AccountControl = () => {
  return (
    <div className={styles.container}>
      <EditAccount className={styles.item}>
        <RxCaretRight className={styles.icon}/>
      </EditAccount>

      <MediaQuery maxWidth={600}>
      <Link className={styles.item} to="/">
        Manage Orders <RxCaretRight className={styles.icon}/>
      </Link>
      <Logout className={styles.item}>
        <IoIosLogOut className={styles.icon}/>
      </Logout>
      </MediaQuery>
    </div>
  );
};

export default AccountControl;
