const music = document.getElementById("music");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const cover = document.getElementById("cover");

let isPlaying = false;
let candleBlown = false;

function openStory() {
  cover.classList.add("hide");

  setTimeout(() => {
    cover.style.display = "none";
  }, 1000);
}

function toggleMusic() {
  if (!isPlaying) {
    music.play();
    musicIcon.innerText = "❚❚";
    musicText.innerText = "Playing";
    isPlaying = true;
  } else {
    music.pause();
    musicIcon.innerText = "▶";
    musicText.innerText = "Our Song";
    isPlaying = false;
  }
}

function blowCandle() {
  const cakeImage = document.getElementById("cakeImage");
  const cakeText = document.getElementById("cakeText");
  const cakeCard = document.querySelector(".cake-card");

  if (!candleBlown) {
    cakeImage.src = "images/kue-mati.jpg";
    cakeText.innerText = "Harapan dan do'a kamu sudah aku aminkan yaa May. Semoga semua do'a baikmu bisa menemukan jalan terbaiknya Mayy.";
    cakeCard.classList.add("blow");
    createMiniHearts();
    candleBlown = true;
  } else {
    cakeImage.src = "images/kue-nyala.jpg";
    cakeText.innerText = "Lilinnya masih nyala nih May. Tutup mata kamu sebentar yaa, lalu ucapkan harapan dan doa terbaik buat diri kamu sendiri May.";
    cakeCard.classList.remove("blow");
    candleBlown = false;
  }
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function createPetal() {
  const petals = document.getElementById("petals");
  const petal = document.createElement("div");

  petal.classList.add("petal");
  petal.innerText = Math.random() > 0.5 ? "🌸" : "♡";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 5 + 6 + "s";
  petal.style.fontSize = Math.random() * 10 + 15 + "px";

  petals.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);
}

setInterval(createPetal, 650);

function createMiniHearts() {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const petals = document.getElementById("petals");
      const heart = document.createElement("div");

      heart.classList.add("petal");
      heart.innerText = "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = "4s";
      heart.style.fontSize = Math.random() * 12 + 18 + "px";

      petals.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4500);
    }, i * 80);
  }
}