const carrossel = document.getElementById('carrossel');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

let index = 0;
const totalItems = document.querySelectorAll('.projeto-item').length;

btnLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarrossel();
    }
});

btnRight.addEventListener('click', () => {
    if (index < totalItems - 1) {
        index++;
        updateCarrossel();
    }
});

function updateCarrossel() {
    const translateX = index * -100;
    carrossel.style.transform = `translateX(${translateX}%)`;
}

const texts = ["Back-end", "Front-end"];
const dynamicText = document.getElementById("dynamic-text");
const cursor = document.getElementById("cursor");

function typeText(text, i, callback) {
  if (i < text.length) {
    dynamicText.textContent += text.charAt(i);
    setTimeout(() => typeText(text, i + 1, callback), 100);
  } else {
    setTimeout(callback, 1000); // Espera 1 segundo antes de começar a apagar
  }
}

function eraseText(text, i, callback) {
  if (i >= 0) {
    dynamicText.textContent = text.substring(0, i);
    setTimeout(() => eraseText(text, i - 1, callback), 100);
  } else {
    setTimeout(callback, 500); // Espera 0.5 segundos antes de mudar o texto
  }
}

function changeText() {
  const currentText = texts[index];
  index = (index + 1) % texts.length; // Alterna entre 0 e 1
  eraseText(currentText, currentText.length - 1, () => typeText(texts[index], 0, changeText)); // Apaga e então escreve a nova palavra
}

// Começa a animação com a primeira palavra
typeText(texts[index], 0, () => {
  // Uma vez que a primeira palavra foi digitada, inicia a troca
  changeText();
});

function trocarConteudo(tipo) {
  const imagem = document.getElementById('imagem-card');
  const botoes = document.querySelectorAll('.botao-sobre');

  // Atualizar imagem conforme o botão clicado
  if (tipo === 'resumo') {
    imagem.src = 'assets/img/demon1.png'; // Coloque o caminho da imagem do resumo
  } else if (tipo === 'objetivo') {
    imagem.src = 'assets/img/demon2.png'; // Coloque o caminho da imagem do objetivo
  } else if (tipo === 'hobbies') {
    imagem.src = 'assets/img/demon3.png'; // Coloque o caminho da imagem dos hobbies
  }

  // Atualizar estilos dos botões
  botoes.forEach(botao => botao.classList.remove('ativo'));
  const botaoAtivo = Array.from(botoes).find(btn => btn.textContent.toLowerCase() === tipo);
  if (botaoAtivo) botaoAtivo.classList.add('ativo');
}
