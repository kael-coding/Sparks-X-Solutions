import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/products';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <div className="bg-[#F5F1D1] text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
};

export default App;
// The App component is the main component that sets up the routing for the application. It imports the necessary components and pages and uses the BrowserRouter, Routes, and Route components from react-router-dom to define the routes for the application. The Navbar component is rendered at the top of the page, followed by the Routes component that contains the Route components for each page. The Footer component is rendered at the bottom of the page. The App component is exported as the default export.