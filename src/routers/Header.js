import React from 'react';
import Image from "../images/logo.svg";

export const Header = () => {
  return (
    <header>
      <a href="main.html">
        <img src={Image} alt="Letescho logo" width="40px"/>
        <h1>Letsecho</h1>
      </a>
    </header>
  )
}
