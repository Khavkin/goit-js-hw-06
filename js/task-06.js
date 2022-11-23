const inputField = document.querySelector('#validation-input');

const validate = event => {
  event.preventDefault();

  if (inputField.value.length === Number.parseInt(inputField.dataset.length)) {
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
  } else {
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
  }
};

inputField.addEventListener('blur', validate);
