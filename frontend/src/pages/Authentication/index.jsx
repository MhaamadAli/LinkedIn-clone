import "./style.css";


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "./components/SignupForm";

const Authentication = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!credentials.email.includes("@")) {
      setError("Invalid email");
    } else if (credentials.password.length < 6) {
      setError("Short password");
    } else {
      setError("");
    }
  }, [credentials]);

  return (
    <div className="page full-width ">
      <SignupForm />
    </div>
  );
};

const LoginForm = () => {};

export default Authentication;
