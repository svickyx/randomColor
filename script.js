const blocks = document.querySelectorAll("input");
const btn = document.querySelector("button");

let rgbColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const changeColor = (e) => {
  e.target.style.backgroundColor = rgbColor();
  e.target.style.color = rgbColor();
};

const reset = () => {
  window.location.reload();
};

for (let block of blocks) {
  block.addEventListener("click", changeColor);
}

btn.addEventListener("click", reset);
