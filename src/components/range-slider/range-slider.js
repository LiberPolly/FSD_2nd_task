import './range-slider.css';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider';
import $ from 'jquery';

$(() => {
  const rangeSliderValue = $('.range-slider__value');
  let rangeSliderValueFrom = 5000;
  let rangeSliderValueTo = 10000;
  rangeSliderValue.text(`${rangeSliderValueFrom.toLocaleString('ru-RU')}₽ - ${rangeSliderValueTo.toLocaleString('ru-RU')}₽`);

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 1000,
    hide_min_max: true,
    hide_from_to: true,
    onChange: (data) => {
      rangeSliderValueFrom = data.from.toLocaleString('ru-RU');
      rangeSliderValueTo = data.to.toLocaleString('ru-RU');
      rangeSliderValue.text(`${rangeSliderValueFrom}₽ - ${rangeSliderValueTo}₽`);
    },
  });
});
