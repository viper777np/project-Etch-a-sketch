const container = document.querySelector("#container");

const button = document.querySelector("#button");

const reset = document.querySelector("#reset");

button.addEventListener("click", () => {
  const N = Number(prompt("enter number of sq. per side for grid"));

  if (!N || N > 100) return;
  const sqSize = 960 / N;
  for (let i = 0; i < N * N; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    square.style.width = `${sqSize}px`;
    square.style.aspectRatio = 1;

    square.addEventListener("mouseover", (e) => {
      const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
      e.target.style.backgroundColor = randomColor;
    });
  }
});

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

reset.addEventListener("click", () => {
  container.innerHTML = "";
});
