import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { formData } = useSelector((state) => state?.form);
  const navigate = useNavigate();
  const { pwd } = formData;
  useEffect(() => {
    if (!pwd || pwd !== "12345") {
      console.log("pwd123", pwd);
      navigate("/login");
    }
  }, []);

  return <Outlet />;
};

export default PrivateRoute;
