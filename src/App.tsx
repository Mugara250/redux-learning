import { useState } from "react";
import "./index.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return <div className="w-2/6 mx-auto mt-10 text-xl flex flex-col justify-center items-center">
    <Profile />
    <Login />
  </div>;
}

export default App;
