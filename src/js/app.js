const board = document.getElementById('board');
let cells;

for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    cells.push(cell);
}

const character = document.createElement('img');  
        character.src = "img/goblin.png"; 
            
class Character {
  constructor(elem) {
    this.cell = elem.querySelectorAll(".grid-cell");
    this.icon = elem.querySelector(".icon");
  }

  getRandomPosition() {
    let previous = 0;
    let i = 0;

    setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.cell.length - 1));
      }

      previous = i;
      this.cell[i].appendChild(this.icon);
    }, 1000);
  }
}        