const mensagem = document.getElementById("mensagem");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
  transcript = event.results[0][0].transcript;
  exibirTranscricaoNaTela(transcript);
  analisarTranscricao(transcript);
}

function exibirTranscricaoNaTela(transcript) {
  mensagem.innerHTML = `
    <span class="box">${transcript}</span>
    `;
}

recognition.addEventListener("end", () => recognition.start());
