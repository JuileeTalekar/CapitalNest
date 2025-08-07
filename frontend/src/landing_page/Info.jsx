import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage';
import ProductsPage from './products/ProductsPage';
import PricingPage from './pricing/PricingPage';
import Signup from './signup/Signup';
import SupportPage from './support/SupportPage';
import ScrollToTopp from "./ScrollToTopp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../index.css"

function Info() {
    return ( 
        <>
        <Navbar />
        <ScrollToTopp />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/support" element={<SupportPage />} />
        </Routes>
         <Footer />

        </>
     );
}

export default Info;