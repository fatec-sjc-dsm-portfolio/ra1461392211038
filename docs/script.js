// Navbar
const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

// Texto dinamico
const texts = ["Fullstack", "Back-end", "Front-end"];
const dynamicText = document.getElementById("dynamic-text");
const cursor = document.getElementById("cursor");

let index = 0;

function typeText(text, i, callback) {
  if (i < text.length) {
    dynamicText.textContent += text.charAt(i);
    setTimeout(() => typeText(text, i + 1, callback), 100);
  } else {
    setTimeout(callback, 1000);
  }
}

function eraseText(text, i, callback) {
  if (i >= 0) {
    dynamicText.textContent = text.substring(0, i);
    setTimeout(() => eraseText(text, i - 1, callback), 100);
  } else {
    setTimeout(callback, 500);
  }
}

function changeText() {
  const currentText = texts[index];
  index = (index + 1) % texts.length;
  eraseText(currentText, currentText.length - 1, () => typeText(texts[index], 0, changeText));
}

typeText(texts[index], 0, () => {
  changeText();
});
