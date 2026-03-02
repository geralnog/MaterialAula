import React from "react";
import { useState } from "react";
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import Header from "./components/header.jsx";
import Pessoa from "./components/pessoa.jsx";
import Resultado from "./components/resultado.jsx";
import { TabButton } from "./components/button.jsx";

function App() {
  const [count, setCount] = useState(0);
  function handleSelect(selectedBtn) {
    console.log({ selectedBtn });
  }
  return (
    <>
      <Header />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Pessoa />
      <Resultado />
      <TabButton>Meu Botão</TabButton>

      <h3>Eventos Dinâmicos</h3>
      <menu>
        <TabButton onSelect={() => handleSelect("Js")}>Matéria JS</TabButton>
        <TabButton onSelect={() => handleSelect("React")}>
          Matéria React
        </TabButton>
        <TabButton onSelect={() => handleSelect("SQL")}>Matéria SQL</TabButton>
      </menu>
      <div>Conteúdo Dinâmico</div>
    </>
  );
}

export default App;
