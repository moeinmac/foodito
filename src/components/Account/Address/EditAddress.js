import { Link } from "react-router-dom";
import Button from "../../../UI/Button";
import styles from "./AddressMain.module.css";
import { useState } from "react";
import { UpdateUser } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

const addressPattern = {
  City: "",
  Quarter: "",
  Town: "",
  Street: "",
  No: "",
  Unit: "",
  Zipcode: "",
};

const EditAddressItem = (props) => {
  return (
    <div className={styles.editItem}>
      <span>{props.text}</span>
      <input
        type="text"
        name={props.text}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
const EditAddress = (props) => {
  const address = props.address ? props.address : addressPattern;

  const [inputs, setInputs] = useState(address);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const id = JSON.parse(localStorage.getItem("supabase.auth.token"))
    .currentSession.user.id;

  const dispatch = useDispatch();
  const submitEditAddress = () => {
    dispatch(UpdateUser(id, { address: inputs }));
    props.back()
  };

  return (
    <div className={styles.container}>
      {Object.keys(address).map((item) => (
        <EditAddressItem
          text={item}
          dvalue={address[item]}
          key={item}
          onChange={inputChangeHandler}
          value={inputs[item]}
        />
      ))}
      <div className={styles.editButton}>
        <Link to="/account">Back</Link>
        <Button onClick={submitEditAddress}>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditAddress;
