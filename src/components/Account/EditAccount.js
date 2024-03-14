import { useDispatch } from "react-redux";
import editSlice from "../../store/editSlice";

const EditAccount = (props) => {
  const dispatch = useDispatch();
  const editingHandler = () => dispatch(editSlice.actions.setEditing());

  return (
    <div className={props.className} onClick={editingHandler}>
      Edit Account {props.children}
    </div>
  );
};

export default EditAccount;
