import styles from "./AccountItem.module.css";
import MediaQuery from "react-responsive";

const AccountItem = (props) => {
  return (
    <div className={styles.accountItem} onClick={props.onClick}>
      <MediaQuery minWidth={600}>
        <span>{props.title}</span>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <div className={styles["icon"]}>{props.children}</div>
      </MediaQuery>
      <p className={styles.data}>{props.data}</p>
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

export default AccountItem;
