import React from "react";
import styles from "./Account.module.css";

import { useContext } from "react";
import UserContext from "../../../context/UserContext";

import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  ).toLocaleString("en-US", {
    hour12: false,
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const AccountItem = (props) => {
  return (
    <div className={styles["account-item"]}>
      <span>
        {props.children} {props.title}
      </span>{" "}
      <p>{props.data}</p>
    </div>
  );
};

const Account = (props) => {
  const user = useContext(UserContext);

  return (
    <div className={styles.account}>
      <h3>Your Account : </h3>

      <AccountItem title={"Email"} data={user.data[0].email}>
        <AiOutlineMail />
      </AccountItem>
      <AccountItem
        title={"Phone"}
        data={user.data[0].phone ? `0${user.data[0].phone}` : "We Don't Know!"}>
        <BsPhone />
      </AccountItem>
      <AccountItem
        title={"Last Login"}
        data={convertTZ(user.data[0].last_login, "Asia/Jakarta")}>
        <BsClockHistory />
      </AccountItem>
    </div>
  );
};

export default Account;
