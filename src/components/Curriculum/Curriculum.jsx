import React from "react";
import "./style-curriculum.css";
import data from "./Curriculum.json";
// import Header from "../Header/header";
// import Footer from "../Footer/Footer";

function Curriculum() {
    return (
        <>

    <section className="section">
            <div className="card-container">
                <div className="info-card">
                    <h3 id="resumo"> Resumo:</h3>
                    <p id="text">{data.Resumo}</p>
                </div>
            </div>

            <div className="card-container">
                <div className="info-card">
                    <h3 id="academica"> Acadêmica:</h3>
                    <p>
                        {data.Acadêmica.map((item, index) =>(
                        <li key={index}>
                            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo};
                            </li>
                        ))}
                    </p>
                </div>
            </div>

            <div className="card-container">
                <div className="info-card" style={{marginBottom: "85px"}}>
                    <h3 id="profissional"> Profissional:</h3>
                    <p>
                    {data.Profissional.map((item, index) =>(
                        <li key={index}>
                            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo};
                            </li>
                        ))}
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Curriculum;