import React from "react";
import Home from "./Home";
import Service from "./Service";
import Features from "./Feature";
import Product from "./Product";
import Test from "./Test";
import Bottom from "./bottom";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Landingpage(){
    return(
        <>
        <Home />
        <Service />
        <Features />
        <Product />
        <Test />
        <Bottom />
        <Footer />
        </>
    );
}

export default Landingpage;