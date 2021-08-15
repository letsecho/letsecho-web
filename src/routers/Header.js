import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../images/logo.svg";

export const Header = () => {
  return (
    <header>
      <Link className="navbar-brand" to="/index">
        <img src={Image} alt="Letescho logo" width="40px"/>
        <h1>Letsecho</h1>
      </Link>
    </header>
  )
}
