let pessoasOnline = Math.floor(Math.random() * 81) + 20;
let onlineCount = document.getElementById("pessoasOnline");
let countInterval;

onlineCount.innerHTML = pessoasOnline;

function atualizarNumeroPessoasOnline() {
  const numeroAnterior = pessoasOnline;
  pessoasOnline = Math.floor(Math.random() * 11) + (pessoasOnline - 5);

  //Verifica se o número de pessoas online é menor que 20
  if (pessoasOnline < 20) {
    pessoasOnline = Math.floor(Math.random() * 81) + 20;
  }

  //Verifica se houve uma mudança moderada no número de pessoas online
  if (Math.abs(numeroAnterior - pessoasOnline) > 10) {
    pessoasOnline = Math.floor(Math.random() * 11) + (numeroAnterior - 5);
  }

  //Verifica se o número de pessoas online é igual a 0 ou menor
  if (pessoasOnline <= 0) {
    pessoasOnline = Math.floor(Math.random() * 81) + 20;
  }

  onlineCount.innerHTML = pessoasOnline;

  //Verifica se houve uma mudança no número de pessoas online
  if (numeroAnterior !== pessoasOnline) {
    if (numeroAnterior <= pessoasOnline) {
      onlineCount.style.color = "limegreen";
    } else {
      onlineCount.style.color = "red";
    }
    setTimeout(function () {
      onlineCount.style.color = "inherit";
    }, 500);
  }
}

countInterval = setInterval(atualizarNumeroPessoasOnline, 3000);
