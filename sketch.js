const container = document.querySelector("#container");
for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    const element = document.createElement("div");
    element.classList.add("child");
    container.append(element);
  }
}

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

container.addEventListener("mouseover", (e) => {
  const rndClr = `rgb(${random(255)} , ${random(255)} , ${random(255)})`;
  e.target.style.backgroundColor = rndClr;
});
