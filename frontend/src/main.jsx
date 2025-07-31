import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="*" element={<NotFound />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
