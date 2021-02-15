import './theme/global.css';
import './theme/variables.css';
import './theme/fonts.css';
import map from 'lodash/map';
import forEach from 'lodash/forEach';

function requireAll(requireContext) {
  return map(requireContext.keys(), requireContext);
}

requireAll(require.context('./components', true, /^\.\/.*\.js$/)); // pattern to take each .js files
requireAll(require.context('./pages', true, /^\.\/.*\.js$/));

// Поведение всех тегов details в проекте
// Переключение стрелки у тега details
function toggleDetailsArrow(button) {
  const details = button.parentElement;

  if (!details.open) {
    button.classList.remove('summary__button_disabled');
  } else {
    button.classList.add('summary__button_disabled');
  }
}

// Скрытие меню тегов details по клику вне элемента
function hideDetails(event, details) {
  forEach(details, (thisDetails) => {
    const detailsTag = thisDetails;
    if (!detailsTag.contains(event.target)
      && detailsTag.open) {
      detailsTag.open = false;
    }
  });
}

if (document.querySelector('details')) {
  const detailsTags = document.querySelectorAll('details');
  const summaryButtons = document.querySelectorAll('summary');

  forEach(summaryButtons, ((button) => {
    button.addEventListener('click', () => toggleDetailsArrow(button));
  }));

  document.addEventListener('click', (event) => hideDetails(event, detailsTags));
}


