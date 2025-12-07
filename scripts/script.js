const gridArg = window.electronAPI.args.find(arg => arg.startsWith('--grid='));
const gridNumber = gridArg ? parseInt(gridArg.split('=')[1], 10) : 2;


// removeBoxes();
generateGrid(gridNumber);
changeColor();

function generateGrid(gridNumber) {
  const container = document.querySelector(".container");
  const grid = gridNumber * gridNumber;
  const boxSize = container.clientWidth / gridNumber;

  for (let i = 0; i < grid; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = "transparent";
    container.appendChild(box);
  }
}

function changeColor() {
  const divs = document.querySelectorAll(".container div");

  divs.forEach(div => {
    div.addEventListener("mouseover", () => {
      const color = window.getComputedStyle(div).backgroundColor;

      if (color === "rgba(0, 0, 0, 0)") {
        div.style.backgroundColor = getNewColor();
        div.style.opacity = 0.1;
      } else {
        let currentOpacity = parseFloat(div.style.opacity) || 0;
        if (currentOpacity < 1) {
          div.style.opacity = currentOpacity + 0.1;
        }
      }
    });
  });
}

// function removeBoxes() {
//   const divs = document.querySelectorAll(".container div");
//   divs.forEach(div => div.remove());
// }

function getNewColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}