const womenNames = [
  "Alessandra",
  "Alice",
  "Aline",
  "Amanda",
  "Ana",
  "Andressa",
  "Andreza",
  "Bárbara",
  "Beatriz",
  "Bianca",
  "Bruna",
  "Camila",
  "Carla",
  "Carolina",
  "Caroline",
  "Cecília",
  "Clara",
  "Cristina",
  "Daiane",
  "Daniela",
  "Débora",
  "Eduarda",
  "Elaine",
  "Elen",
  "Eliana",
  "Eliciane",
  "Elis",
  "Elisângela",
  "Elisete",
  "Eloá",
  "Emanuela",
  "Emília",
  "Emily",
  "Érica",
  "Evelyn",
  "Fabiana",
  "Fernanda",
  "Flávia",
  "Gabriela",
  "Giovana",
  "Gisele",
  "Glória",
  "Helena",
  "Ingrid",
  "Isabel",
  "Isabella",
  "Isadora",
  "Isis",
  "Ivete",
  "Jaqueline",
  "Jéssica",
  "Joana",
  "Joice",
  "Júlia",
  "Juliana",
  "Jussara",
  "Kamila",
  "Karen",
  "Karina",
  "Kátia",
  "Lais",
  "Lana",
  "Larissa",
  "Laryssa",
  "Laura",
  "Layane",
  "Leda",
  "Letícia",
  "Lia",
  "Lilian",
  "Lívia",
  "Lorena",
  "Luana",
  "Lucélia",
  "Luciana",
  "Luciene",
  "Luiza",
  "Luma",
  "Luzia",
  "Márcia",
  "Mariana",
  "Marília",
  "Marina",
  "Marta",
  "Mary",
  "Mayara",
  "Melissa",
  "Michele",
  "Milena",
  "Mirian",
  "Monique",
  "Naiara",
  "Natália",
  "Nathalia",
  "Nicole",
  "Núbia",
  "Olívia",
  "Pamela",
  "Patrícia",
  "Paula",
  "Paulina",
  "Poliana",
  "Priscila",
  "Rafaela",
  "Raimunda",
  "Raissa",
  "Rayane",
  "Renata",
  "Roberta",
  "Rosana",
  "Rúbia",
  "Sabrina",
  "Samanta",
  "Sandra",
  "Sarah",
  "Sara",
  "Silvana",
  "Silvia",
  "Simone",
  "Sofia",
  "Sônia",
  "Stefany",
  "Stephanie",
  "Sueli",
  "Suzana",
  "Tainara",
  "Talita",
  "Tâmara",
  "Tatiana",
  "Thaís",
  "Valéria",
  "Vanessa",
  "Vera",
  "Verônica",
  "Victória",
  "Vitória",
  "Wanessa",
  "Yasmin",
  "Yasmim",
  "Yara",
  "Yasmin",
  "Zélia",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showToast() {
  // Seleciona o toast aleatoriamente
  const toastIndex = Math.random();
  let message = "";
  let img = "";

  if (contadorMinutosBloqueio <= aparecerToastCompra) {
    if (toastIndex < 0.1) {
      // Toast 1: 10% de chance
      const randomName = womenNames[getRandomInt(0, womenNames.length - 1)];
      const randomImg = getRandomInt(1, 57);
      message = `<b>${randomName}</b> também <b>está assistindo</b> o vídeo ao vivo.`;
      img = `<img src="img/${randomImg}.jpeg" class="rounded-circle ms-2 m-auto" style="width: 52px; height: 52px" />`;
    } else if (toastIndex < 0.3) {
      // Toast 2: 30% de chance
      if (contadorMinutosBloqueio <= 0) {
        message = "<b>Este vídeo foi excluído no Brasil!</b> Não recarregue a página para não perder seu acesso.";
        img = `<i class="bi bi-lock-fill" style="font-size: 20px"></i>`;
      } else {
        message = "O vídeo está prestes a ser <b>excluído do Brasil</b>!";
        img = `<i class="bi bi-unlock-fill" style="font-size: 20px"></i>`;
      }
    } else {
      // Toast 3: 70% de chance
      const randomName = womenNames[getRandomInt(0, womenNames.length - 1)];
      const randomImg = getRandomInt(1, 57);
      message = `<b>${randomName}</b> acabou de comprar!`;
      img = `<img src="img/${randomImg}.jpeg" class="rounded-circle ms-2 m-auto" style="width: 52px; height: 52px" />`;
    }
  } else {
    if (toastIndex < 0.7) {
      // Toast 1: 70% de chance
      const randomName = womenNames[getRandomInt(0, womenNames.length - 1)];
      const randomImg = getRandomInt(1, 57);
      message = `<b>${randomName}</b> também <b>está assistindo</b> o vídeo ao vivo.`;
      img = `<img src="img/${randomImg}.jpeg" class="rounded-circle ms-2 m-auto" style="width: 52px; height: 52px" />`;
    } else if (toastIndex < 0.9) {
      // Toast 2: 20% de chance
      if (contadorMinutosBloqueio <= 0) {
        message = "<b>Este vídeo foi excluído no Brasil!</b> Não recarregue a página para não perder seu acesso.";
        img = `<i class="bi bi-lock-fill" style="font-size: 20px"></i>`;
      } else {
        message = "O vídeo está prestes a ser <b>excluído do Brasil</b>!";
        img = `<i class="bi bi-unlock-fill" style="font-size: 20px"></i>`;
      }
    } else {
      const randomName = womenNames[getRandomInt(0, womenNames.length - 1)];
      const randomImg = getRandomInt(1, 57);
      message = `<b>${randomName}</b> também <b>está assistindo</b> o vídeo ao vivo.`;
      img = `<img src="img/${randomImg}.jpeg" class="rounded-circle ms-2 m-auto" style="width: 52px; height: 52px" />`;
    }
  }

  // Seleciona o elemento existente
  const originalToastEl = document.querySelector(".toast");

  // Cria uma cópia do elemento existente
  const newToastEl = originalToastEl.cloneNode(true);

  // Atualiza a imagem e a mensagem do toast na cópia
  const newToastImgEl = newToastEl.querySelector("#imgToast");
  const newToastMessageEl = newToastEl.querySelector("small");
  newToastImgEl.innerHTML = img;
  newToastMessageEl.innerHTML = message;

  // Adiciona o novo toast ao elemento pai do toast original
  originalToastEl.parentNode.appendChild(newToastEl);

  // Mostra o novo toast
  const newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function iniciarToast() {
  // Mostra o primeiro toast imediatamente
  showToast();

  function aumentarFrequencia() {
    if (contadorMinutosBloqueio <= minutosAumentarFrequencia && frequencia > frequenciaMaximaAumentada) {
      frequencia -= 1000; // Diminui a frequência em 1 segundo a cada minuto
    }
  }

  setInterval(aumentarFrequencia, checarFrequencia); // Verifica a cada 60 segundos se precisa aumentar a frequência

  function showTimedToast() {
    showToast();
    setTimeout(showTimedToast, frequencia);
  }

  // Inicia o primeiro timeout
  setTimeout(showTimedToast, frequencia);
}
