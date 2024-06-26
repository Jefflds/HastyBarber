import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage/AuthPage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Dashboard from "./Dashboard/Dashboard";
import Schedule from "./Schedule/Schedule";

const Pages = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/dashboard" element={ <Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
     </Routes>
  </Router>
  )
};

export default Pages;
