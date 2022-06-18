const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

const menorValor = 0;
const maiorValor = 1000;

const gerarNumeroAleatorio = () => {
  return parseInt(Math.random() * (maiorValor + 1));
};

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

const numeroSecreto = gerarNumeroAleatorio();
