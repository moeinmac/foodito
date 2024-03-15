import styles from "./Profile.module.css";

const GetProfile = (props) => {
  const profileURL = `https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/${props.user.profile}`
  return (
    <>
      <label className={styles["profile-img"]} id={props.id} htmlFor="uploadInput">
        {props.children}
        <img src={profileURL} alt="profile" />
      </label>
      <div className={styles["profile-detail"]}>
        {props.text !== "" && <p>{props.text}</p>}
        <span>{props.user.name}</span>
      </div>
    </>
  );
};

export default GetProfile;
