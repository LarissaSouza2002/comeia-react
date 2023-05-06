import React, { Fragment } from "react";
import "./style-home.css";
import data from "./Home.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <Fragment>
      <Header />
      <section className="section">
        <div className="card-container">
          <div className="info-card">
            <h3 id="resumo"> Resumo:</h3>
            <p id="text">{data.Resumo}</p>
          </div>
        </div>

        {data.Acadêmica && data.Acadêmica.length > 0 && (
          <div className="card-container">
            <div className="info-card">
              <h3 id="academica"> Acadêmica:</h3>
              <ul>
                {data.Acadêmica.map((item, index) => (
                  <li key={index}>
                    <span>
                      ({item.dataInicio} - {item.dataFim})
                    </span>{" "}
                    {item.titulo};
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {data.Profissional && data.Profissional.length > 0 && (
          <div className="card-container">
            <div className="info-card" style={{ marginBottom: "85px" }}>
              <h3 id="profissional"> Profissional:</h3>
              <ul>
                {data.Profissional.map((item, index) => (
                  <li key={index}>
                    <span>
                      ({item.dataInicio} - {item.dataFim})
                    </span>{" "}
                    {item.titulo};
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </Fragment>
  );
}

export default Home;
