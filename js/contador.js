function iniciarContador() {
  document.getElementById("contadorMinutos").innerHTML = contadorMinutosBloqueio;

  var intervalId = setInterval(function () {
    // Atualiza o contador de segundos
    contadorSegundosBloqueio--;

    // Verifica se os segundos chegaram a zero e decrementa os minutos
    if (contadorSegundosBloqueio < 0) {
      contadorMinutosBloqueio--;
      contadorSegundosBloqueio = 59;

      // Faz o elemento de minutos piscar em vermelho quando diminuir
      var minutosElement = document.getElementById("contadorMinutos");
      minutosElement.innerHTML = contadorMinutosBloqueio;
      minutosElement.style.color = "red";
      setTimeout(function () {
        minutosElement.style.color = "white";
      }, 500);
    }

    // Atualiza o elemento de segundos
    var segundosElement = document.getElementById("contadorSegundos");
    segundosElement.textContent = contadorSegundosBloqueio < 10 ? "0" + contadorSegundosBloqueio : contadorSegundosBloqueio;

    // Faz o elemento de segundos piscar em vermelho a cada segundo
    segundosElement.style.color = "red";
    setTimeout(function () {
      segundosElement.style.color = "white";
    }, 500);

    // Verifica se o tempo acabou
    if (contadorMinutosBloqueio === 0 && contadorSegundosBloqueio === 0) {
      clearInterval(intervalId);

      var tempoBloqueioElement = document.getElementById("tempoBloqueio");
      tempoBloqueioElement.innerHTML = '<i class="bi bi-lock-fill me-2"></i>' + "<b>O tempo acabou, o vídeo foi excluído, não recarregue a página para não perder seu acesso.</b>";
      tempoBloqueioElement.style.color = "red";
    }
  }, 1000);
}
