import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate(); // Use useNavigate instead of useHistory
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Logged in Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card shadow-lg p-4"
              style={{ borderRadius: "10px", backgroundColor: "#f0f8ff" }}
            >
              <div className="card-body">
                <h3
                  className="card-title text-center mb-2"
                  style={{ color: "#4682b4", fontSize: "1.8rem" }} // Increased font size
                >
                  Sign In
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-2">
                    <label
                      htmlFor="email"
                      style={{
                        color: "#4682b4",
                        marginBottom: "8px",
                        display: "block",
                        fontSize: "1.2rem",
                      }} // Increased font size
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={credentials.email}
                      id="email"
                      name="email"
                      onChange={onChange}
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      style={{
                        borderColor: "#4682b4",
                        backgroundColor: "#ffffff",
                        fontSize: "1rem",
                      }} // Increased font size
                    />
                    <small
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "#ff4500", fontSize: "0.9rem" }} // Increased font size
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
                        fontSize: "1.2rem",
                      }} // Increased font size
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={credentials.password}
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={onChange}
                      style={{
                        borderColor: "#4682b4",
                        backgroundColor: "#ffffff",
                        fontSize: "1rem",
                      }} // Increased font size
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block mt-3"
                    style={{
                      backgroundColor: "#32cd32",
                      color: "#fff",
                      fontSize: "1.1rem",
                    }} // Increased font size
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
