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

    thisDateDropdowns.find('.js-datepicker').datepicker({
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
    const thisDatepicker = thisDateDropdowns.find('.js-datepicker').data('datepicker');
    // DOM элемент календаря
    const thisDatepickerElement = thisDatepicker.$datepicker;
    // Cоздание и добавление кнопки "применить"
    const submitButton = $('<span class="datepicker--submit-button button_text-only">Применить</span>');
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

    thisDateDropdowns.find('.text-field__input').click(() => toggleDateDropdown());

    // dropdownTo.click(() => toggleDateDropdown());
    // dropdownFrom.click(() => toggleDateDropdown());

    // Скрытие календаря по клику на документе
    $(document).mouseup((e) => {
      if (
        !thisDateDropdowns.is(e.target)
        && thisDateDropdowns.has(e.target).length === 0
      ) {
        thisDateDropdowns.find('.datepicker').addClass('datepicker_disabled');
      } else if (
        thisDatepickerElement.is(e.target)
        // && dep.has(e.target).length !== 0
      ) {
        console.log('not hiding');
      }
    });
  });
});
