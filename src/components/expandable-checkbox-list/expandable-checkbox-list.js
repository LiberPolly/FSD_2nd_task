import './expandable-checkbox-list.css';
import forEach from 'lodash/forEach';

const expandableCheckboxListButtons = document.querySelectorAll('.expandable-checkbox-list__button');

function togglExpandableCheckboxList(elem) {
  const menu = elem.nextElementSibling;

  elem.classList.toggle('expandable-checkbox-list__button_disabled');
  menu.classList.toggle('expandable-checkbox-list__menu_disabled');
}

forEach(expandableCheckboxListButtons, ((button) => {
  button.addEventListener('click', () => togglExpandableCheckboxList(button));
}));
