import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Maths from './components/Maths';
import Nav from './components/Nav';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Maths />} />
        <Route path="/quote" element={<Quote />} />
        {/* <Calculator /> */}
      </Routes>
    </div>
  );
}

export default App;
