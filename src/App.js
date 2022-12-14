import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
