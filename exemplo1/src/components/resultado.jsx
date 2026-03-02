import React from "react";
import resultado from "../data/resultado.js";

function Resultado({objetivo=resultado.objetivo, passo1=resultado.passo1, passo2=resultado.passo2} = {}) {
  return (
    <div>
      <h2>
        {objetivo} <br />
        {passo1}
      </h2>
      <h3> {passo2}</h3>
    </div>
  );
}

export default Resultado;