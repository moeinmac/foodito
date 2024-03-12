import { useState } from "react";



const Logout = (props) => {
  const logoutHandler = () => {}
  return (
    <div className={props.className} onClick={logoutHandler}>
      Logout {props.children}
    </div>
  );
};

export default Logout;
