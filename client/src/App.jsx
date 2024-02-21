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
import { sendProfile } from "./services/Apis";
import coin from "./assests/coin.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
    fetchCoin()
  }, []); 


  async function fetchCoin(){
    sendProfile()
  }

  return (
    <div className="">
      <Headers />
      {isLoading ? (
        <Loader /> 
      ) : (
        <div className="">
          <div className="z-50 fixed right-0 flex items-center gap-2 top-0 bg-blue-500 text-xl font-bold text-white font-mon px-3 py-[16.5px] rounded-2xl max-md:top-[70px]  max-md:px-1  max-md:py-[8px] ">
              <img src={coin} className="w-10 h-full" alt="" />
              <p>50</p>
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
