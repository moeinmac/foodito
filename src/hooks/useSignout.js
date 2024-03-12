import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Signout } from "../store/userSlice";

const useSignout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ok = () => {
    dispatch(Signout());
    navigate("/");
  };
  return { ok };
};

export default useSignout;
