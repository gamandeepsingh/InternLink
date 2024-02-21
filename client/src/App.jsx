import "./App.css";
import { Route,Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []); 
  return (
    <div>
      <Headers />
      {isLoading ? (
        <Loader /> 
      ) : (
        <div className="">
          <div>
            
          </div>
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Register/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/otp" element={<Otp />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
