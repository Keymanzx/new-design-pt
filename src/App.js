import "./App.css";
import Homepage from "./containers/Homepage";
import Navbar from "./containers/Navbar";
import React, { useState, useEffect } from 'react';
import Footer from "./containers/Footer";

function App() {
  const [isNavbarLocked, setIsNavbarLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarLocked(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#3B3960] min-h-screen">
      <div className={`navbar-container ${isNavbarLocked ? 'navbar-locked' : ''}`}>
        <Navbar />
      </div>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
