import React, { Fragment } from "react";
import "./App.css";
import Curriculum from "./components/Curriculum/Curriculum";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
// import "../script.js";

function App() {
    return (
    <>
    <Header/>
    <BrowserRouter>
        <Nav/>
    
    <Routes>
        <Route index element= {<Curriculum />} />
        <Route path="portfolio" element= {<Portfolio/>} />
        <Route path="contato" element= {<Contact/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
)
}

export default App;
