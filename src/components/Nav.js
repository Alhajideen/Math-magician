import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>Math Magicians</h1>
          </div>
          <ul className="links">
            <Link to="/">
              <li>Home</li>
            </Link>
            |
            <Link to="/calculator">
              <li>Calculator</li>
            </Link>
            |
            <Link to="/quote">
              <li>Quote</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
