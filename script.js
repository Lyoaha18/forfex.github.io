const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Инициализация корабля
const ship = {
    x: 50,
    y: canvas.height / 2,
    radius: 20,
    color: 'white'
};

// Функция для отрисовки корабля
function drawShip() {
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.radius, 0, Math.PI * 2);
    ctx.fillStyle = ship.color;
    ctx.fill();
    ctx.closePath();
}

// Функция для обновления игрового экрана
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    requestAnimationFrame(update);
}

// Обработчик нажатия клавиш для управления кораблем
document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 37: // Left arrow
            ship.x -= 5;
            break;
        case 39: // Right arrow
            ship.x += 5;
            break;
        case 38: // Up arrow
            ship.y -= 5;
            break;
        case 40: // Down arrow
            ship.y += 5;
            break;
    }
});

update();
