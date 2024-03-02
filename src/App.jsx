import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between">
          <div>LeetStats</div>
          <div>{/* Navigation Links or Icons */}</div>
        </nav>
      </div>

      <div
        className="h-screen flex flex-1 justify-center items-center bg-slate-400"
        style={{ height: "calc(100vh - navbarHeight)" }}
      >
        <h1>Welcome to LeetStats</h1>
      </div>
    </>
  );
}

export default App;
