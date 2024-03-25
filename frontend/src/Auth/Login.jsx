import "./index.css";
import logo from "../assets/Linkedin-Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = credentials;
      const userData = new FormData();
      userData.append("email", email);
      userData.append("password", password);

      const response = await axios.post(
        "http://localhost/linkedin-clone/server/login.php",
        userData
      );

      if (response.data.status === 200) {
        localStorage.setItem("userdetails", JSON.stringify(response.data.user));
        navigate("/home");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <section className="auth-page">
        <div className="logo">
          <img srcSet={logo} alt="logo" />
        </div>
      </section>
      <div className="auth-container">
        <h1>Make the most of your professional life</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter your email"
                onChange={(e) => {
                  setCredentials({ ...credentials, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                onChange={(e) => {
                  setCredentials({ ...credentials, password: e.target.value });
                }}
                placeholder="enter your password"
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            <div className="line">
              <hr />
            </div>
            <div className="link">
              Don't have an Account?
              <button
                className="toLogin"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
