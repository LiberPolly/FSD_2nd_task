import './dropdown-guests.css';
import forEach from 'lodash/forEach';
import nounDeclension from '../noun-declension/noun-declension';

const dropdownGuests = document.querySelector('.dropdown-guests');
const dropdownMessage = dropdownGuests.querySelector('.dropdown-button__message');
const currentCounters = dropdownGuests.querySelectorAll('.dropdown-counter');
const resetButton = dropdownGuests.querySelector('.dropdown-guests__reset');
const submitButton = dropdownGuests.querySelector('.dropdown-guests__submit');
const messageNouns = ['гость', 'гостя', 'гостей'];

// Функция, возвращающая суммированное значение всех счетчиков в дропдауне
function sumCounters(counters) {
  let totalValue = 0;
  forEach(counters, (counter) => {
    const value = +counter.querySelector('.dropdown-counter__value').textContent;
    totalValue += value;
  });
  return totalValue;
}

// Функция, активирующая кнопку reset при первом изменении значения счетчика
function activateResetButton(value, minValue) {
  if (value > minValue) {
    resetButton.classList.remove('dropdown-guests__reset_disable');
  }
}

// Обработка изменения значений счетчиков дропдауна
forEach(currentCounters, (counter) => {
  const minValue = +counter.getAttribute('data-min-value');

  counter.addEventListener('click', () => {
    // Новое значение счетчика при каждом клике
    const value = +counter.querySelector('.dropdown-counter__value').textContent;
    // Подсчет общей суммы счетчиков при каждом клике по отдельному счетчику
    const totalValue = sumCounters(currentCounters);
    // Активация кнопки reset
    activateResetButton(value, minValue);

    // Обновление сообщения в кнопке дропдауна в зависимости от общей суммы счетчиков
    if (totalValue === 0) {
      dropdownMessage.textContent = 'Сколько гостей';
    } else {
      const noun = nounDeclension(totalValue, ...messageNouns);
      dropdownMessage.textContent = `${totalValue} ${noun}`;
    }
  });
});

// Обработка клика по кнопке reset
resetButton.addEventListener('click', () => {
  forEach(currentCounters, ((counter) => {
    const valueElement = counter.querySelector('.dropdown-counter__value');
    const minValue = +counter.getAttribute('data-min-value');
    const minusButton = counter.querySelector('.dropdown-counter__button-minus');
    const plusButton = counter.querySelector('.dropdown-counter__button-plus');

    // Обнуление значений счетчиков
    valueElement.innerHTML = minValue;
    // Дезактивация кнопки reset
    resetButton.classList.add('dropdown-guests__reset_disable');
    // Установка дефолтного сообщения в кнопке дропдауна
    dropdownMessage.textContent = 'Сколько гостей';
    // Установка дефолтных стилей для кнопок +/- у счетчика
    minusButton.classList.add('dropdown-counter__button_disabled');
    plusButton.classList.remove('dropdown-counter__button_disabled');
  }));
});

// Обработка клика по кнопке submit
submitButton.addEventListener('click', () => {
  console.log('Sending data from the guest dropdown to server...');
});
