// inicio slide banner principal

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

// fim slide banner principal

// Inicio Logo Dark and Light

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.ball');
    const logo = document.getElementById('logo');
    
    // Defina um estado inicial
    let isAlternate = false;

    button.addEventListener('click', function () {
        // Alterna entre as imagens com base no estado atual
        if (isAlternate) {
            logo.src = 'assets/logo.png';
        } else {
            logo.src = 'assets/logo-light.png';
        }

        // Inverte o estado
        isAlternate = !isAlternate;

        // Alterna a classe 'light-mode' no body, se necessário
        document.body.classList.toggle('light-mode');
    });
});

// Fim Logo Dark and Light

// inicio button DARK and Light

document.querySelector('.ball').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('light');
});

// Fim button DARK and Light


// Inicio Carousel

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

