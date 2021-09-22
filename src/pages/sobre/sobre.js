import "./sobre.scss";
import React, { useState, useEffect } from "react";

import api from "../../services/api/axios";

function Sobre() {
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
      <div className="sobre spacing">
        <div className="sobreImg">
          <img
            src={user.avatar_url}
            alt="Marcos Stevanini"
            title="Marcos Stevanini"
          />
        </div>

        <div className="sobreText">
          <h2>
            Opa, meu nome é Marcos Stevanini e eu irei te mostrar o que eu faço!
          </h2>
          <p>
            Sou de Bom Jesus do Itabapoana - RJ, tenho 23 anos de idade. Sou
            Programador e estou aqui para te mostrar um pouco da minha função
            como desenvolvedor web e mobile.
          </p>
          <br />
          <p className="text-sobre">
            <span>
              "Sou apaixonado por criar desde que me entendo por gente
            </span>
            , com uma maleta infantil de pintura ou com um software de última
            geração, criar sempre fez parte da minha vida. Hoje, uso essa paixão
            para ajudar pessoas a atingirem resultados incríveis com a
            comunicação visual."
          </p>
        </div>
      </div>
    </>
  );
}

export default Sobre;
