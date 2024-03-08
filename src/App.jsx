import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-custom-purple-700 text-white py-4">
        <nav className="container mx-auto flex justify-between px-4 md:px-0">
          <div>LeetStats</div>
          <div>{/* Navigation Links or Icons */}</div>
        </nav>
      </div>

      <div
        className="bg-custom-purple-100 h-screen flex flex-1 flex-col justify-center items-center"
        style={{ height: "calc(100vh - navbarHeight)" }}
      >
        <h1>Welcome to LeetStats</h1>
      </div>
    </>
  );
}

export default App;
