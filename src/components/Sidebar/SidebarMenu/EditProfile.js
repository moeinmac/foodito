import React from "react";
import styles from "./SidebarMenuItem.module.css";

import { BsPhone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";

import { useContext, forwardRef, useRef, useState } from "react";
import UserContext from "../../../context/UserContext";

import Button from "../../../UI/Button";
import supabase from "../../../supabase";

const EditProfileInput = forwardRef((props, ref) => {
  return (
    <div className={styles["edit-item"]}>
      <label htmlFor={props.label}>
        {props.children}
        {props.label}
      </label>
      {props.toggle && <input type={props.type} id={props.label} ref={ref} />}
      {props.toggle && (
        <HiOutlineMinusCircle
          className={styles["edit-minus"]}
          onClick={props.onToggle}
        />
      )}
      {!props.toggle && (
        <HiOutlinePlusCircle
          className={styles["edit-plus"]}
          onClick={props.onToggle}
        />
      )}
    </div>
  );
});

const EditProfile = (props) => {
  const user = useContext(UserContext);

  const [name, setName] = useState(false);
  const nameRef = useRef("");
  const nameToggleHandler = () => setName(!name);

  const [phone, setPhone] = useState(false);
  const phoneRef = useRef("");
  const phoneToggleHandler = () => setPhone(!phone);

  const [profile, setProfile] = useState(false);
  const profileRef = useRef("");
  const profileToggleHandler = () => setProfile(!profile);

  const updateUser = async (newData, column, LastValue) => {
    const { data, error } = await supabase
      .from("user")
      .update(newData)
      .eq(column, LastValue);
    if (data) user.dataHandler(data);
    if (error) console.log(error);
  };

  const editProfileHandler = () => {
    if (name) {
      let nameIsValid = /\b([A-Z][-,a-z. ']+[ ]*)+/gm.test(
        nameRef.current.value
      );
      if (nameIsValid)
        updateUser({ name: nameRef.current.value }, "name", user.data[0].name);
      if (!nameIsValid) console.log("invalid name");
    }
    if (phone) {
      let phoneIsValid =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
          phoneRef.current.value
        );
      if (phoneIsValid) {
        updateUser(
          { phone: phoneRef.current.value },
          "phone",
          user.data[0].phone
        );
      }
      if (!phoneIsValid) console.log("invalid phone");
    }
    props.onEdit();
  };

  return (
    <div className={styles["edit-profile"]}>
      <div className={styles["sidebar-menuitem"]} onClick={props.onEdit}>
        Edit Profile
      </div>
      {props.edit && (
        <>
          <EditProfileInput
            label="Name"
            type="text"
            ref={nameRef}
            toggle={name}
            onToggle={nameToggleHandler}>
            <FiUser />
          </EditProfileInput>
          <EditProfileInput
            label="Phone"
            type="text"
            ref={phoneRef}
            toggle={phone}
            onToggle={phoneToggleHandler}>
            <BsPhone />
          </EditProfileInput>
          <EditProfileInput
            label="Profile"
            type="file"
            ref={profileRef}
            toggle={profile}
            onToggle={profileToggleHandler}>
            <FaRegUserCircle />
          </EditProfileInput>
          <div className={styles["edit-controls"]}>
            <Button
              className={styles["edit-confirm"]}
              onClick={editProfileHandler}>
              Confirm
            </Button>
            <Button className={styles["edit-cancel"]} onClick={props.onEdit}>
              Cancel
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(EditProfile);
