import styles from "./Profile.module.css";

const GetProfile = (props) => {
  const profileURL = `https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/${props.user.profile}`
  return (
    <>
      <div className={styles["profile-img"]} id={props.id}>
        {props.children}
        <img src={profileURL} alt="profile" />
      </div>
      <div className={styles["profile-detail"]}>
        {props.text !== "" && <p>{props.text}</p>}
        <span>{props.user.name}</span>
      </div>
    </>
  );
};

export default GetProfile;
