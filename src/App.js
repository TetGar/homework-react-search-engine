import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This is project was coded by{" "}
          <a href="/" target="_blank">
            Tetiana Garastej
          </a>{" "}
          and is{" "}
          <a href="/" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
