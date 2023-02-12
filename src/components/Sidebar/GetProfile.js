import styles from "./Profile.module.css";

const GetProfile = (props) => {
  return (
    <>
      <div className={`${styles["profile-img"]} ${props.className}`}>
        <img src={props.user.profile} alt="profile" />
      </div>
      <div className={styles["profile-detail"]}>
        <p>{props.text}</p>
        <span>{props.user.name}</span>
      </div>
    </>
  );
};

export default GetProfile;
