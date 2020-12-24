// Функция склонения существительных
export default function nounDeclension(number, form1, form2, form5) {
  let n = number;
  n %= 100;
  if (n >= 5 && n <= 20) {
    return form5;
  }
  n %= 10;
  if (n === 1) {
    return form1;
  }
  if (n >= 2 && n <= 4) {
    return form2;
  }
  return form5;
}
