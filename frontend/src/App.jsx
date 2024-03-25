import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import MainPage from "./pages/Main";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/home" Component={MainPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
