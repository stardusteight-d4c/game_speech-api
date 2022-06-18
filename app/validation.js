function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;
  if (notAnumber(numero)) {
    elementoChute.innerHTML += "<div>O número é inválido</div>";
  } else if (numeroForaDoIntervalo(numero)) {
    elementoChute.innerHTML += "<div>O número está fora do intervalo</div>";
  } else if (verificaSeOChuteEhCorreto(numero)) {
    return (document.body.innerHTML = `
    <h2>Parabéns, você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">
      Jogar novamente
    </button>
    `);
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>
      O número secreto é menor<i class="ri-arrow-down-circle-fill"></i>
    </div>`;
  } else {
    elementoChute.innerHTML += `
    <div>
      O número secreto é maior<i class="ri-arrow-up-circle-fill"></i>
    </div>`;
  }
}

function numeroForaDoIntervalo(numero) {
  return numero > maiorValor || numero < menorValor;
}

function notAnumber(numero) {
  return isNaN(numero);
}

function verificaSeOChuteEhCorreto(chute) {
  return chute === numeroSecreto;
}

document.body.addEventListener("click", (event) => {
  if (event.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
