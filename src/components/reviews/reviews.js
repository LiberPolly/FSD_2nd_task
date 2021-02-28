import './reviews.css';
import forEach from 'lodash/forEach';
import reviews from './reviews.json';
import toggleLikes from '../like-button/like-button';

if (document.querySelector('.reviews')) {
  window.onload = function createReviewsList() {
    const reviewsList = document.querySelector('.reviews__list');
    const template = reviewsList.querySelector('.reviews__template');
    // Для каждого свойства из объекта JSON (./reviews.json) создается шаблон отзыва
    forEach(reviews, (review) => {
      template.content.querySelector('.review__foto').style.backgroundImage = `url(https://github.com/LiberPolly/FSD_2nd_task/blob/master/src/components/reviews/images/${review.foto}.png?raw=true)`;
      template.content.querySelector('.like-button__value').textContent = review.likes;
      template.content.querySelector('.review__author').textContent = review.name;
      template.content.querySelector('.review__date').textContent = review.date;
      template.content.querySelector('.review__text').textContent = review.review;
      // Клонируется контент тега template с данными текущего отзыва и вставляется в конец списка
      reviewsList.append(template.content.cloneNode(true));
    });

    console.log('загрузка');
    const likeButtons = document.querySelectorAll('.like-button');
    forEach(likeButtons, (likeButton) => {
      likeButton.addEventListener('change', (e) => toggleLikes(e.currentTarget));
    });
  };
}

// function toggleLikes(thisButton) {
//   console.log('клик');
//   const likeButton = thisButton;
//   const checkbox = likeButton.querySelector('.like-button__checkbox');
//   const valueEl = likeButton.querySelector('.like-button__value');
//   let value = +valueEl.textContent;

//   if (checkbox.checked) {
//     value += 1;
//     valueEl.textContent = value;
//   } else {
//     value -= 1;
//     valueEl.textContent = value;
//   }
// }

// // Поиск лайков и обработка событий на них начинается после полной загрузки страницы,
// // т.к. лайки загружаются динамически.
// window.onload = () => {
//   console.log('загрузка');
//   const likeButtons = document.querySelectorAll('.like-button');
//   forEach(likeButtons, (likeButton) => {
//     likeButton.addEventListener('change', (e) => toggleLikes(e.currentTarget));
//   });
// };
