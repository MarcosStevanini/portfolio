import "./home.scss";
import React, { useState, useEffect } from "react";

import api from "../../services/api/axios";
function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get("marcosstevanini")
      .then(({ data, ...resp }) => {
        setUser(data);
      })
      .catch((error) => {
        error.response.status === 404
          ? alert(error.response.data.message)
          : alert("Ocorreu um erro no servidor.");
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="homeImg">
          <img
            src={user.avatar_url}
            title="Marcos Stevanini"
            alt="Marcos Stevanini"
          />
        </div>

        <div className="homeContent">
          <p>
            Opa, eu sou {user.name} <br className="linhaMobile" />
            <span>e esse é o meu</span>
          </p>
          <h1>
            Porti<span>fólio</span>
          </h1>
          <div className="text">
            <h2 className="rotateText">em</h2>
            <h2>React</h2>
          </div>

          <div>
            <div className="sass">
              <h2>Sass</h2>
            </div>
            <div className="js">
              <h2>Javascript</h2>
            </div>
            <div className="typescript">
              <h2>Typescript</h2>
            </div>
          </div>

          <div className="contentLink">
            <a className="linkButton" href="/#">
              Vamos nessa?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
