import './expandable-checkbox-list.css';
import forEach from 'lodash/forEach';

const expandableCheckboxListButtons = document.querySelectorAll('.expandable-checkbox-list__button');

function togglExpandableCheckboxListArrow(button) {
  const details = button.parentElement;

  if (!details.open) {
    button.classList.remove('expandable-checkbox-list__button_disabled');
  } else {
    button.classList.add('expandable-checkbox-list__button_disabled');
  }
}

forEach(expandableCheckboxListButtons, ((button) => {
  button.addEventListener('click', () => togglExpandableCheckboxListArrow(button));
}));
