import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="navbar">
        <div className="logo">
          <ion-icon name="logo-youtube"></ion-icon>
          <h1>MovieBox</h1>
        </div>
        <input type="search" placeholder="What do you want to watch?" />
        <div className="signin">
          <p>Sign in</p>
          <ion-icon name="log-in-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}