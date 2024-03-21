import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeContainer from "./WelcomeContainer.jsx";
import { getStats, getPublicProfile } from "./api/api.js";

// will change once deployed
const ENDPOINT = "http://localhost:3000";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [githubURL, setGithubURL] = useState([]);

  const handleGetPublicProfile = async () => {
    const data = await getPublicProfile({ username: username }, ENDPOINT);
    console.log(data);
    setUser(data.matchedUser.username);
    setGithubURL(data.matchedUser.githubUrl);
  };

  return (
    <>
      <Navbar />
      <div
        className="bg-custom-purple-100 h-screen flex flex-1 justify-center items-center"
        style={{ height: "calc(100vh - navbarHeight)" }}
      >
        {user ? (
          <div>
            <h2>Welcome {user}</h2>
            <a href={githubURL}>Your github URL</a>
          </div>
        ) : (
          <div>
            <input onChange={(e) => setUsername(e.target.value)} type="text" />
            <button onClick={() => handleGetPublicProfile()}>Get data</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
