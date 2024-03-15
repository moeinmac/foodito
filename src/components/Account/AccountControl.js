import styles from "./AccountControl.module.css";
import EditAccount from "./EditAccount";
import Logout from "./Logout";
import Button from "../../UI/Button";

import { RxCaretRight } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";

import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import editSlice from "../../store/editSlice";
import { UpdateUser } from "../../store/userSlice";

const AccountControl = () => {
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const discardHandler = () => dispatch(editSlice.actions.discardEdit());

  const id = useSelector((state) => state.user.user.id);

  const EditValid =
    (!edit.EditingLocation && edit.PhoneValid) ||
    (!edit.EditingPhone && edit.LocationValid) ||
    (edit.PhoneValid && edit.LocationValid);

  const updateAccountHandler = () => {
    dispatch(UpdateUser(id, { phone: edit.PhoneValue }));
    dispatch(editSlice.actions.discardEdit());
  };

  if (edit.Editing) {
    return (
      <div className={styles.editing}>
        <Button className={styles.discardButton} onClick={discardHandler}>
          Discard
        </Button>
        <Button disabled={!EditValid} onClick={updateAccountHandler}>
          Save Changes
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <EditAccount className={styles.item}>
        <RxCaretRight className={styles.icon} />
      </EditAccount>
      <Link className={styles.item} to="/account/address">
        Manage Address <RxCaretRight className={styles.icon} />
      </Link>

      <MediaQuery maxWidth={600}>
        <Link className={styles.item} to="/">
          Manage Orders <RxCaretRight className={styles.icon} />
        </Link>
        <Logout className={styles.item}>
          <IoIosLogOut className={styles.icon} />
        </Logout>
      </MediaQuery>
    </div>
  );
};

export default AccountControl;
