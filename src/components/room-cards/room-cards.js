import 'bootstrap/dist/css/bootstrap.css';
import './room-cards.css';
import $ from 'jquery';
import 'bootstrap/js/src/carousel';
import forEach from 'lodash/forEach';
import roomCards from './room-cards.json';
import nounDeclension from '../noun-declension/noun-declension';

// Если на странице присутствует контейнер для карточек комнат
if (document.querySelector('.room-cards')) {
  // То при загрузке страницы находим контейнер для карточек и шаблон карточки комнаты
  window.onload = function createRoomCardsList() {
    const roomCardsList = document.querySelector('.room-cards');
    const template = roomCardsList.querySelector('.room-cards__template');

    // Для каждого свойства из объекта JSON (./room-cards.json) создаем карточку комнаты
    forEach(roomCards, (roomCard) => {
      // Присваиваем id карусели с фотографиями номера для её дальнейшей инициализации
      template.content.querySelector('.room-card__carousel').id = `carousel${roomCard.id}`;
      // Указываем этот id в индикаторах карусели (круглые переключатели снизу)
      const carouselIndicators = template.content.querySelectorAll('.carousel-indicators li');
      forEach(carouselIndicators, (indicator) => {
        const carouselIndicator = indicator;
        carouselIndicator.dataTarget = `#carousel${roomCard.id}`;
      });
      // Указываем этот id в переключателях-стрелках по бокам карусели
      template.content.querySelector('.carousel-control-prev').href = `#carousel${roomCard.id}`;
      template.content.querySelector('.carousel-control-next').href = `#carousel${roomCard.id}`;

      // Указываем пути к фотографиям номера
      template.content.querySelector('.room-card__carousel-photo-1').src = `https://github.com/LiberPolly/FSD_2nd_task/blob/master/src/components/room-cards/images/${roomCard.id}-1.jpg?raw=true`;
      template.content.querySelector('.room-card__carousel-photo-2').src = `https://github.com/LiberPolly/FSD_2nd_task/blob/master/src/components/room-cards/images/${roomCard.id}-2.jpg?raw=true`;
      template.content.querySelector('.room-card__carousel-photo-3').src = `https://github.com/LiberPolly/FSD_2nd_task/blob/master/src/components/room-cards/images/${roomCard.id}-3.jpg?raw=true`;
      template.content.querySelector('.room-card__carousel-photo-4').src = `https://github.com/LiberPolly/FSD_2nd_task/blob/master/src/components/room-cards/images/${roomCard.id}-4.jpg?raw=true`;

      // Заполняем шапку карточки данными номера
      template.content.querySelector('.room-header__room-number').textContent = roomCard.id;
      template.content.querySelector('.room-header__room-category').textContent = roomCard.category;
      template.content.querySelector('.room-header__room-price').textContent = roomCard.price;

      // Указываем количество отзывов и добавляем, соответственно склоненное слово "отзыв"
      template.content.querySelector('.room-card__reviews-amount').textContent = roomCard.reviews;
      template.content.querySelector('.room-card__reviews').textContent = nounDeclension(roomCard.reviews, 'отзыв', 'отзыва', 'отзывов');

      // // Создаем массив элементов всех звезд рейтинга
      const rateStars = [...template.content.querySelectorAll('.material-icons.rate-button__star')];

      // Для каждой полной звезды указываем соответствующее наименование из шрифта material icons
      forEach(rateStars, (rateStar, starIndex) => {
        const star = rateStar;
        const index = starIndex;

        if (index < +roomCard.rate) {
          star.textContent = 'star';
        } else {
          star.textContent = 'star_border';
        }
      });

      // Клонируем контент тега template с данными текущей карты и вставляем его в конец списка
      roomCardsList.append(template.content.cloneNode(true));

      // В созданной и добавленной на страницу карточке инициализируем карусель
      $(`#carousel${roomCard.id}`).carousel({
        interval: 8000,
      });
    });
  };
}
