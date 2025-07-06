import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import InstagramPreview from './components/InstagramPreview';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-serif bg-[#fdf8f3] text-[#2e2e2e] min-h-screen">
        <Hero />
        <Routes>
          <Route path="/" element={<InstagramPreview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;