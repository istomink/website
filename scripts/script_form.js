// Обработчик клика на кнопке "Купить"
const buyButtons = document.getElementsByClassName('buy-button');
for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function() {
    showBuyForm();
  });
}

/*
// Отображение формы покупки
function showBuyForm() {
  const formHtml = `
    <div id="buyForm" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
      <form style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 20px; border-radius: 5px;">
        <label for="quantity">Количество:</label>
        <input type="number" id="quantity" min="1" required><br><br>
        <label for="color">Цвет:</label><br>
        <input type="radio" id="color1" name="color" required>
        <label for="color1">Серебристый</label><br>
        <input type="radio" id="color2" name="color" required>
        <label for="color2">Черный</label><br>
        <input type="radio" id="color3" name="color" required>
        <label for="color3">Белый</label><br><br>
        <label for="comment">Комментарий:</label><br>
        <textarea id="comment" maxlength="2000" required></textarea><br><br>
        <button class="buy-button">Купить</button>
        <button class="buy-button" onclick="hideBuyForm()">Закрыть</button>
      </form>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', formHtml);
  document.getElementById('quantity').focus();
}*/

function showBuyForm() {
  const formHtml = `
    <div id="buyForm" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
      <form style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 20px; border-radius: 5px;">
        <label for="quantity" style="margin-bottom: 10px;">Количество:</label>
        <input type="number" id="quantity" min="1" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 3px; margin-bottom: 10px;"><br>
        <label for="color" style="margin-bottom: 10px;">Цвет:</label><br>
        <input type="radio" id="color1" name="color" required>
        <label for="color1" style="margin-right: 10px;">Серебристый</label><br>
        <input type="radio" id="color2" name="color" required>
        <label for="color2" style="margin-right: 10px;">Черный</label><br>
        <input type="radio" id="color3" name="color" required>
        <label for="color3" style="margin-right: 10px;">Белый</label><br><br>
        <label for="comment" style="margin-bottom: 10px;">Комментарий:</label><br>
        <textarea id="comment" maxlength="2000" required style="width: 100%; height: 80px; padding: 8px; border: 1px solid #ccc; border-radius: 3px; margin-bottom: 10px;"></textarea><br>
        <button class="buy-button">Купить</button>
        <button class="buy-button" onclick="hideBuyForm()" >Закрыть</button>
      </form>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', formHtml);
  document.getElementById('quantity').focus();
}


// Скрытие формы покупки
function hideBuyForm() {
  const buyForm = document.getElementById('buyForm');
  if (buyForm) {
    buyForm.remove();
  }
}

// Обработчик отправки формы
document.addEventListener('submit', function(e) {
  if (e.target && e.target.matches('form')) {
    e.preventDefault();
    alert('Спасибо за покупку!');
    hideBuyForm();
  }
});







//заполнение дат
const dateArray = ['01.01.2023', '3.26.2023', '2.03.2023', '4.29.2022', '6.13.2022', '12.12.2021', 
'1.01.2023', '3.26.2023', '2.03.2023', '4.29.2022', '6.13.2022', '12.12.2021', '1.01.2023',
'3.26.2023', '2.03.2023', '4.29.2022', '6.13.2022', '12.12.2021', '01.01.2023', '3.26.2023',
'2.03.2023', '4.29.2022', '6.13.2022', '12.12.2021', '4.29.2022', '6.13.2022', '12.12.2021',
'4.03.2023', '4.12.2022', '8.27.2020', '12.6.2021', '4.9.2022', '9.18.2022', '2.12.2021',
'1.01.2023', '3.26.2023'];

for (let i = 0; i < dateArray.length; i++) {
  const date = dateArray[i];
  const dateElement = document.getElementById('date' + (i + 1));
  dateElement.textContent = getDayInfo(date);
}

function getDayInfo(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const weekOfMonth = getWeekNumber(date);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek}, ${weekOfMonth} неделя ${month} ${year} года`;
}

function getWeekNumber(date) {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
  const offset = firstDayOfWeek > 4 ? 7 - firstDayOfWeek + 1 : 1;

  return Math.ceil((date.getDate() + firstDayOfWeek - offset) / 7);
}