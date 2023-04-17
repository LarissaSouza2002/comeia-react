import React from "react";
import { Link } from "react-router-dom";
import "./style-nav.css"

function Nav() {
    return (
    <nav>
        <div>
            <Link to= "/">Currículo</Link>
        </div>

        <div>
            <Link to= "/portfolio">Portfólio</Link>
        </div>

        <div>
            <Link to= "/contato">Contato</Link>
        </div>
    </nav>
    )
}

export default Nav;