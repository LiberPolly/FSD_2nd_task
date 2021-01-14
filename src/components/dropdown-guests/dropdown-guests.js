import './dropdown-guests.css';
import forEach from 'lodash/forEach';
import nounDeclension from '../noun-declension/noun-declension';

const dropdownGuests = document.querySelector('.dropdown-guests__wrapper');
const dropdownMessage = dropdownGuests.querySelector('.dropdown-button__message');
const currentCounters = dropdownGuests.querySelectorAll('.dropdown-counter');
const resetButton = dropdownGuests.querySelector('.dropdown-guests__reset');
const submitButton = dropdownGuests.querySelector('.dropdown-guests__submit');
const messageGuests = ['гость', 'гостя', 'гостей'];
const messageNewborns = ['младенец', 'младенца', 'младенцев'];

// Функция, возвращающая суммированное значение всех счетчиков в дропдауне
function sumCounters(counters) {
  let guestsValue = 0;
  let newbornsValue = 0;

  forEach(counters, (counter, index) => {
    const value = +counter.querySelector('.dropdown-counter__value').textContent;
    // Отдельно все гости, отдельно младенцы (младенцы - последний counter в коллекции)
    if (index !== (counters.length - 1)) {
      guestsValue += value;
    } else {
      newbornsValue += value;
    }
  });

  return [guestsValue, newbornsValue];
}

// Функция, активирующая кнопку reset при первом изменении значения счетчика
function activateResetButton(value, minValue) {
  if (value > minValue) {
    resetButton.classList.remove('dropdown-guests__reset_disable');
  }
}

// Значение кнопки по умолчанию
dropdownMessage.textContent = 'Сколько гостей';

// Обработка изменения значений счетчиков дропдауна
forEach(currentCounters, (counter) => {
  const minValue = +counter.getAttribute('data-min-value');

  counter.addEventListener('click', () => {
    // Новое значение счетчика при каждом клике
    const value = +counter.querySelector('.dropdown-counter__value').textContent;
    // Подсчет сумм счетчиков при каждом клике по отдельному счетчику
    const totalValue = sumCounters(currentCounters);

    // Активация кнопки reset
    activateResetButton(value, minValue);

    // Обновление сообщения в кнопке дропдауна в зависимости от значений счетчиков
    if (totalValue[0] === 0 && totalValue[1] === 0) {
      dropdownMessage.textContent = 'Сколько гостей';
    } else if (totalValue[0] !== 0 && totalValue[1] === 0) {
      const nounGuests = nounDeclension(totalValue[0], ...messageGuests);
      dropdownMessage.textContent = `${totalValue[0]} ${nounGuests}`;
    } else {
      const nounGuests = nounDeclension(totalValue[0], ...messageGuests);
      const nounNewborns = nounDeclension(totalValue[1], ...messageNewborns);
      dropdownMessage.textContent = `${totalValue[0]} ${nounGuests}, ${totalValue[1]} ${nounNewborns}`;
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
  const valueInput = dropdownGuests.querySelector('.dropdown-guests__value');
  const dropdownButton = dropdownGuests.querySelector('.dropdown-button');

  // Обновление значения инпута
  valueInput.value = dropdownMessage.textContent;
  // Имитация клика по кнопке для скрытия меню дропдауна
  dropdownButton.click();
  // Имитация отправки данных на сервер
  console.log(`Sending data (${valueInput.value}) from the guest dropdown to server...`);
});
