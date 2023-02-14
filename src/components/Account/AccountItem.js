import styles from "./AccountItem.module.css";
import MediaQuery from "react-responsive";

const AccountItem = (props) => {
  return (
    <div className={styles.accountItem}>
      <MediaQuery minWidth={600}>
        <span>{props.title}</span>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <div className={styles["accountItem-icon"]}>{props.children}</div>
      </MediaQuery>
      <p>{props.data}</p>
    </div>
  );
};
export const convertTZ = (date, tzString) => {
  try {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        {
          timeZone: tzString,
        }
      )
    ).toLocaleString("en-US", {
      hour12: false,
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {}
};

export const convertAddress = (address) => {
  let value = "";
  for (const key in address) {
    if (address[key] !== "") {
      value += `${key}: ${address[key]}, `;
    }
  }
  return value;
};
export default AccountItem;
