import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        src={
          "https://i.gifer.com/origin/18/1881d8691bd9ff18bea62c0a275e1da6_w200.gif"
        }
        className="logo"
        alt="Vite logo"
      />
    </>
  );
}

export default App;
