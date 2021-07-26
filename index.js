const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} Too Short`);
  } else {
    showSuccess(input);
  }
}
function getFieldName(element) {
  const name = element.id;
  const name1 = name[0].toUpperCase() + name.slice(1);
  return name1;
}
function checkEmail(email) {
  const writtenEmail = email.value;
  const condition = validateEmail(writtenEmail);

  if (condition) {
    // showSucces
    showSuccess(email);
  } else {
    // showError
    showError(email, 'Email is not valid');
  }
}
function checkPassword(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, 'Password does not match.');
  } else {
    showSuccess(password2);
  }
}
function showError(input, message) {
  const targetDiv = input.parentElement;
  targetDiv.className = 'form-control error';

  const small = input.nextElementSibling;
  small.innerText = message;
}

function showSuccess(input) {
  const targetDiv = input.parentElement;
  targetDiv.className = 'form-control success';
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkLength(username, 4, 15);

  checkLength(password, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
});
