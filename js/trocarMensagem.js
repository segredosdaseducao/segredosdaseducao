$(document).ready(function () {
  var tempoMesclar = 32000; //atualiza a cada 32 segundos
  let segundosAleatorios = Math.floor(Math.random() * (70 - 30 + 1)) + 30; //gera um número aleatório entre 30 e 70
  segundosAleatorios *= 1000; //transforma o valor de segundos para milissegundos
  setInterval(function () {
    if ($("#frasePessoasOnline").is(":visible")) {
      //verifica se a mensagem frasePessoasOnline está visível
      $("#frasePessoasOnline").fadeOut(500, function () {
        $("#tempoBloqueio").fadeIn(500);
      });
    } else {
      //caso contrário, a mensagem tempoBloqueio está visível
      $("#tempoBloqueio").fadeOut(500, function () {
        $("#frasePessoasOnline").fadeIn(500);
      });
    }
  }, tempoMesclar);
});
