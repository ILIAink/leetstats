import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataDisplay from "./DataDisplay.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="bg-custom-purple-100 h-screen flex flex-1 justify-center items-center"
        style={{ height: "calc(100vh - navbarHeight)" }}
      >

      <DataDisplay />
      </div>

    </>
  );
}

export default App;
