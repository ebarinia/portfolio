import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";


const PortfolioContainer = () => {
    return ( 
        <>
        <Router>
            <Header/>
            <Routes>

            </Routes>
            <img className="construction" src={require("../images/construction.png")} alt="Construction" />
            
        </Router>
        </>
     );
}
 
export default PortfolioContainer;