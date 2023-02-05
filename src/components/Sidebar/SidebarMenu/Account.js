import React from "react";
import styles from "./Account.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.account}>
      <h3>Your Account : </h3>

      <AccountItem title={"Email"} data={user.email}>
        <AiOutlineMail />
      </AccountItem>
      <AccountItem
        title={"Phone"}
        data={user.phone ? `0${user.phone}` : "We Don't Know!"}>
        <BsPhone />
      </AccountItem>
      <AccountItem
        title={"Last Login"}
        data={convertTZ(user.last_login, "Asia/Jakarta")}>
        <BsClockHistory />
      </AccountItem>
    </div>
  );
};

export default Account;
