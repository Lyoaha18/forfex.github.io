let coinCount = 0; // Переменная для хранения количества монеток
const userDataFile = 'user_data.json'; // Путь к JSON файлу

// Функция для обновления количества монеток на странице
function updateCoinCount() {
  document.getElementById('coinCount').textContent = coinCount;
  saveDataToJson(); // Сохраняем данные в JSON файл при каждом обновлении
}

// Функция для сохранения данных в JSON файл
function saveDataToJson() {
  fetch(userDataFile, {
    method: 'PUT', // Используем метод PUT для обновления файла
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ coins: coinCount }), // Сохраняем только количество монеток
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сохранения данных');
    }
    console.log('Данные успешно сохранены в JSON файл');
  })
  .catch(error => {
    console.error('Ошибка сохранения данных в JSON файл:', error);
  });
}

// Функция для загрузки данных из JSON файла
function loadDataFromJson() {
  fetch(userDataFile)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      return response.json();
    })
    .then(data => {
      if (data.coins !== undefined) {
        coinCount = data.coins;
        updateCoinCount(); // Обновляем отображение после загрузки данных
      }
    })
    .catch(error => {
      console.error('Ошибка загрузки данных из JSON файла:', error);
    });
}

// Загрузка сохранённых данных при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromJson();
});

// Обработчик клика по кнопке
document.getElementById('clickButton').addEventListener('click', () => {
  coinCount++; // Увеличиваем количество монеток при клике
  updateCoinCount(); // Обновляем отображение количества монеток
});
