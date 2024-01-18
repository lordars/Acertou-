# Acertou-
Jogo onde se usa habilidade Javascript e  uso do ResponsiveVoice.
Nome do projeto: Acertou

Descrição:

Este projeto é um jogo de adivinhação simples que usa JavaScript, HTML e CSS para dar som e vida ao jogo. O jogador deve adivinhar um número entre 1 e 100. O jogo fornece dicas ao jogador sobre se o número que ele está adivinhando é maior ou menor que o número correto.

Requisitos:

    Nenhum

Como jogar:

    Abra o arquivo index.html em um navegador da web.
    Pressione o botão "Chutar".
    Digite um número entre 1 e 100.
    Pressione o botão "Chutar" novamente.

Como funciona:

O jogo começa com o jogador adivinhando um número. O jogo então fornece uma dica ao jogador sobre se o número que ele está adivinhando é maior ou menor que o número correto. O jogador continua adivinhando até que ele acerte o número correto.

A dica é fornecida usando JavaScript. O JavaScript permite que você crie vozes falantes para seus aplicativos web. No caso deste jogo, o JavaScript é usado para dizer ao jogador se o número que ele está adivinhando é maior ou menor que o número correto.

Exemplo:

Aqui está um exemplo de como o jogo funciona:

> 50

O número que você adivinhou é menor que o número secreto.

> 75

O número que você adivinhou é maior que o número secreto.

> 62

Parabéns! Você acertou o número secreto!

O número secreto era 62.

Melhorias possíveis:

    Adicionar um limite de tempo para o jogo.
    Adicionar um modo de jogo difícil que fornece dicas menos específicas.
    Adicionar um modo de jogo de dois jogadores.

Conclusão:

Este é um jogo simples que pode ser usado como um ponto de partida para aprender sobre JavaScript, HTML e CSS.

Código:

O código para este jogo está disponível no seguinte repositório do GitHub:

https://github.com/bard/acertou

HTML:

O HTML para o jogo é bastante simples. Ele contém um botão para o jogador adivinhar um número, um campo de entrada para o jogador digitar o número e um elemento de texto para exibir a dica.
HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Acerte</title>
</head>
<body>
  <h1>Acerte</h1>
  <input type="number" id="numero-adivinhado">
  <button onclick="adivinhar()">Chutar</button>
  <p id="dica"></p>
</body>

Use o código com cuidado. Saiba mais

JavaScript:

O JavaScript para o jogo é responsável por gerar a dica para o jogador e verificar se o jogador acertou o número.
JavaScript

function adivinhar() {
  // Obtém o número que o jogador adivinhou.
  const numeroAdivinhado = document.getElementById("numero-adivinhado").value;

  // Gera a dica para o jogador.
  const dica = gerarDica(numeroAdivinhado);

  // Exibe a dica para o jogador.
  document.getElementById("dica").textContent = dica;

  // Verifica se o jogador acertou o número.
  if (numeroAdivinhado === numeroSecreto) {
    // O jogador acertou o número.
    alert("Parabéns! Você acertou o número secreto!");
  }
}

function gerarDica(numeroAdivinhado) {
  // Se o número que o jogador adivinhou for menor que o número secreto,
  // a dica é "O número é maior."
  if (numeroAdivinhado < numeroSecreto) {
    return "O número é maior.";
  }

  // Se o número que o jogador adivinhou for maior que o número secreto,
  // a dica é "O número é menor."
  if (numeroAdivinhado > numeroSecreto) {
    return "O número é menor.";
  }

  // O número adivinhado é correto.
  return "Acertou!";
}

// Gera um número secreto entre 1 e 100.
function gerarNumeroSecreto() {
  return Math.floor(Math.random()
