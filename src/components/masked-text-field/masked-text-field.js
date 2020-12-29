import Inputmask from 'inputmask';
import forEach from 'lodash/forEach';

// Для использования компонента элементу необходимо присвоить класс .masked-text-field

const maskedInputs = document.querySelectorAll('.masked-text-field');
const imDate = new Inputmask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' });

forEach(maskedInputs, ((maskedInput) => {
  imDate.mask(maskedInput);
}));
