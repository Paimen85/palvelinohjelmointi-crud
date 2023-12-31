import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = async (e) => {
    e.preventDefault();
     await AuthService.loginCall(username, password)
      .then((res) => {
        console.log(res.data);

        const token = "Basic " + window.btoa(username + ":" + password)
        AuthService.storeToken(token)
        AuthService.saveLoggedInUser(username)
        navigate("/events");

        window.location.reload(false)
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Login Form</h2>
            </div>

            <div className="card-body">
              <form action="">
                <div className="row mb-3">
                  <label htmlFor="username" className="col-md-3 control-label">
                    Username or Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="password" className="col-md-3 control-label">
                    Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button
                    className="btn btn-success"
                    onClick={(e) => handleLoginForm(e)}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
