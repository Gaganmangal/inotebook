import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState(""); // State for error messages
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    // Check if passwords match
    if (password !== cpassword) {
      setError("Passwords do not match");
      return;
    }

    setError(""); // Clear error if passwords match

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
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
            style={{ borderRadius: "10px", backgroundColor: "#f0f8ff" }}
          >
            <div className="card-body">
              <h3
                className="card-title text-center mb-2"
                style={{ color: "#ff6347", fontSize: "1.5rem" }} // Increased font size
              >
                Sign Up
              </h3>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label
                    htmlFor="name"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                      fontSize: "1.1rem", // Increased font size
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
                    style={{ borderColor: "#4682b4", fontSize: "1rem" }} // Increased font size
                  />
                </div>
                <div className="form-group mb-2">
                  <label
                    htmlFor="email"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                      fontSize: "1.1rem", // Increased font size
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
                    style={{ borderColor: "#4682b4", fontSize: "1rem" }} // Increased font size
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
                      fontSize: "1.1rem", // Increased font size
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
                    minLength={5}
                    required
                    style={{ borderColor: "#4682b4", fontSize: "1rem" }} // Increased font size
                  />
                </div>
                <div className="form-group mb-2">
                  <label
                    htmlFor="cpassword"
                    style={{
                      color: "#4682b4",
                      marginBottom: "8px",
                      display: "block",
                      fontSize: "1.1rem", // Increased font size
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
                    minLength={5}
                    required
                    style={{ borderColor: "#4682b4", fontSize: "1rem" }} // Increased font size
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
  );
};

export default Signup;
