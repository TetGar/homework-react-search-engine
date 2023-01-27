import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App p-4">
      <div className="container ">
        <Weather cityChange="New York" />
        <footer className="mt-3">
          This is project was coded by{" "}
          <a href="/" target="_blank" rel="noreferrer">
            Tetiana Garastej
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TetGar/homework-react-search-engine"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
