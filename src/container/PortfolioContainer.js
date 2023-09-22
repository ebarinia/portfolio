import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import About from "../components/About";
import Home from "../components/Home";
import Portfolio from "../components/portfolio/Portfolio";

const PortfolioContainer = () => {
    return ( 
        <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
            </Routes>            
        </Router>
        </>
     );
}
 
export default PortfolioContainer;