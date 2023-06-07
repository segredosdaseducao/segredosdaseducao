const inputMensagem = document.getElementById("input-mensagem");
const botaoEnviar = document.getElementById("botao-enviar-mensagem");
const listaMensagens = document.querySelector(".chat-messages");
const chatContainer = document.querySelector(".chat-container");

// Função de bloquear o input de texto temporiariamente
function bloquearInput() {
  inputMensagem.disabled = true;
  botaoEnviar.style.display = "none";
  inputMensagem.setAttribute("placeholder", `Aguarde ${contadorSegundosBloqueioChat} segundos para enviar outra mensagem...`);
  const intervalId = setInterval(() => {
    inputMensagem.setAttribute("placeholder", `Aguarde ${contadorSegundosBloqueioChat} segundos para enviar outra mensagem...`);
    contadorSegundosBloqueioChat--;
    if (contadorSegundosBloqueioChat < 0) {
      clearInterval(intervalId);
      contadorSegundosBloqueioChat = 30;
      inputMensagem.removeAttribute("disabled");
      botaoEnviar.style.display = "inline-block";
      inputMensagem.setAttribute("placeholder", "Envie uma mensagem");
    }

    if (verificarComentarioDesativado()) {
      clearInterval(intervalId);
      desativarEnvioManual();
    }
  }, 1000);
}

// Função de enviar uma mensagem
function enviarMensagem(mensagem) {
  if (mensagem) {
    inputMensagem.value = "";

    if (bloquearMensagemTemporariamente) {
      bloquearInput();
    }

    const avatar = document.createElement("div");
    avatar.className = "avatar me-3";
    avatar.style.background = "#b1b1b1";
    avatar.innerHTML = "<span>A</span>";

    const divNomeTexto = document.createElement("div");
    divNomeTexto.className = "d-flex flex-column";

    const nome = document.createElement("h6");
    nome.className = "mb-0 text-muted";
    nome.textContent = "Anônima";

    const texto = document.createElement("p");
    texto.className = "small mb-0";
    texto.textContent = mensagem;

    divNomeTexto.append(nome);
    divNomeTexto.append(texto);

    const div = document.createElement("div");
    div.className = "d-flex align-items-center";
    div.appendChild(avatar);
    div.appendChild(divNomeTexto);

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(div);

    listaMensagens.appendChild(li);

    // Scroll automático
    var chatMessages = $(".chat-messages");
    chatMessages.scrollTop(chatMessages[0].scrollHeight);
  }
}

// Função de mostrar e ocultar o chat pelo botão
$("#ocultar-chat-btn").click(function () {
  var header = $(".chat-header");
  var body = $(".chat-body");
  var footer = $(".chat-footer");
  if (header.is(":visible") && body.is(":visible")) {
    header.slideUp();
    body.slideUp();
    footer.css({ "border-top": "0" });
    $(this).text("Mostrar chat");
  } else {
    header.slideDown();
    body.slideDown();
    footer.css({ "border-top": "var(--bs-card-border-width) solid var(--bs-card-border-color)" });
    $(this).text("Ocultar chat");
  }
});

// Inicia a função de adicionar mensagem manualmente do visitante do site
if (!bloquearChat) {
  // Adicionar função no botão de enviar mensagem ao chat
  botaoEnviar.addEventListener("click", () => {
    var mensagem = inputMensagem.value.trim();
    enviarMensagem(mensagem);
  });
  // Adicionar função no input de enviar mensagem ao chat
  inputMensagem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      var mensagem = inputMensagem.value.trim();
      enviarMensagem(mensagem);
    }
  });
} else {
  inputMensagem.disabled = true;
  botaoEnviar.style.display = "none";
  inputMensagem.setAttribute("placeholder", "O envio de mensagens está desativado.");
}
