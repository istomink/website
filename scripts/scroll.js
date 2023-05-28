// Отображение/скрытие кнопки "Наверх"
window.onscroll = function() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };
  
  // Плавная прокрутка при клике на кнопку "Наверх"
  document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  