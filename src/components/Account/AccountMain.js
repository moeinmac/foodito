import styles from "./AccountMain.module.css";

import { IoMdMail } from "react-icons/io";
import { BsPhoneFill, BsFillClockFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import { useSelector } from "react-redux";

import AccountItem, {
  convertTZ,
  convertAddress,
} from "./AccountItem"

const AccountMain = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.accountItemsContainer}>
      <AccountItem data={user.email} title={"Email"}>
        <IoMdMail className={styles["accountItemIcon"]} />
      </AccountItem>
      <AccountItem data={user.phone} title={"Phone"}>
        <BsPhoneFill className={styles["accountItemIcon"]} />
      </AccountItem>
      <AccountItem
        data={convertTZ(user.last_login, "Asia/Jakarta")}
        title={"Last Login"}
      >
        <BsFillClockFill className={styles["accountItemIcon"]} />
      </AccountItem>
      <AccountItem data={convertAddress(user.address)} title={"Address"}>
        <ImLocation2 className={styles["accountItemIcon"]} />
      </AccountItem>
    </div>
  );
};

export default AccountMain;
