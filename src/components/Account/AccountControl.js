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

const AccountControl = () => {
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const discardHandler = () => dispatch(editSlice.actions.toggleEditing());

  if (edit.Editing) {
    return (
      <div className={styles.editing}>
        <Button className={styles.discardButton} onClick={discardHandler}>
          Discard
        </Button>
        <Button>Save Changes</Button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <EditAccount className={styles.item}>
        <RxCaretRight className={styles.icon} />
      </EditAccount>

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
