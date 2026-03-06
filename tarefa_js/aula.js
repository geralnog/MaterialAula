/* Tarefa JS1
Para entrega a 10 de março de 2026 às 23:59
Instruções

1. Gerador de Frases Aleatórias

1.1. Defina três arrays com conteúdos à sua escolha: sujeitos, verbos, objectos.
Quando o utilizador clicar num botão, o JS gera e mostra uma frase aleatória como:
“O gato dança na praia.”

1.2. Crie três botões: adicionar sujeito, adicionar verbo, adicionar objecto. Ao clicar no botão, é aberto um prompt a questionar o user o que quer adicionar. Os botões devem estar ligados apenas a uma função que adicione o que o user colocar no array certo.


2. Mini Jogo “Adivinha o Número”

Ao clicar num botão, o JS escolhe um número aleatório entre 1 e 20;
O utilizador tenta adivinhar via prompt(), até acertar;
O jogo dá dicas ("está longe", "está perto").


3. Gerador de Palavras-Passe

Cria uma função que gera palavras passe com letras, números e símbolos, com comprimento definido pelo utilizador através de um prompt. (deverá ter como base um array com letras e números e gerar a partir daí)

Deverá resolver os exercícios num ficheiro JS e submeter apenas esse ficheiro (transformado em .txt).
Ajuda: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */

////////////////// Exercício 1.1 //////////////////

let sujeitos = ["O rapaz ", "O boi ", "A abelha "];
let verbos = ["mastiga ", "dança ", "desenha "];
let objectos = ["na praia", "na escola", "no parque"];

function gerarFrases() {
  const btn = document.getElementById("button_phrases");
  if (!btn) return;

  btn.addEventListener("click", function () {
    let sujeito = sujeitos[Math.floor(Math.random() * sujeitos.length)];
    let verbo = verbos[Math.floor(Math.random() * verbos.length)];
    let objecto = objectos[Math.floor(Math.random() * objectos.length)];
    console.log(sujeito + verbo + objecto);
  });
}

gerarFrases();

////////////////// Exercício 1.2 //////////////////

let sujeito = [];
let verbo = [];
let objeto = [];
let codigo = "fim";

function addelement() {
  // Botão SUJEITO
  document.getElementById("add_sujeito").addEventListener("click", function () {
    let valor = prompt(
      "Digite um sujeito: (Se digitar 'Fim', ele sai do programa)",
    );
    if (valor && valor !== "fim") {
      sujeito.push(valor);
      alert("Sujeitos: " + sujeito.join(", "));
    }
  });

  // Botão VERBO
  document.getElementById("add_verbo").addEventListener("click", function () {
    let valor = prompt(
      "Digite um verbo: (Se digitar 'Fim', ele sai do programa)  ",
    );
    if (valor && valor !== "fim") {
      verbo.push(valor);
      alert("Verbos: " + verbo.join(", "));
    }
  });

  // Botão OBJETO
  document.getElementById("add_objeto").addEventListener("click", function () {
    let valor = prompt(
      "Digite um objeto: (Se digitar 'Fim', ele sai do programa)  ",
    );
    if (valor && valor !== "fim") {
      objeto.push(valor);
      alert("Objetos: " + objeto.join(", "));
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  addelement();
});
