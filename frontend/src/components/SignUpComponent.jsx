import React, { useState } from "react";

const SignUpComponent = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingUpForm = (e) => {
    e.preventDefault();
    const register = { name, username, email, password };
    console.log(register)

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Sign Up</h2>
            </div>

            <div className="card-body">
              <form action="">
                <div className="row mb-3">
                  <label htmlFor="name" className="col-md-3 control-label">
                    Name
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="username" className="col-md-3 control-label">
                    Username
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
                  <label htmlFor="email" className="col-md-3 control-label">
                    Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    onClick={(e) => handleSingUpForm(e)}
                  >
                    Sign Up
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

export default SignUpComponent;
