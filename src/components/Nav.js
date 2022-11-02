import React from 'react';

function Nav() {
  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>Math Magicians</h1>
          </div>
          <ul className="links">
            <li>Home</li>
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
