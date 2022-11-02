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
            <li>Calculator</li>
            |
            <li>Quote</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
