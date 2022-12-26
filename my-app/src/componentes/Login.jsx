import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validInput } from "../helper/checkedForm";
import LinkLogin from "./LinkLogin";
import { loginProfile } from "../helper/user";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  document.body.style.backgroundColor = "#D09C9B";
  const [email, setEmail] = useState();
  const [formChecked, setFormChecked] = useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    const resultEmail = validateEmail(email);
    <span className="sidebar-title">Admin</span>;

    const objectValidation = {};
    if (!resultEmail) {
      objectValidation.email = "Wrong email!";
    }
    if (validInput(password)) {
      objectValidation.password = "You must complete the field";
    }
    if (objectValidation.email || objectValidation.password) {
      setFormChecked(objectValidation);
      return;
    }

    const result = await loginProfile(email, password);
    setMessage(result.message);
    if (result.status === 200) {
      window.sessionStorage.setItem(
        "token",
        JSON.stringify(result.access_token)
      );
      navigate("/user/admin");
    }
  };

  return (
    <>
      {message && (
        <div className="alerta alert alert-primary text-center" role="alert">
          {message}
        </div>
      )}
      <div className="loginbox d-flex justify-content-center align-items-center">
        <div className="loginitem col-md-4 p-4 shadow-sm bg-light border rounded-3">
          <h1 className="text-center title">Login</h1>
          <form onSubmit={(event) => login(event)}>
            <div className="mb-3">
              <label className="form-label title">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="text"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {formChecked.email && (
                <span className="text-danger">{formChecked.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label title">Password</label>
              <input
                onChange={(e) => {
                  console.log("password");
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
              />
            </div>
            {formChecked.password && (
              <span className="text-danger">{formChecked.password}</span>
            )}
            <p className="small mt-1">
              <Link to="/change/password">
                <a className="text-danger" href="forget-password.html">
                  Forgot password?
                </a>
              </Link>
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button className="p-1 mb-0 btn btn-danger col-2">Login</button>
            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center title">
              You do not have an account?
              <Link to="/people/register">
                <LinkLogin
                  className="text-danger ms-2"
                  text={"Register People"}
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
