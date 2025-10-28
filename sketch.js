const container = document.querySelector("#container");
for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    const element = document.createElement("div");
    element.classList.add("child");
    container.append(element);
  }
}
