import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import About from "../components/About";
import Portfolio from "../components/portfolio/Portfolio";
import Footer from "../components/footer/Footer";
import Photography from "../components/photography/Photography";

const PortfolioContainer = () => {
    return ( 
        <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/photography" element={<Photography/>}/>
            </Routes>  
            <Footer/>          
        </Router>
        </>
     );
}
 
export default PortfolioContainer;