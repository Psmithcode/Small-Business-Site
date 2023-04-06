import { Button } from "@mui/material";
import React from "react";
import "../reset.css";
import "../styles/Login.css";
import { useNavigate } from "react-router";
import { useState } from "react";
const cookie = require("cookie");

export default function Login(props) {
  const navigate = useNavigate();
  // const navigate = Navigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    // document.cookie = "loggedIn=true;max-age=60*1000";
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = cookie.serialize("loggedIn", true, { maxAge: 600 });
    console.log(document.cookie);

    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-form-container">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleTextChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleTextChange}
        />

        <Button
          variant="container"
          onClick={login}
          sx={{ backgroundColor: "green" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
