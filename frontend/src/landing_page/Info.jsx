import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import ScrollToTop from "./ScrollToTop";
import Navbar from "./landing_page/Navbar";

function Info() {
    return ( 
        <>
        <Navbar />
        <ScrollToTop />
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