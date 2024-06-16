let coinCount = 0; // Переменная для хранения количества монеток

// Функция для обновления количества монеток на странице
function updateCoinCount() {
  document.getElementById('coinCount').textContent = coinCount;
}

// Обработчик клика по кнопке
document.getElementById('clickButton').addEventListener('click', () => {
  coinCount++; // Увеличиваем количество монеток при клике
  updateCoinCount(); // Обновляем отображение количества монеток
});
