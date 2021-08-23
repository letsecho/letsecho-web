import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../images/logo.svg";

export const Header = () => {
  return (
    <header>
      <a href="main.html">
        <img src="dist/images/logo.svg" width="40" />
        <h1>Letsecho</h1>
      </a>
    </header>
  )
}
