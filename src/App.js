import React from "react";
import Weather from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kota Kinsbalu" />
        <footer>
          This project was coded by{""}
          <a
            href="https://www.ziayiing86@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Ling Zia Yiing
          </a>
          {""}
          and is{""}
          <a
            href="https://github.com/fredacee/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
