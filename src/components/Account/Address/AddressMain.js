import styles from "./AddressMain.module.css";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button";
import EditAddress from "./EditAddress";
import { useState } from "react";
import { Link } from "react-router-dom";

const addressMaker = (address)=> {
  let addressValue = ""
  for (const item in address) {
    if(address[item]) addressValue += `${item} : ${address[item]} , `
  }
  addressValue = addressValue.split(",")
  return addressValue.splice(0,addressValue.length - 1).join(",")
}

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
      <p className={styles.item}>
        {addressMaker(address)}
      </p>
      <img src="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/address.svg"/>
      <div className={styles.editButton}>
        <Link to="/account">Back</Link>
        <Button onClick={editAddressHandler}>Edit Address</Button>
      </div>
    </div>
  );
};

export default AddressMain;
