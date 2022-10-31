import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordErrorMsg from "../components/PasswordErrorMsg";

function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
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

  const passwordValidation = (password) => {
    const expression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*\@\!])(?=.*[a-zA-Z]).{8,}$/g;
    return expression.test(password);
  };

  const handleValidation = () => {
    const { username, password } = values;
    if (password === "") {
      toast.error("Username and Password is required.", toastOptions);
      return false;
    } else if (username === "") {
      toast.error("Username and Password is required.", toastOptions);
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
      navigate("/");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <>
      <div className={classes.formcontainer}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={classes.brand}>
            <h2>Login</h2>
          </div>
          <TextField
            sx={{ m: 1, width: "100%" }}
            name="username"
            label="Username"
            type="text"
            onChange={(e) => handleChange(e)}
            min="3"
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
          <button type="submit" className={classes.button}>
            Login
          </button>
          <span>
            Need an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
