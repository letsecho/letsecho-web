import React from 'react';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <>
      <li>
        <a href="mailto:info@letsechoapp.com">Contact</a>
      </li>
      <li>
        <Link className="navbar-brand" to="/faq">
          FAQ's
        </Link>
      </li>
      <li>
        <Link className="navbar-brand" to="/privacy">
          Privacy
        </Link>
      </li>
      <li>
        <Link className="navbar-brand" to="/terms">
          Terms
        </Link>
      </li>
    </>
  )
}
