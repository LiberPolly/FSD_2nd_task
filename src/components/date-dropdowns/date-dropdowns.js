import './date-dropdowns.css';
import 'air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/css/datepicker.min.css';
import $ from 'jquery';
import 'air-datepicker';
// import split from 'lodash/split';
// import forEach from 'lodash/forEach';

// const dateDropdowns = document.querySelector('.date-dropdowns');
// const dateFrom = dateDropdowns.querySelector('.date-from');
// const dateTo = dateDropdowns.querySelector('.date-to');
// const datepickerDouble = [document.querySelector('.datepicker-double')];

console.log($('.datepicker-double'));
// console.log(datepickerDouble);

// datepickerDouble[0].datepicker({
//   clearButton: true,
//   // onSelect: (date) => {
//   //   const dates = split(date, ' - ');
//   //   dateFrom.val(dates[0]);
//   //   dateTo.val(dates[1]);
//   // },
// });

$('.datepicker-double').datepicker({
  clearButton: true,
  range: true,
  // onSelect: (date) => {
  //   const dates = split(date, ' - ');
  //   dateFrom.val(dates[0]);
  //   dateTo.val(dates[1]);
  // },
});

// // Экземпляр класса
// const datep = dateDropdowns.querySelector('.datepicker-double').data('datepicker');
// // Экземпляр кода календаря
// const datepEl = datep.$datepicker;
// // Добавление кнопки
// const applyButton = '<span class=\'datepicker--button\'>Применить</span>';
// applyButton.click(() => {
//   if (datep.selectedDates.length < 2) return;
//   datep.hide();
// });
// datepEl.querySelector('.datepicker--buttons').append(applyButton);
// dateTo.click(() => datep.show());
// dateFrom.click(() => datep.show());

//
//
//
//
//
//
//
//
//
// import './date-dropdowns.css';
// import datepicker from 'js-datepicker';
// import 'js-datepicker/dist/datepicker.min.css';
// import forEach from 'lodash/forEach';

// // конфигурационный объект для startDatepicker и endDatepicker
// const datepickerConfig = {
//   id: 1,
//   showAllDates: true, // включая дни сл. месяца
//   startDate: new Date(), // стартовая дата - сегодня
//   customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
//   customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
// 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
//   overlayButton: 'Выбрать', // при выборе года
//   overlayPlaceholder: 'Введите год', // при выборе года
//   formatter: (input, date) => {
//     const value = date.toLocaleDateString();
//     const i = input;
//     i.value = value;
//   },
//   // onSelect: (instance) => {
//   //   console.log(instance);
//   // // instance.show(); // не скрывать календарь, после выбора даты
//   // },
// };

// // Инициализация дейтпикеров
// const startDatepicker = datepicker('.date-dropdowns__start', datepickerConfig);
// const endDatepicker = datepicker('.date-dropdowns__end', datepickerConfig);
// startDatepicker.getRange();
// endDatepicker.getRange();

// //
// // Кастомизация дейтпикеров
// //
// const dateDropdowns = document.querySelector('.date-dropdowns');
// const datepickerContainers = dateDropdowns.querySelectorAll('.qs-datepicker-container');
// // const startDropdown = dateDropdowns.querySelector('.date-dropdowns__start');
// // const endDropdown = dateDropdowns.querySelector('.date-dropdowns__end');

// // Создание кнопок reset и submit в каждом календаре
// forEach(datepickerContainers, (container) => {
//   container.insertAdjacentHTML('beforeend', `
//   <div class='qs-datepicker-container__buttons'>
//   <span class='qs-datepicker-container__reset'>Очистить</span>
//   <span class='qs-datepicker-container__submit'>Применить</span>
//   </div>`);
// });
// const datepickerResetButtons = dateDropdowns.querySelectorAll('.qs-datepicker-container__reset');
// const datepickerSubmitButtons =
// dateDropdowns.querySelectorAll('.qs-datepicker-container__submit');
// console.log(datepickerSubmitButtons);

// // Функционал кнопки reset
// forEach(datepickerResetButtons, (resetButton) => {
//   resetButton.addEventListener('click', (event) => {
//     event.stopPropagation();
//     const thisContainer = resetButton.parentElement.parentElement;
//     const currentInput = thisContainer.previousElementSibling.previousElementSibling;
//     currentInput.value = '';
//     console.log(currentInput);
//     startDatepicker.dateSelected = undefined;
//     const anotherContainer = thisContainer.parentElement.querySelector('.qs-hidden');
//     const anotherRangeFill = anotherContainer.querySelectorAll('.qs-range-middle');
//     forEach(anotherRangeFill, (cell) => cell.classList.remove('qs-range-middle'));

//     const active = thisContainer.querySelector('.qs-active');
//     const rangeEnd = thisContainer.querySelector('.qs-range-end');
//     const rangeStart = thisContainer.querySelector('.qs-range-start');
//     const rangeFill = thisContainer.querySelectorAll('.qs-range-middle');
//     active.classList.remove('qs-active');
//     rangeEnd.classList.remove('qs-range-end');
//     rangeStart.classList.remove('qs-range-start');
//     forEach(rangeFill, (cell) => cell.classList.remove('qs-range-middle'));
//   });
// });

// // datepickerSubmit.addEventListener('click', (e) => {
// //   e.stopPropagation();
// //   const isHidden = start.calendarContainer.classList.contains('qs-hidden');
// //   start[isHidden ? 'show' : 'hide']();
// //   console.log(`Sending data (${startDropdown.value}-${endDropdown.value})
// // from the date-dropdowns to server...`);
// // });
