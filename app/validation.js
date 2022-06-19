const win = new Audio("sounds/win.mp3");

function analisarTranscricao(transcript) {
  const numero = parseInt(transcript);

  transcricaoSerNumero(numero);
  numeroForaDoIntervalo(numero);
  darDicaDeSeta(numero);
  transcricaoIgualAoNumeroSecreto(numero);
}

let transcricaoSerNumero = (numero) => {
  if (isNaN(numero)) {
    return (mensagem.innerHTML += "<div>Por favor, fale um número!</div>");
  }
};

let numeroForaDoIntervalo = (numero) => {
  if (numero > maiorValor || numero < menorValor) {
    return (mensagem.innerHTML += "<div>O número está fora do intervalo</div>");
  }
};

let darDicaDeSeta = (numero) => {
  if (numero > numeroSecreto) {
    return (mensagem.innerHTML += "<i class='ri-arrow-down-s-line'></i>");
  } else {
    return (mensagem.innerHTML += "<i class='ri-arrow-up-s-line'></i>");
  }
};

let transcricaoIgualAoNumeroSecreto = (numero) => {
  if (numero === numeroSecreto) {
    win.play();
    return (document.body.innerHTML = `
    <h2>Parabéns, você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">
      Jogar novamente
    </button>
    `);
  }
};

document.body.addEventListener("click", (event) => {
  if (event.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
