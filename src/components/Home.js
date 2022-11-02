import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="home-message">
        <div className="home-header">
          <h2>
            <span className="welcome">Welcome to </span>
            <span className="app-name">Smartea</span>
          </h2>
          <p>
            Smartea is a website for all fans of mathematics. It is a Single
            Page App (SPA) that allows users to: Make simple calculations, Read
            a random math-related quote. Built with React and Redux. The app
            allows users to perform basic arithmetic operations, including
            addition, subtraction, division, and multiplication, and chaining
            and nesting of operations (as well as the +/- button which changes a
            negative number positive and vice-versa). Now let&apos;s go do some
            MATHS!😎
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
