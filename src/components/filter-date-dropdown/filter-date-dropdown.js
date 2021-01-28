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
    // Cоздание и добавление кнопки "применить"
    const submitButton = $('<span class="datepicker--submit-button button_text-only">Применить</span>');
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
    thisFilterDropdown.find('.text-field__input').click(() => toggleDateDropdown());

    $(document).mouseup((e) => {
      if (!thisDatepickerElement.find('.datepicker-inline').is(e.target)) {
        // console.log('not target');
        if (!thisFilterDropdown.find('.datepicker').hasClass('datepicker_disabled')) {
          thisFilterDropdown.find('.datepicker').addClass('datepicker_disabled');
        }
      } else if (thisFilterDropdown.find('.date-dropdowns__arrow').is(e.target)) {
        // console.log('target');
        // if (!thisFilterDropdown.find('.datepicker').hasClass('datepicker_disabled')) {
        //   thisFilterDropdown.find('.datepicker').addClass('datepicker_disabled');
        // }
      }
    });
  });
});
