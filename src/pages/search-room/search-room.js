import './search-room.css';

// Показ и скрытие меню фильтров по клику на чекбокс.
if (document.querySelector('.search-room__bar')) {
  const filtersBar = document.querySelector('.search-room__bar');

  const checkboxMenu = filtersBar.querySelector('.search-room__mob-menu-checkbox');

  const filtersList = filtersBar.querySelector('.search-room__filters-list');

  checkboxMenu.addEventListener('click', () => {
    if (checkboxMenu.checked) {
      filtersList.style.display = 'none';
    } else {
      filtersList.style.display = 'flex';
    }
  });
}
