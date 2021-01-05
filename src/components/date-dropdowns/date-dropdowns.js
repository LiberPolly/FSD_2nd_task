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
const datepickerDouble = [document.querySelector('.datepicker-double')];

console.log($('.datepicker-double'));
console.log(datepickerDouble);

datepickerDouble[0].datepicker({
  clearButton: true,
  // onSelect: (date) => {
  //   const dates = split(date, ' - ');
  //   dateFrom.val(dates[0]);
  //   dateTo.val(dates[1]);
  // },
});

// $('.datepicker-double').datepicker({
//   clearButton: true,
//   // onSelect: (date) => {
//   //   const dates = split(date, ' - ');
//   //   dateFrom.val(dates[0]);
//   //   dateTo.val(dates[1]);
//   // },
// });

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
