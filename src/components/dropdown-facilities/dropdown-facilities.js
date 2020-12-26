import './dropdown-facilities.css';
// import forEach from 'lodash/forEach';
import nounDeclension from '../noun-declension/noun-declension';

const dropdownFacilities = document.querySelector('.dropdown-facilities');
const dropdownMessage = dropdownFacilities.querySelector('.dropdown-button__message');

// Счетчики для удобств в номере
const counterBedrooms = dropdownFacilities.querySelector('.dropdown-facilities__menu-item-bedrooms').nextElementSibling;
const counterBeds = dropdownFacilities.querySelector('.dropdown-facilities__menu-item-beds').nextElementSibling;
const counterBathrooms = dropdownFacilities.querySelector('.dropdown-facilities__menu-item-bathrooms').nextElementSibling;

// Словоформы
const messageBedrooms = ['спальня', 'спальни', 'спален'];
const messageBeds = ['кровать', 'кровати', 'кроватей'];
const messageBathrooms = ['ванная', 'ванных', 'ванных'];

// Значение сообщения в кнопке по умолчанию
const message = ['2 спальни', ', 2 кровати', '...'];
dropdownMessage.textContent = message.join('');

// Функция, меняющая сообщение в кнопке в зависимости от значения счетчика
function changeMessage(counter, messageNouns, defaultMessage, indexInMessage) {
  const value = +counter.querySelector('.dropdown-counter__value').textContent;
  const minValue = +counter.getAttribute('data-min-value');
  const noun = nounDeclension(value, ...messageNouns);
  let currentCounterMessage = '';

  if (value === minValue) {
    currentCounterMessage = defaultMessage; // дефолтное сообщение, если значение минимальное
  } else if (indexInMessage === 0) {
    currentCounterMessage = `${value} ${noun}`; // сообщение для первого счетчика
  } else {
    currentCounterMessage = `, ${value} ${noun}`; // сообщение для остальных счетчиков с запятой в начале
  }

  message.splice(indexInMessage, 1, currentCounterMessage);
  dropdownMessage.textContent = message.join('');
}

// Обработка кликов по счетчикам
counterBedrooms.addEventListener('click', () => changeMessage(counterBedrooms, messageBedrooms, '2 спальни', 0));
counterBeds.addEventListener('click', () => changeMessage(counterBeds, messageBeds, ', 2 кровати', 1));
counterBathrooms.addEventListener('click', () => changeMessage(counterBathrooms, messageBathrooms, '...', 2));
