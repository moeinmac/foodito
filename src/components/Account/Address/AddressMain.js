import styles from "./AddressMain.module.css";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button";
import EditAddress from "./EditAddress";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddressMain = () => {
  const address = useSelector((state) => state.user.user.address);

  const [editAddress, setEditAddress] = useState();
  const editAddressHandler = () => setEditAddress(!editAddress);

  if (editAddress) {
    return <EditAddress address={address} back={editAddressHandler} />;
  }
  if (!address) {
    return (
      <div className={styles.container}>
        <img
          alt="No Address"
          src="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/noaddress.svg"
        />
        <p>Unfortunately, you do not have a registered address, do it now! </p>
        <Button onClick={editAddressHandler}>Add New Address</Button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {Object.keys(address).map((item) => (
        <p key={item} className={styles.item}>
          {item} : {address[item]}
        </p>
      ))}
      <div className={styles.editButton}>
        <Link to="/account">Back</Link>
        <Button onClick={editAddressHandler}>Edit Address</Button>
      </div>
    </div>
  );
};

export default AddressMain;
