import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Signout } from "../../store/userSlice";


const Logout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(Signout());
    navigate("/")
  }
  return (
    <div className={props.className} onClick={logoutHandler}>
      Logout {props.children}
    </div>
  );
};

export default Logout;
