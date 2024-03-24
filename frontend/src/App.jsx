import "./styles/utilities.css";
import "./styles/colors.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
