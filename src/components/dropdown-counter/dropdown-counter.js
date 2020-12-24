import './dropdown-counter.css';
import forEach from 'lodash/forEach';

// Все счетчики на странице
const dropdownCounters = document.querySelectorAll('.dropdown-counter');

// Функция, меняющая стиль у кнопки в зависимости от того активна она или нет
function disableButton(button, value, compareValue) {
  const currentButton = button;
  const currentValue = value;
  const currentCompare = compareValue;
  if (currentValue === +currentCompare) {
    currentButton.classList.add('dropdown-counter__button_disabled');
  } else {
    currentButton.classList.remove('dropdown-counter__button_disabled');
  }
}

// Инкремент для кнопки плюс, если значение не превышает максимальное
function increase(value, maxValue, maxButton) {
  const valueElement = value;
  const max = +maxValue;
  const button = maxButton;
  let currentValue = +valueElement.textContent;
  if (max > currentValue) {
    currentValue += 1;
    valueElement.innerHTML = currentValue;
    // Если значение равно максимальному кнопка становится неактивна
    disableButton(button, currentValue, max);
  }
}

// Декремент для кнопки минус, если значение не меньше минимального
function decrease(value, minValue, minButton) {
  const valueElement = value;
  const min = +minValue;
  const button = minButton;
  let currentValue = +valueElement.textContent;

  if (min < currentValue) {
    currentValue -= 1;
    valueElement.innerHTML = currentValue;
    // Если значение равно минимальному кнопка становится неактивна
    disableButton(button, currentValue, min);
  }
}

// Обработчики для каждого отдельного счетчика
forEach(dropdownCounters, ((counter) => {
  const plus = counter.querySelector('.dropdown-counter__button-plus');
  const minus = counter.querySelector('.dropdown-counter__button-minus');
  const value = counter.querySelector('.dropdown-counter__value');
  const minValue = counter.getAttribute('data-min-value');
  const maxValue = counter.getAttribute('data-max-value');

  // Проверка на max/min значение при загрузке счетчика
  disableButton(minus, +value.textContent, minValue);
  disableButton(plus, +value.textContent, maxValue);

  // Увеличение значения и проверка активности кнопки по клику
  plus.addEventListener('click', () => {
    increase(value, maxValue, plus);
    disableButton(minus, +value.textContent, minValue);
  });

  // Уменьшение значения и проверка активности кнопки по клику
  minus.addEventListener('click', () => {
    decrease(value, minValue, minus);
    disableButton(plus, +value.textContent, maxValue);
  });
}));
