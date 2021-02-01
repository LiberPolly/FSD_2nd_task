import './date-dropdowns.css';
import 'air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';
import $ from 'jquery';
import split from 'lodash/split';

$(() => {
  $('.date-dropdowns').each(function initiateDropdowns() {
    const thisDateDropdowns = $(this);
    const dropdownFrom = thisDateDropdowns.find('.date-dropdowns__from');
    const dropdownTo = thisDateDropdowns.find('.date-dropdowns__to');

    thisDateDropdowns.find('.date-dropdowns__datepicker').datepicker({
      range: true,
      clearButton: true,
      navTitles: {
        days: 'MM  <i>yyyy</i>',
      },
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      multipleDatesSeparator: ' - ',
      onSelect: (date) => {
        dropdownFrom.val(split(date, '-')[0]);
        dropdownTo.val(split(date, '-')[1]);
      },
      inline: true,
      classes: 'datepicker_disabled',
    });

    // Доступ к экземпляру плагина осуществляется через data атрибут.
    const thisDatepicker = thisDateDropdowns.find('.date-dropdowns__datepicker').data('datepicker');
    // DOM элемент календаря
    const thisDatepickerElement = thisDatepicker.$datepicker;
    // Cоздание и добавление кнопки "применить"
    const submitButton = $('<span class="button_text-only">Применить</span>');
    thisDatepickerElement.find('.datepicker--buttons').append(submitButton);

    // Показать/скрыть календарь
    function toggleDateDropdown() {
      thisDateDropdowns.find('.datepicker').toggleClass('datepicker_disabled');
    }

    // По клику по кнопке "применить" календарь скрывается, данные условно отправляются на сервер
    submitButton.click(() => {
      console.log(`Sending data (${dropdownFrom.val() || '...'} - ${dropdownTo.val() || '...'}) from the date dropdowns to server...`);
      toggleDateDropdown();
    });

    thisDateDropdowns.find('.date-dropdowns__item').click(() => toggleDateDropdown());
  });

  // Скрытие календаря по клику на документе
  function hideCalendar(event) {
    const dateDropdowns = $('.date-dropdowns');
    if (
      dateDropdowns.has(event.target).length === 0
    ) {
      dateDropdowns.find('.datepicker').addClass('datepicker_disabled');
    }
  }
  $(document).on('click', (event) => hideCalendar(event));
});
