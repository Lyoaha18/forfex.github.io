let clickCount = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoclickerCost = 100;
let autoclickerCount = 0;

// Функция для обновления отображаемых значений
function updateDisplay() {
    document.getElementById('click-count').textContent = clickCount;
    document.getElementById('click-power').textContent = clickPower;
    document.getElementById('upgrade-cost').textContent = upgradeCost;
    document.getElementById('autoclicker-cost').textContent = autoclickerCost;
    document.getElementById('autoclicker-count').textContent = autoclickerCount;
}

document.getElementById('click-button').addEventListener('click', () => {
    clickCount += clickPower;
    updateDisplay();
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        clickPower += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateDisplay();
    } else {
        alert('Not enough clicks to upgrade!');
    }
});

document.getElementById('autoclicker-button').addEventListener('click', () => {
    if (clickCount >= autoclickerCost) {
        clickCount -= autoclickerCost;
        autoclickerCount += 1;
        autoclickerCost = Math.floor(autoclickerCost * 10);
        updateDisplay();
    } else {
        alert('Not enough clicks to buy autoclicker!');
    }
});

// Устанавливаем интервал для автокликеров
setInterval(() => {
    if (autoclickerCount > 0) {
        clickCount += autoclickerCount;
        updateDisplay();
    }
}, 1000);

// Изначально обновляем отображение
updateDisplay();
