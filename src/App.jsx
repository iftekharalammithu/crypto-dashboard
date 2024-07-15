import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Deshboard from "./Pages/Deshboard/Deshboard";

function App() {
  return (
    <>
      <div className="h-100">
        <Deshboard></Deshboard>
      </div>
    </>
  );
}

export default App;
