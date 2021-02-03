import './filter-date-dropdown.css';
import 'air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/css/datepicker.min.css';
import $ from 'jquery';
import 'air-datepicker';

$(() => {
  $('.filter-date-dropdown').each(function initiateDropdowns() {
    const thisFilterDropdown = $(this);

    thisFilterDropdown.find('.js-datepicker').datepicker({
      range: true,
      clearButton: true,
      dateFormat: 'd M',
      navTitles: {
        days: 'MM  <i>yyyy</i>',
      },
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      multipleDatesSeparator: ' - ',
      inline: true,
      classes: 'datepicker_disabled',
    });

    // Доступ к экземпляру плагина осуществляется через data атрибут.
    const thisDatepicker = thisFilterDropdown.find('.js-datepicker').data('datepicker');
    // DOM элемент календаря
    const thisDatepickerElement = thisDatepicker.$datepicker;

    // // Позиционирование календаря в отдельном диве,
    // // т.к. иначе он позиционируется внутри <label>, что нарушает семантику
    // const thisDatepickerInlineDiv = thisFilterDropdown.find('.datepicker-inline');
    // console.log(thisDatepickerInlineDiv);
    // thisFilterDropdown.find('.filter-date-dropdown__datepicker').append(thisDatepickerInlineDiv);

    // Cоздание и добавление кнопки "применить"
    const submitButton = $('<span class="button_text-only">Применить</span>');
    thisDatepickerElement.find('.datepicker--buttons').append(submitButton);
    // Показать/скрыть календарь
    function toggleDateDropdown() {
      thisFilterDropdown.find('.datepicker').toggleClass('datepicker_disabled');
    }
    // По клику по кнопке "применить" календарь скрывается, данные условно отправляются на сервер
    submitButton.click(() => {
      console.log(`Sending data (${thisFilterDropdown.find('.js-datepicker').val() || '...'}) from the filter date dropdown to server...`);
      toggleDateDropdown();
    });

    thisFilterDropdown.click(() => toggleDateDropdown());
  });

  // Скрытие календаря по клику на документе
  function hideCalendar(event) {
    const filterDateDropdowns = $('.filter-date-dropdown');
    if (
      filterDateDropdowns.has(event.target).length === 0
    ) {
      filterDateDropdowns.find('.datepicker').addClass('datepicker_disabled');
    }
  }
  $(document).on('click', (event) => hideCalendar(event));
});
