import './like-button.css';
import forEach from 'lodash/forEach';

const likeButtons = document.querySelectorAll('.like-button');

function toggleLikes(likeButton) {
  const checkbox = likeButton.querySelector('.like-button__checkbox');
  const valueEl = likeButton.querySelector('.like-button__value');
  let value = +valueEl.textContent;

  if (checkbox.checked) {
    value += 1;
    valueEl.textContent = value;
  } else {
    value -= 1;
    valueEl.textContent = value;
  }
}

forEach(likeButtons, (likeButton) => {
  likeButton.addEventListener('change', () => toggleLikes(likeButton));
});
