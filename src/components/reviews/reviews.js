import './reviews.css';
import forEach from 'lodash/forEach';
import reviews from './reviews.json';

if (document.querySelector('.reviews')) {
  const reviewsList = document.querySelector('.reviews__list');
  const template = reviewsList.querySelector('.reviews__template');
  // Для каждого свойства из объекта JSON (./reviews.json) создается шаблон отзыва
  forEach(reviews, (review) => {
    template.content.querySelector('.review__foto').style.backgroundImage = `url(./images/${review.foto}.png)`;
    template.content.querySelector('.like-button__value').textContent = review.likes;
    template.content.querySelector('.review__author').textContent = review.name;
    template.content.querySelector('.review__date').textContent = review.date;
    template.content.querySelector('.review__text').textContent = review.review;
    // Клонируется контент тега template с данными текущего отзыва и вставляется в конец списка
    reviewsList.append(template.content.cloneNode(true));
  });
}
