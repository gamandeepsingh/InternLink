import "./App.css";
import { Route,Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Headers/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user/otp" element={<Otp/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
