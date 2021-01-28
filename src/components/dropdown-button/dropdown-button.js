import './dropdown-button.css';
import forEach from 'lodash/forEach';

const dropdownButtons = document.querySelectorAll('.dropdown-button');

function toggleDropdown(button) {
  const menu = button.nextElementSibling;
  button.classList.toggle('dropdown-button_disabled');
  menu.classList.toggle('dropdown__menu_disabled');
}

forEach(dropdownButtons, ((button) => {
  button.addEventListener('click', () => toggleDropdown(button));
}));
