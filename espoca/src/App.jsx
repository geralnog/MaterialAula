/* import { useState } from 'react'
 */import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return (
    <>
      <div className="header">
        <h1>Meu objetivo</h1>
      </div>

      <p className="text-uppercase">azasdasdasd</p>
    </>
  );
}
  

function MainGoal() {
  const info = {
    objetivo: "aprender React e construir aplicações incríveis! original",
    passo1: "fazer interfaces user friendly!",
    passo2: "ter o meu código otimizado!",
  };
  return (
    <div>
      <h2>
        {info.objetivo} <br />
        {info.passo1}
      </h2>
      <h3> {info.passo2}</h3>
    </div>
  );

}

function Goal(Props) {
  return (
    <div className="card">
      <h6>{Props.objetivo}</h6>
      <h6>{Props.passo1}</h6>
      <h3>{Props.passo2}</h3>
    </div>
  );
}

function App() {
  const teste = {
    objetivo: "aprender React e construir aplicações incríveis!",
    passo1: "fazer interfaces user friendly!",
    passo2: "ter o meu código otimizado!",
  };
  return (
    <>
      <div>
        <Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>FrontEndDeveloper:React</h1>

      <div className="card">
<Goal
        objetivo={teste.objetivo}
        passo1={teste.passo1}
        passo2={teste.passo2}
      />
      </div>
    </>
  );
}

export default App;
