import useSignout from "../../hooks/useSignout";

const Logout = (props) => {
  const signout = useSignout();

  return (
    <div className={props.className} onClick={signout.ok}>
      Logout {props.children}
    </div>
  );
};

export default Logout;
