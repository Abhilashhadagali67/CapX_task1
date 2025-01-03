import React, { useContext } from 'react';
import { ShopContext } from './context/ShopContext';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import DashBoard from './Pages/DashBoard';
import Footer from './Components/Footer';
import StockPage from './Pages/StockPage'; // Import StockPage
import { ToastContainer } from 'react-toastify';


const App = () => {
  
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/stock/:stockid" element={<StockPage />} /> {/* Route for StockPage */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
