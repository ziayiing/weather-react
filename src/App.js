import React from "react";
import Weather from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kota Kinabalu" />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.ziayiing86@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Ling Zia Yiing
          </a>
          {""} and is {""}
          open sourced on {""}
          <a
            href="https://github.com/ziayiing/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
