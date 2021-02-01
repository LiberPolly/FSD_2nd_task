import './reviews.css';
import forEach from 'lodash/forEach';
import reviews from './reviews.json';

const reviewsList = document.querySelector('.reviews__list');

forEach(reviews, (review) => {
  const template = `
    <div class="review">
      <div class="review__container-img">
        <div style="background-image: url('src/components/reviews/images/${review.foto}.png')" class="review__foto"></div>
        <div class="review__likes">
          <label class="like-button">
            <input class="like-button__checkbox" type="checkbox"/>
            <span class="like-button__value">${review.likes}</span>
          </label>
        </div>
      </div>
      <div class="review__container-text">
        <span class="review__author">${review.name}</span>
        <span class="review__date">${review.date}</span>
        <span class="review__text">${review.review}</span>
      </div>
    </div>
  `;
  reviewsList.insertAdjacentHTML('beforeend', template);
});
