import styles from "./Account.module.css";
import FixedCartButton from "../components/Main/Header/FixedCartButton";
import AccountHeader from "../components/Account/AccountHeader";
import AccountItem, {
  convertTZ,
  convertAddress,
} from "../components/Account/AccountItem";
import { useSelector } from "react-redux";

import { IoMdMail } from "react-icons/io";
import { BsPhoneFill, BsFillClockFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const Account = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <AccountHeader />
      <h1 className={styles.title}>Account Detail</h1>
      <div className={styles.accountItemsContainer}>
        <AccountItem data={user.email}>
          <IoMdMail className={styles["accountItemIcon"]} />
        </AccountItem>
        <AccountItem data={user.phone}>
          <BsPhoneFill className={styles["accountItemIcon"]} />
        </AccountItem>
        <AccountItem data={convertTZ(user.last_login, "Asia/Jakarta")}>
          <BsFillClockFill className={styles["accountItemIcon"]} />
        </AccountItem>
        <AccountItem data={convertAddress(user.address)}>
          <ImLocation2 className={styles["accountItemIcon"]} />
        </AccountItem>
      </div>
      <FixedCartButton />
    </>
  );
};

export default Account;
