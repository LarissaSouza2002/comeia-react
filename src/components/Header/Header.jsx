import React from "react";
import logo from '../../assets/img/logo.jpg';
import "./style-header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <img id="logo" src={logo}/>

        <div className="principal">
            <h1 className="titulo-principal"> Fátima Cruz</h1>
            <h2 className="titulo-centralizado"> Perícia Técnica</h2>
        </div>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <Link to="/portfolio">Portfólio</Link>
                </div>

                <div>
                    <Link to="/contato">Contato</Link>
                </div>
            </nav>
    </header>
    )
}

export default Header;