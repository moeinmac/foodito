import styles from "./AccountMain.module.css";

import { IoMdMail } from "react-icons/io";
import { BsPhoneFill, BsFillClockFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import { useSelector, useDispatch } from "react-redux";
import editSlice from "../../store/editSlice";

import AccountItem, { convertTZ, convertAddress } from "./AccountItem";
import EditPhone from "./EditPhone";

const AccountMain = () => {
  const user = useSelector((state) => state.user.user);

  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const editingHandler = () => dispatch(editSlice.actions.setEditPhone());

  return (
    <div className={styles.accountItemsContainer}>
      <AccountItem data={user.email} title={"Email"}>
        <IoMdMail className={styles["accountItemIcon"]} />
      </AccountItem>

      {!(edit.Editing && edit.EditingPhone) && (
        <AccountItem data={user.phone} title={"Phone"} onClick={editingHandler}>
          <BsPhoneFill className={styles["accountItemIcon"]} />
        </AccountItem>
      )}

      {edit.Editing && edit.EditingPhone && <EditPhone />}

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
