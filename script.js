document.getElementById('start').addEventListener('click', startGame);

function startGame() {
    const betAmount = document.getElementById('bet').value;
    const numberOfMines = document.getElementById('mines').value;
    const gameBoard = document.getElementById('game');
    gameBoard.innerHTML = '';
    const cells = [];

    // Create cells
    for (let i = 0; i < 25; i++) {  // 5x5 grid
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => revealCell(cell, i));
        gameBoard.appendChild(cell);
        cells.push(cell);
    }

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < numberOfMines) {
        const randomIndex = Math.floor(Math.random() * 25);
        if (!cells[randomIndex].classList.contains('mine')) {
            cells[randomIndex].classList.add('mine');
            minesPlaced++;
        }
    }

    document.getElementById('result').textContent = `Ставка: ${betAmount} ₽`;
}

function revealCell(cell, index) {
    if (cell.classList.contains('revealed')) return;
    cell.classList.add('revealed');
    if (cell.classList.contains('mine')) {
        cell.innerHTML = '<img src="imgame/mina.png" alt="Mine">';
        document.getElementById('result').textContent = 'Вы проиграли!';
    } else {
        cell.innerHTML = '<img src="imgame/almaz.png" alt="Gem">';
    }
}

function updateBetValue(value) {
    document.getElementById('betValue').textContent = `${value},00 ₽`;
}

function updateMinesValue(value) {
    document.getElementById('minesValue').textContent = value;
}
