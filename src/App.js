import React from "react";
import "./App.css";
import NasaData from "./components/NasaData";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <h1>NASA Picture of the Day</h1>
        <p>Welcome to NASA Picture of the Day, where we show NASAs picture of the day.</p>
        <NasaData />
      </div>
    </div>
  );
}

export default App;
