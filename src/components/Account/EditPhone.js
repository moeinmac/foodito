import styles from "./AccountItem.module.css";
import Input from "../../UI/Input";
import useInput from "../../hooks/useInput";

import { MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import editSlice from "../../store/editSlice";

const EditPhone = () => {
  const phone = useInput(/((0?9)|(\+?989))\d{9}/g);
  const dispatch = useDispatch();
  if(phone.isValid) dispatch(editSlice.actions.setPhoneValid(phone.value));

  return (
    <div className={styles.accountItem}>
      <div className={styles.icon}>
        <MdModeEditOutline className={styles.editIcon} />
      </div>
      <Input
        type="tel"
        data={phone}
        errorMessage="Valid Phone : 09123456789"
        className={styles.input}
      />
    </div>
  );
};

export default EditPhone;
