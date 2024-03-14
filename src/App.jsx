import { useState, useEffect } from "react";
import Login from "./components/Login";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  // Additional state to store the user's profile data
  const [userProfile, setUserProfile] = useState(null);

  return (
    <>
      <Navbar />
      <div
        className="bg-custom-purple-100 h-screen flex flex-1 justify-center items-center"
        style={{ height: "calc(100vh - navbarHeight)" }}
      >
        <Login />
      </div>
    </>
  );
}

export default App;
