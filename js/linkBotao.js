function iniciarLinkBotao() {
  // obtém a string de query da URL
  const queryParams = window.location.search;

  // seleciona o elemento <a> que você quer modificar
  const linkEl = document.querySelector("#botaoCheckout");

  // verifica se existem parâmetros na string de query
  if (queryParams) {
    // adiciona a string de query ao link
    linkEl.href = linkCheckout + queryParams;
  } else {
    // adiciona somente o link
    linkEl.href = linkCheckout;
  }
}
