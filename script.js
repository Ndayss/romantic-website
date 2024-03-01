const btnMusik = document.getElementById("btn-musik");
const musik = document.getElementById("musik");

btnMusik.addEventListener("click", () => {
  musik.classList.toggle("hidden");
});

const btnPesan = document.getElementById("btn-pesan");
const pesan = document.getElementById("pesan");

btnPesan.addEventListener("click", () => {
  pesan.classList.toggle("hidden");
});

const btnKenangan = document.getElementById("btn-kenangan");
const kenangan = document.getElementById("kenangan");

btnKenangan.addEventListener("click", () => {
  kenangan.classList.toggle("hidden");
});

