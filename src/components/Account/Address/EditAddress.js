import { Link } from "react-router-dom";
import Button from "../../../UI/Button";
import styles from "./AddressMain.module.css";

const EditAddressItem = (props) => {
  if(props.text === "set") return
  return (
    <div className={styles.editItem}>
      <span>{props.text}</span>
      <input type="text" defaultValue={props.value} />
    </div>
  );
};
const EditAddress = (props) => {
  console.log(Object.keys(props.address));
  return (
    <div className={styles.container}>
      {Object.keys(props.address).map((item) => (
        <EditAddressItem text={item} value={props.address[item]} key={item}/>
      ))}
      <div className={styles.editButton}>
      <Link to="/account">Back</Link>
      <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditAddress;
