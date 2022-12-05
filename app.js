document.addEventListener("DOMContentLoaded", function () {
  //Raden ovanför ser till att dokumentet har laddat allt innan javascriptet kan utföras.
  //Här skriver ni koden för er applikation.

  const grid = document.querySelector(".grid");

  let size = 5;
  let plupp = 50;
  let color = [
    "purple",
    "darkblue",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  grid.style.width = plupp * size + "px";
  grid.style.height = plupp * size + "px";

  for (let x = 0; x < size * size; x++) {
    const dave = document.createElement("div");
    dave.classList.add("plupp");
    dave.classList.add("center");
    dave.setAttribute("id", x);

    dave.addEventListener("click", bob);
    grid.appendChild(dave);
  }

  function bob() {
    rand = Math.floor(Math.random() * color.length);
    this.style.background = color[rand];

    if (this.innerHTML === "") {
      this.innerHTML = 1;
    } else {
      this.innerHTML++;
    }
  }
});
