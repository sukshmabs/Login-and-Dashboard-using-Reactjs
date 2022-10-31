import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordErrorMsg from "../components/PasswordErrorMsg";

function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const emailValidation = (email) => {
    const expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return expression.test(String(email).toLowerCase());
  };

  const passwordValidation = (password) => {
    const expression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*\@\!])(?=.*[a-zA-Z]).{8,}$/g;
    return expression.test(password);
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and Confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 4) {
      toast.error(
        "Username should be greater than 4 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (!emailValidation(values.email)) {
      toast.error("Invalid Email", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (!passwordValidation(values.password)) {
      toast.error(<PasswordErrorMsg />, toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordShown(!isConfirmPasswordShown);
  };

  return (
    <>
      <div className={classes.formcontainer}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={classes.brand}>
            <h2>Register</h2>
          </div>
          <TextField
            sx={{ m: 1, width: "100%" }}
            name="username"
            label="Username"
            type="text"
            onChange={(e) => handleChange(e)}
            inputProps={{ style: { fontFamily: "poppins" } }}
            InputLabelProps={{ style: { fontFamily: "poppins" } }}
          />
          <TextField
            sx={{ m: 1, width: "100%" }}
            name="email"
            label="Email"
            type="email"
            onChange={(e) => handleChange(e)}
            inputProps={{ style: { fontFamily: "poppins" } }}
            InputLabelProps={{ style: { fontFamily: "poppins" } }}
          />
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel sx={{ fontFamily: "poppins" }}>Password</InputLabel>
            <OutlinedInput
              type={isPasswordShown ? "text" : "password"}
              onChange={(e) => handleChange(e)}
              name="password"
              inputProps={{ style: { fontFamily: "poppins" } }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {isPasswordShown ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel sx={{ fontFamily: "poppins" }}>
              Confirm Password
            </InputLabel>
            <OutlinedInput
              type={isConfirmPasswordShown ? "text" : "password"}
              onChange={(e) => handleChange(e)}
              name="confirmPassword"
              inputProps={{ style: { fontFamily: "poppins" } }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={toggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {isConfirmPasswordShown ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
          <button type="submit" className={classes.button}>
            Register
          </button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
