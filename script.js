let clickCount = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoclickerCost = 100;
let autoclickerCount = 0;
let achievementUnlocked = false;

// Функция для обновления отображаемых значений
function updateDisplay() {
    document.getElementById('click-count').textContent = clickCount;
    document.getElementById('click-power').textContent = clickPower;
    document.getElementById('upgrade-cost').textContent = upgradeCost;
    document.getElementById('autoclicker-cost').textContent = autoclickerCost;
    document.getElementById('autoclicker-count').textContent = autoclickerCount;
}

// Функция для проверки достижений
function checkAchievements() {
    if (clickCount >= 1000 && !achievementUnlocked) {
        const achievementBox = document.getElementById('achievement-box');
        const newAchievement = document.createElement('div');
        newAchievement.classList.add('achievement');
        newAchievement.textContent = 'НОВОЕ ДОСТИЖЕНИЕ: ЕБАТЬ ТЫ КЛИКОДОЛБИК НАКЛИКАЛ 1000 раз!';
        achievementBox.appendChild(newAchievement);
        achievementUnlocked = true;
    }
}

// Функция для создания падающей монетки
function createCoin() {
    console.log('Creating coin...');
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.innerHTML = '<img src="images/coin.png" alt="Coin">';
    document.getElementById('falling-coins-container').appendChild(coin);
    setTimeout(() => {
        coin.style.top = '100%';
    }, 100);
    setTimeout(() => {
        coin.remove();
    }, 2000);
}

// Обработчик клика по монетке
document.getElementById('click-button').addEventListener('click', () => {
    console.log('Clicking button...');
    clickCount += clickPower;
    updateDisplay();
    checkAchievements();
    createCoin();
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    console.log('Upgrading...');
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
    console.log('Buying autoclicker...');
    if (clickCount >= autoclickerCost) {
        clickCount -= autoclickerCost;
        autoclickerCount += 1;
        autoclickerCost *= 10;
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
        checkAchievements();
        createCoin();
    }
}, 1000);

// Изначально обновляем отображение
updateDisplay();
