import { useSelector } from "react-redux";
import styles from "./AddressMain.module.css";
import Button from "../../../UI/Button";
import EditAddress from "./EditAddress";
import { useState } from "react";

const AddressMain = () => {
  const address = useSelector((state) => state.user.user.address);
  const [editAddress, setEditAddress] = useState();

  const editAddressHandler = () => setEditAddress(!editAddress);
  if(editAddress){
    return <EditAddress address={address}/>
  }
  if (!address.set) {
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
  // return <div>
  //   <h2>Your Address</h2>
  // </div>
};

export default AddressMain;
