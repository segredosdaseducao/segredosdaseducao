// Função para exibir a localização do usuário
function exibirLocalizacao(localizacao) {
  var cidade = localizacao.city;
  var estado = localizacao.region;

  // Exibe a localização na página
  document.getElementById("localizacao").innerHTML = cidade + ", " + estado;
}

// Utiliza a API de geolocalização do IP para obter a localização
fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    var localizacao = data;
    exibirLocalizacao(localizacao);
  });
