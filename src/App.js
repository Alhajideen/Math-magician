import React from 'react';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Calculator />
      </Routes>
    </div>
  );
}

export default App;
