//пример решения 7 вопроса
// валидация номера кредитной карты 1 вариант
const input = document.querySelector("#bank-card-input"),
  numbers = /[0-9]/,
  regExp = /[0-9]{4}/;

// добавляем слушатель события на инпут
input.addEventListener("input", (ev) => {
  // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
  if (
    (ev.inputType === "insertText" && !numbers.test(ev.data)) ||
    input.value.length > 19
  ) {
    input.value = input.value.slice(0, input.value.length - 1);
    return;
  }

  // обеспечиваем работу клавиш "backspace","delete"
  let value = input.value;
  if (
    ev.inputType === "deleteContentBackward" &&
    regExp.test(value.slice(-4))
  ) {
    input.value = input.value.slice(0, input.value.length - 1);
    return;
  }

  // добавяем пробел после 4 цифр подряд
  if (regExp.test(value.slice(-4)) && value.length < 19) {
    input.value += " ";
  }
});

// валидация номера кредитной карты 2 вариант
function cardnumber(inputtxt) {
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (inputtxt.value.match(cardno)) {
    return true;
  } else {
    alert("Недействительный номер кредитной карты Visa!");
    return false;
  }
}
