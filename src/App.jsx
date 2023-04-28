import React, { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav";
// import "../script.js";

function App() {
    return (
    <>
    <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element= {<Portfolio/>} />
                <Route path="/contato" element= {<Contact/>} />
            </Routes>
        </BrowserRouter>
    <Footer/>
    </>
)
}

export default App;

{/* <Nav/> */}