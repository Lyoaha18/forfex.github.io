let userData = {}; // Объявляем объект для хранения данных пользователя

// Загрузка данных пользователя при загрузке страницы
fetch('user_data.json')
  .then(response => response.json())
  .then(data => {
    userData = data; // Сохраняем загруженные данные в переменной userData
    updateUI(); // Обновляем интерфейс после загрузки данных
  })
  .catch(error => {
    console.error('Ошибка загрузки данных:', error);
  });

// Сохранение данных пользователя
function saveUserData() {
  fetch('user_data.json', {
    method: 'PUT', // или 'POST'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Данные успешно сохранены:', data);
  })
  .catch(error => {
    console.error('Ошибка сохранения данных:', error);
  });
}

// Обновление интерфейса игры
function updateUI() {
  document.getElementById('coinCount').textContent = userData.coins;
}

// Инициализация кнопки клика
document.getElementById('clickButton').addEventListener('click', () => {
  userData.coins += 1; // Увеличиваем количество монет при клике
  saveUserData(); // Сохраняем данные пользователя
  updateUI(); // Обновляем интерфейс
});

// Инициализация кнопок улучшений
document.getElementById('upgradeSpeed').addEventListener('click', () => {
  if (userData.coins >= 10) {
    userData.coins -= 10;
    userData.upgrades.speed += 1;
    saveUserData();
    updateUI();
  } else {
    alert('Недостаточно монет для улучшения!');
  }
});

document.getElementById('upgradePower').addEventListener('click', () => {
  if (userData.coins >= 15) {
    userData.coins -= 15;
    userData.upgrades.power += 1;
    saveUserData();
    updateUI();
  } else {
    alert('Недостаточно монет для улучшения!');
  }
});

document.getElementById('upgradeArmor').addEventListener('click', () => {
  if (userData.coins >= 20) {
    userData.coins -= 20;
    userData.upgrades.armor += 1;
    saveUserData();
    updateUI();
  } else {
    alert('Недостаточно монет для улучшения!');
  }
});
