import styles from "./CartHeader.module.css";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartHeader = (props) => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <header className={styles.cartHeader}>
      <button onClick={backHandler} className={styles.back}>
        <IoReturnUpBackOutline className={styles.icon} />
        <span>back</span>
      </button>
      <h1>My Cart</h1>
      <button className={styles.remove}>(Remove All)</button>
    </header>
  );
};

export default CartHeader;
