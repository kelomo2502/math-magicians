import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import CalculatorSection from './components/CalculatorSection';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <div className="app" id="home">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorSection />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
