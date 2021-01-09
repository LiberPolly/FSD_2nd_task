import './filter-date-dropdown.css';
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

// datepickerDouble[0].datepicker({
//   clearButton: true,
//   // onSelect: (date) => {
//   //   const dates = split(date, ' - ');
//   //   dateFrom.val(dates[0]);
//   //   dateTo.val(dates[1]);
//   // },
// });

$('.datepicker-range').datepicker({
  range: true,
  clearButton: true,
  // onSelect: (date) => {
  //   const dates = split(date, ' - ');
  //   dateFrom.val(dates[0]);
  //   dateTo.val(dates[1]);
  // },
});
