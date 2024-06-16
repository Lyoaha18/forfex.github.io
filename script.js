let coinCount = 0; // Переменная для хранения количества монеток

// Функция для обновления количества монеток на странице
function updateCoinCount() {
  document.getElementById('coinCount').textContent = coinCount;
  saveDataToLocal(); // Сохраняем данные в локальное хранилище при каждом обновлении
}

// Функция для сохранения данных в локальное хранилище
function saveDataToLocal() {
  localStorage.setItem('coinCount', coinCount);
}

// Функция для загрузки данных из локального хранилища
function loadDataFromLocal() {
  let savedCoinCount = localStorage.getItem('coinCount');
  if (savedCoinCount !== null) {
    coinCount = parseInt(savedCoinCount);
    updateCoinCount(); // Обновляем отображение после загрузки данных
  }
}

// Загрузка сохранённых данных при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromLocal();
});

// Обработчик клика по кнопке
document.getElementById('clickButton').addEventListener('click', () => {
  coinCount++; // Увеличиваем количество монеток при клике
  updateCoinCount(); // Обновляем отображение количества монеток
});
