// JavaScript для модального окна
document.addEventListener('DOMContentLoaded', function() {
    const purchaseBtn = document.getElementById('purchaseBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    purchaseBtn.addEventListener('click', function() {
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Прозрачный черный фон
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
