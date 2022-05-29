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
const toggle = document.getElementById('btnToggle');
const icon =  document.querySelector('i');
const button = document.getElementById('btn');


password.addEventListener('click', e => {   
    togglePassword();
});

password2.addEventListener('click', e => {   
    togglePassword2();
});

button.addEventListener('click', e =>{
    checkInputs();
});

function togglePassword() {
  if (password.type === 'password') {
    password.type = 'text';
    icon.classList.add("fa-eye-slash");    
  } else {
    password.type = 'password';
    icon.classList.remove("fa-eye-slash");   
  }
}


function togglePassword2() {
    if (password2.type === 'password') {
      password2.type = 'text';
      icon.classList.add("fa-eye-slash");    
    } else {
      password2.type = 'password';
      icon.classList.remove("fa-eye-slash");   
    }
  }


  function checkInputs() {
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(passwordValue !== password2Value) {	
	    showError();
	} else{
		createAlert();
	}
}


function showError() {
    const errorElement = document.querySelector('.error');
    errorElement.classList.add('visible');
}

function hideError() {
    const errorElement = document.querySelector('.error');
    errorElement.classList.remove('visible');
}

function createAlert() {
    const alertElem = document.createElement('div');
    alertElem.innerHTML = 'You are welcome';
    alertElem.className = "alert";
    document.getElementById("btn").after(alertElem);
  }




