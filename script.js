// Ваши стили CSS
const styles = `
/* Стили для элемента достижения */
.achievement {
    background-color: #1e1e1e; /* Темный фон */
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    color: #ffffff; /* Белый текст для достижений */
    font-weight: bold; /* Жирный шрифт для текста достижений */
}

/* Стили для контейнера */
.container {
    text-align: center;
    background: rgba(0, 0, 0, 0); /* Прозрачный фон */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: #ffffff; /* Белый текст */
}

/* Стили для кнопок */
button {
    padding: 10px 20px; /* Размеры кнопок */
    font-size: 16px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff; /* Белый текст */
}

button#click-button {
    background-color: #007bff;
}

button#upgrade-button {
    background-color: #28a745;
}

button#autoclicker-button {
    background-color: #ff5733;
}
`;

// Создаем элемент стиля и добавляем CSS
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// JavaScript код
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

document.getElementById('click-button').addEventListener('click', () => {
    clickCount += clickPower;
    updateDisplay();
    checkAchievements();
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
    }
}, 1000);

/* Стили для анимации мигания кнопок */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

button:hover {
    animation: pulse 0.5s infinite alternate;
}
