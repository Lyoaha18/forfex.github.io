document.getElementById('start').addEventListener('click', startGame);

function startGame() {
    const betAmount = document.getElementById('bet').value;
    const numberOfMines = document.getElementById('mines').value;
    const gameBoard = document.getElementById('game');
    gameBoard.innerHTML = '';
    const cells = [];

    // Create cells
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => revealCell(cell, i));
        gameBoard.appendChild(cell);
        cells.push(cell);
    }

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < numberOfMines) {
        const randomIndex = Math.floor(Math.random() * 100);
        if (!cells[randomIndex].classList.contains('mine')) {
            cells[randomIndex].classList.add('mine');
            minesPlaced++;
        }
    }

    document.getElementById('result').textContent = `Bet Amount: ${betAmount}`;
}

function revealCell(cell, index) {
    if (cell.classList.contains('revealed')) return;
    cell.classList.add('revealed');
    if (cell.classList.contains('mine')) {
        document.getElementById('result').textContent = 'You lost!';
    } else {
        cell.textContent = countAdjacentMines(index);
    }
}

function countAdjacentMines(index) {
    const adjacentIndices = [
        index - 11, index - 10, index - 9,
        index - 1,             index + 1,
        index + 9,  index + 10, index + 11
    ];
    return adjacentIndices.reduce((count, i) => {
        return count + (document.querySelectorAll('.cell')[i]?.classList.contains('mine') ? 1 : 0);
    }, 0);
}
