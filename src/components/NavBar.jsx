import React from "react";
import "./navBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <img src="/img-logo-YT.png" alt="Descripción de la imagen" />
        <h1>Om Shanti</h1>
      </div>
      <ul>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href="">Mats</a>
        </li>
        <li>
          <a href="">Portamats</a>
        </li>
        <li>
          <a href="">Bolsters</a>
        </li>
        <li>
          <a href="">Bloques</a>
        </li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default NavBar;
