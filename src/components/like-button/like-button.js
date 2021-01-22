import './like-button.css';
import forEach from 'lodash/forEach';

function toggleLikes(thisButton) {
  const likeButton = thisButton;
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

// Поиск лайков и обработка событий на них начинается после полной загрузки страницы,
// т.к. лайки загружаются динамически.
window.onload = () => {
  const likeButtons = document.querySelectorAll('.like-button');
  forEach(likeButtons, (likeButton) => {
    likeButton.addEventListener('change', (e) => toggleLikes(e.currentTarget));
  });
};
