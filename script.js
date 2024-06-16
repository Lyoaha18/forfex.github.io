let balance = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoclickerCost = 100;
let autoclickerCount = 0;
let achievementUnlocked = false;

// Функция для обновления отображаемых значений
function updateDisplay() {
    document.getElementById('click-count').textContent = balance;
    document.getElementById('click-power').textContent = clickPower;
    document.getElementById('upgrade-cost').textContent = upgradeCost;
    document.getElementById('autoclicker-cost').textContent = autoclickerCost;
    document.getElementById('autoclicker-count').textContent = autoclickerCount;
}

// Функция для проверки достижений
function checkAchievements() {
    if (balance >= 1000 && !achievementUnlocked) {
        const achievementBox = document.getElementById('achievement-box');
        const newAchievement = document.createElement('div');
        newAchievement.classList.add('achievement');
        newAchievement.textContent = 'НОВОЕ ДОСТИЖЕНИЕ: ЕБАТЬ ТЫ КЛИКОДОЛБИК НАКЛИКАЛ 1000 раз!';
        achievementBox.appendChild(newAchievement);
        achievementUnlocked = true;
    }
}

// Функция для создания и анимации маленькой монетки
function createFallingCoin(x, y) {
    const fallingCoin = document.createElement('img');
    fallingCoin.src = 'images/coin.png';
    fallingCoin.classList.add('falling-coin');
    fallingCoin.style.left = `${x}px`;
    fallingCoin.style.top = `${y}px`;
    document.getElementById('falling-coins-container').appendChild(fallingCoin);

    // Удаляем монетку после завершения анимации
    fallingCoin.addEventListener('animationend', () => {
        fallingCoin.remove();
    });
}

document.getElementById('click-button').addEventListener('click', (event) => {
    balance += clickPower;
    updateDisplay();
    checkAchievements();
    // Создаем и анимируем маленькую монетку при нажатии
    const x = event.clientX;
    const y = event.clientY;
    createFallingCoin(x, y);
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    if (balance >= upgradeCost) {
        balance -= upgradeCost;
        clickPower += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateDisplay();
        saveProgress(); // Сохраняем прогресс после каждого обновления
    } else {
        alert('Not enough balance to upgrade!');
    }
});

document.getElementById('autoclicker-button').addEventListener('click', () => {
    if (balance >= autoclickerCost) {
        balance -= autoclickerCost;
        autoclickerCount += 1;
        autoclickerCost *= 10;
        updateDisplay();
        saveProgress(); // Сохраняем прогресс после каждого обновления
    } else {
        alert('Not enough balance to buy autoclicker!');
    }
});

// Устанавливаем интервал для автокликеров
setInterval(() => {
    if (autoclickerCount > 0) {
        balance += autoclickerCount;
        updateDisplay();
        checkAchievements();
        saveProgress(); // Сохраняем прогресс после каждого обновления
    }
}, 1000);

// Функция для сохранения прогресса игры
function saveProgress() {
    // Создаем объект XMLHttpRequest для отправки AJAX-запроса
    var xhr = new XMLHttpRequest();
    // Устанавливаем метод и URL-адрес запроса
    xhr.open("POST", "save_progress.php", true);
    // Устанавливаем заголовок Content-Type
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // Создаем строку данных для отправки
    var data = "balance=" + balance +
               "&clickPower=" + clickPower +
               "&autoclickerCount=" + autoclickerCount;
    // Отправляем запрос с данными
    xhr.send(data);
}
