import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem(props.name);
    navigate("/");
  }, []);

  return <></>;
}

export default Logout;
