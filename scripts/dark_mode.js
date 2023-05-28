// Находим нужную кнопку
const btn = document.querySelector('.btn-toggle');

// Прослушиваем нажатие на кнопку
btn.addEventListener('click', function() {
  // Переключаем (добавляем/удаляем) класс .dark-theme
  document.body.classList.toggle('dark-theme');  
})
