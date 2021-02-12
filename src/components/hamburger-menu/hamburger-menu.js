import './hamburger-menu.css';
import forEach from 'lodash/forEach';

// Показ и скрытие меню хедера по клику на бургер меню.
// Код с расчетом на несколько хедеров, т.к. в ui-kit на странице располагается 2 хедера
if (document.querySelector('.hamburger-menu')) {
  const headers = document.querySelectorAll('.header');

  forEach(headers, (header) => {
    const hamburgerMenu = header.querySelector('.hamburger-menu__checkbox');

    const headerMenuContainer = header.querySelector('.header__container');

    hamburgerMenu.addEventListener('click', () => {
      if (hamburgerMenu.checked) {
        headerMenuContainer.style.display = 'flex';
      } else {
        headerMenuContainer.style.display = 'none';
      }
    });
  });
}
