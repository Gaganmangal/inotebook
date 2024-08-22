import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:""
  });
  let navigate = useNavigate(); // Use useNavigate instead of useHistory
  const handleSubmit = async (e) => {
    const { name, email, password } = credentials;
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invailed credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card shadow-lg p-4"
            style={{ backgroundColor: "#f0f8ff" }}
          >
            <div className="card-body">
              <h3
                className="card-title text-center mb-2"
                style={{ color: "#ff6347" }}
              >
                Sign Up
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label
                    htmlFor="name"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    onChange={onChange}
                    style={{ borderColor: "#4682b4" }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label
                    htmlFor="email"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={onChange}
                    style={{ borderColor: "#4682b4" }}
                  />
                  <small
                    id="emailHelp"
                    className="form-text"
                    style={{ color: "#ff4500" }}
                  >
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group mb-2">
                  <label
                    htmlFor="password"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    minLength={5} required
                    style={{ borderColor: "#4682b4" }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label
                    htmlFor="password"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm password"
                    onChange={onChange}
                    minLength={5} required
                    style={{ borderColor: "#4682b4" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-block mt-3"
                  style={{ backgroundColor: "#32cd32", color: "#fff" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
