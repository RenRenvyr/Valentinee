const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const bgMusic = document.getElementById("bgMusic");


yesBtn.addEventListener("click", () => {
questionBox.classList.add("hidden");
messageBox.classList.remove("hidden");
document.body.style.background = "linear-gradient(135deg, #a18cd1, #fbc2eb)";
bgMusic.play();
startHearts();
});


noBtn.addEventListener("mouseenter", () => {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.pointerEvents = "none";

  setTimeout(() => {
    noBtn.style.pointerEvents = "auto";
  }, 300);
});

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  noBtn.dispatchEvent(new Event("mouseenter"));
});


function startHearts() {
setInterval(() => {
const heart = document.createElement("img");
heart.src = "assets/heart.jpg";
heart.className = "heart";
heart.style.left = Math.random() * window.innerWidth + "px";
document.body.appendChild(heart);


setTimeout(() => heart.remove(), 6000);
}, 300);
}