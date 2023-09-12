import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className="socials">
      <ion-icon name="logo-facebook" title="facebook"></ion-icon>
      <ion-icon name="logo-instagram" title="instagram"></ion-icon>
      <ion-icon name="logo-twitter" title="twitter"></ion-icon>
      <ion-icon name="logo-youtube" title="youtube"></ion-icon>
    </div>
    <div className="links">
      <a href="#">Conditions of Use</a>
      <a href="#">Privacy & Policy</a>
      <a href="#">Press Room</a>
    </div>
    <div className="copy">
      <p>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
    </>
  )
}