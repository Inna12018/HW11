// Задание
// Написать реализацию кнопки "Показать пароль". Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// В файле index.html лежит разметка для двух полей ввода пароля.
// По нажатию на иконку рядом с конкретным полем - должны отображаться символы, которые ввел пользователь, иконка меняет свой внешний вид. В комментариях под иконкой - иконка другая, именно она должна отображаться вместо текущей.
// Когда пароля не видно - иконка поля должна выглядеть, как та, что в первом поле (Ввести пароль)
// Когда нажата иконка, она должна выглядеть, как та, что во втором поле (Ввести пароль)
// По нажатию на кнопку Подтвердить, нужно сравнить введенные значения в полях
// Если значения совпадают - вывести модальное окно (можно alert) с текстом - You are welcome;
// Если значение не совпадают - вывести под вторым полем текст красного цвета  Нужно ввести одинаковые значения

// После нажатия на кнопку страница не должна перезагружаться
// Можно менять разметку, добавлять атрибуты, теги, id, классы и так далее.


const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const icon = document.querySelector('i');
const errorMesage = document.querySelector('.error');
const button = document.querySelector('.btn');



form.addEventListener('click', (event) => {
  if (event.target.tagName === "I") {
    togglePassword(event.target);
  }
});

function togglePassword(iconElement) {
  iconElement.classList.toggle('fa-eye-slash');
  const inputElement = iconElement.previousElementSibling;

  if (inputElement.type = inputElement.type === 'password') {
    inputElement.type = 'text';
  } else {
    inputElement.type = 'password';
    // errorMesage.remove();
  }
}

button.addEventListener('click', event => {
  event.preventDefault();

  if (
    password.value &&
    password.value === password2.value
  ) {
    // errorMesage.remove();
    alert('You are welcome');

  } else if (!password.value) {
    alert('Please fill in password field');
  } else {
    errorMesage.classList.add('visible');
  }
});




