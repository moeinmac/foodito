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
import MediaQuery from "react-responsive";

const Account = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <AccountHeader />
      <h1 className={styles.title}>Account Detail</h1>
      <div className={styles.accountItemsContainer}>
        <AccountItem data={user.email} title={"Email"}>
          <IoMdMail className={styles["accountItemIcon"]} />
        </AccountItem>
        <AccountItem data={user.phone} title={"Phone"}>
          <BsPhoneFill className={styles["accountItemIcon"]} />
        </AccountItem>
        <AccountItem
          data={convertTZ(user.last_login, "Asia/Jakarta")}
          title={"Last Login"}>
          <BsFillClockFill className={styles["accountItemIcon"]} />
        </AccountItem>
        <AccountItem data={convertAddress(user.address)} title={"Address"}>
          <ImLocation2 className={styles["accountItemIcon"]} />
        </AccountItem>
      </div>
      <MediaQuery maxWidth={600}>
        <FixedCartButton />
      </MediaQuery>
    </>
  );
};

export default Account;
