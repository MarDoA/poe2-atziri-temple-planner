// script.js
const board = document.getElementById("board");

// Generate 9x9 cells
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    const content = document.createElement("span")
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.appendChild(content)

    board.appendChild(cell);
  }
}