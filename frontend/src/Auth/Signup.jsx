import "./index.css";
import logo from "../assets/Linkedin-Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigateTo = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    account_type: "user",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, email, password, account_type } = credentials;
      const userData = new FormData();
      userData.append("username", username);
      userData.append("email", email);
      userData.append("password", password);
      userData.append("account_type", account_type);

      const response = await axios.post(
        "http://localhost/linkedin-clone/server/signup.php",
        userData
      );

      if (response.data.status === 200) {
        localStorage.setItem("userdetails", JSON.stringify(response.data.user));
        navigateTo("/home");
      }
    } catch (error) {
      console.log("error: " + error);
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
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="enter your name"
                onChange={(e) => {
                  setCredentials({ ...credentials, username: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter your  email"
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
                placeholder="enter your  password"
                onChange={(e) => {
                  setCredentials({ ...credentials, password: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="account_type">Account type</label>
              <select
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    account_type: e.target.value,
                  });
                }}
              >
                <option value="user">User</option>
                <option value="company">Company</option>
              </select>
            </div>
            <div>
              <button type="submit">Agree & Join</button>
            </div>
            <div className="line">
              <hr />
            </div>
            <div className="link">
              Already on LinkedIn?
              <button
                className="toLogin"
                onClick={() => {
                  navigateTo("/");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
