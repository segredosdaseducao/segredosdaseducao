function mostrarBotao() {
  const botaoEl = document.querySelector("#boxBotao");
  botaoEl.style.display = "block";
}

function iniciarContadorBotao() {
  setTimeout(mostrarBotao, minutosParaAparecerBotao * 60000);
}
