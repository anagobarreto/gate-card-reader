import React from "react";
import logo from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Gate error code:</p>
        <input className="inputbox" maxlength="3"></input>
      </header>
    </div>
  );
}

export default App;
