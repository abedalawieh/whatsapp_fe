import { ChatIcon } from "./svg";
import Home from "./pages/home.js";
import Register from "./pages/register.js";
import Login from "./pages/login.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/userSlice.js";
function App() {
  const dispatch = useDispatch();

  return (
    <div className="dark">
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
