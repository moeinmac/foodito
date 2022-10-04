import styles from "./Account.module.css";

import { useEffect, useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";

import supabase from "../../../supabase";
import AccountLoader from "../../../UI/AccountLoader";

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
  const [accountData, setAccountData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAccountData = async () => {
      const user_id = JSON.parse(localStorage.getItem("user"));
      let { data } = await supabase
        .from("user")
        .select("*")
        .eq("id", user_id.id);
      if (data) {
        setAccountData(data);
        setLoading(false);
      }
    };
    getAccountData();
  }, []);
  return (
    <div className={styles.account}>
      <h3>Your Account : </h3>
      {!loading && (
        <>
          <AccountItem
            title={"Email"}
            data={
              accountData[0].email ? accountData[0].email : "We Don't Know!"
            }>
            <AiOutlineMail />
          </AccountItem>
          <AccountItem
            title={"Phone"}
            data={
              accountData[0].phone
                ? `0${accountData[0].phone}`
                : "We Don't Know!"
            }>
            <BsPhone />
          </AccountItem>
          <AccountItem
            title={"Last Login"}
            data={convertTZ(accountData[0].last_login, "Asia/Jakarta")}>
            <BsClockHistory />
          </AccountItem>
        </>
      )}
      {loading && <AccountLoader />}
    </div>
  );
};

export default Account;
