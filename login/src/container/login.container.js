import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { emptyLoginForm, setIntoForm } from "../redux/login/login.action";
import { useNavigate } from "react-router-dom";

const defaultState = {
  email: "",
  pwd: "",
};

const LoginContainer = () => {
  const [formData, setFormData] = useState(defaultState);
  const [isPwdRemamber, setIsPwdRemamber] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, pwd } = formData;

  useEffect(() => {
    dispatch(emptyLoginForm(defaultState));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name,evalue", name, value);
    setError({ ...error, [name]: validate(name, value) });
    setFormData({ ...formData, [name]: value });
  };

  const validate = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "Email is required";
        } else {
          return "";
        }
      case "pwd":
        if (!value) {
          return "Password is required";
        } else {
          return "";
        }
      default:
        break;
    }
  };

  const handleCheck = () => {
    setIsPwdRemamber(!isPwdRemamber);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = validate(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    let clonedFormData = { ...formData };
    clonedFormData = {
      email,
      ...(isPwdRemamber && { pwd }),
    };
    dispatch(setIntoForm(clonedFormData));
    navigate("/home");
  };
  return { handleSubmit, handleChange, handleCheck, formData, error };
};

export default LoginContainer;
