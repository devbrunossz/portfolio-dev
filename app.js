const btn = document.querySelector(".btn");

const front = document.getElementById("frontend");
const back = document.getElementById("backend");

btn.addEventListener("click", function () {

  front.classList.toggle("hidden");
  back.classList.toggle("hidden");

  const isFrontHidden = front.classList.contains("hidden");

  btn.textContent = isFrontHidden
    ? "Ver Front-End"
    : "Mudar para Back-End";

});